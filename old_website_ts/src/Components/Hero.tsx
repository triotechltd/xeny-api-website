"use client";

import React, { useState, useRef, useEffect } from "react";
import { CircleStop, Mic, MicOff, Power } from "lucide-react";
import { BeatLoader } from "react-spinners";
import { Player, Recorder } from "../lib/audio.ts";
import { WebSocketClient } from "../lib/client.ts";

interface Message {
  id: string;
  type: "user" | "assistant" | "status";
  content: string;
}

type WSControlAction = "speech_started" | "connected" | "text_done";

interface WSMessage {
  id?: string;
  type: "text_delta" | "transcription" | "user_message" | "control";
  delta?: string;
  text?: string;
  action?: WSControlAction;
  greeting?: string;
}

const useAudioHandlers = () => {
  const audioPlayerRef = useRef<Player | null>(null);
  const audioRecorderRef = useRef<Recorder | null>(null);

  const initAudioPlayer = async () => {
    if (!audioPlayerRef.current) {
      audioPlayerRef.current = new Player();
      await audioPlayerRef.current.init(24000);
    }
    return audioPlayerRef.current;
  };

  const handleAudioRecord = async (
    webSocketClient: WebSocketClient | null,
    isRecording: boolean
  ) => {
    if (!isRecording && webSocketClient) {
      if (!audioRecorderRef.current) {
        audioRecorderRef.current = new Recorder(async (buffer) => {
          await webSocketClient?.send({ type: "binary", data: buffer });
        });
      }
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          sampleRate: 24000,
        },
      });
      await audioRecorderRef.current.start(stream);
      return true;
    } else if (audioRecorderRef.current) {
      await audioRecorderRef.current.stop();
      audioRecorderRef.current = null;
      return false;
    }
    return isRecording;
  };

  return {
    audioPlayerRef,
    audioRecorderRef,
    initAudioPlayer,
    handleAudioRecord,
  };
};

const ChatInterface = () => {
  const [endpoint, setEndpoint] = useState("ws://localhost:8080/realtime");
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [validEndpoint, setValidEndpoint] = useState(true);
  const webSocketClient = useRef<WebSocketClient | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageMap = useRef(new Map<string, Message>());
  const currentConnectingMessage = useRef<Message>();
  const currentUserMessage = useRef<Message>();

  const {
    audioPlayerRef,
    audioRecorderRef,
    initAudioPlayer,
    handleAudioRecord,
  } = useAudioHandlers();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleWSMessage = async (message: WSMessage) => {
    switch (message.type) {
      case "transcription":
        if (message.id) {
          currentUserMessage.current!.content = message.text!;
          setMessages(Array.from(messageMap.current.values()));
        }
        break;
      case "text_delta":
        if (message.id) {
          const existingMessage = messageMap.current.get(message.id);
          if (existingMessage) {
            existingMessage.content += message.delta!;
          } else {
            const newMessage: Message = {
              id: message.id,
              type: "assistant",
              content: message.delta!,
            };
            messageMap.current.set(message.id, newMessage);
          }
          setMessages(Array.from(messageMap.current.values()));
        }
        break;
      case "control":
        if (message.action === "connected" && message.greeting) {
          currentConnectingMessage.current!.content = message.greeting!;
          setMessages(Array.from(messageMap.current.values()));
        } else if (message.action === "speech_started") {
          audioPlayerRef.current?.clear();
          const contrivedId = "userMessage" + Math.random();
          currentUserMessage.current = {
            id: contrivedId,
            type: "user",
            content: "...",
          };
          messageMap.current.set(contrivedId, currentUserMessage.current);
          setMessages(Array.from(messageMap.current.values()));
        }
        break;
    }
  };

  const receiveLoop = async () => {
    const player = await initAudioPlayer();
    if (!webSocketClient.current) return;

    for await (const message of webSocketClient.current) {
      if (message.type === "text") {
        const data = JSON.parse(message.data) as WSMessage;
        await handleWSMessage(data);
      } else if (message.type === "binary" && player) {
        player.play(new Int16Array(message.data));
      }
    }
  };

  const handleConnect = async () => {
    if (isConnected) {
      await disconnect();
    } else {
      const statusMessageId = `status-${Date.now()}`;

      currentConnectingMessage.current = {
        id: statusMessageId,
        type: "status",
        content: "Connecting...",
      };
      messageMap.current.clear(); // Clear messages on new connection
      messageMap.current.set(statusMessageId, currentConnectingMessage.current);
      setMessages(Array.from(messageMap.current.values()));
      setIsConnecting(true);
      try {
        webSocketClient.current = new WebSocketClient(new URL(endpoint));
        setIsConnected(true);
        receiveLoop();
      } catch (error) {
        console.error("Connection failed:", error);
      } finally {
        setIsConnecting(false);
        toggleRecording();
      }
    }
  };

  const disconnect = async () => {
    setIsConnected(false);
    if (isRecording) {
      await toggleRecording();
    }
    audioRecorderRef.current?.stop();
    await audioPlayerRef.current?.clear();
    await webSocketClient.current?.close();
    webSocketClient.current = null;
    messageMap.current.clear();
    setMessages([]);
  };

  const sendMessage = async () => {
    if (currentMessage.trim() && webSocketClient.current) {
      const messageId = `user-${Date.now()}`;
      const message = {
        type: "user_message",
        text: currentMessage,
      };
      const newMessage: Message = {
        id: messageId,
        type: "user",
        content: currentMessage,
      };
      messageMap.current.set(messageId, newMessage);
      setMessages(Array.from(messageMap.current.values()));
      setCurrentMessage("");
      await webSocketClient.current.send({
        type: "text",
        data: JSON.stringify(message),
      });
    }
  };

  const toggleRecording = async () => {
    try {
      const newRecordingState = await handleAudioRecord(
        webSocketClient.current,
        isRecording
      );
      setIsRecording(newRecordingState);
    } catch (error) {
      console.error("Recording error:", error);
      setIsRecording(false);
    }
  };

  useEffect(() => {
    return () => {
      disconnect();
    };
  }, []);

  const validateEndpoint = (url: string) => {
    setEndpoint(url);
    try {
      new URL(url);
      setValidEndpoint(true);
    } catch {
      setValidEndpoint(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 mt-12">
      <div
        className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 items-center rounded-3xl p-4 md:p-12"
        style={{
          background:
            "radial-gradient(circle, rgb(4 103 203) 0%, rgb(75 164 255) 0%, rgb(0 105 213) 37%)",
        }}
      >
        <div className="relative order-2 lg:order-1 text-white">
          <div className="space-y-4 md:space-y-6">
            <div className="inline-block bg-[#3a0ffb] rounded-md px-4 py-1.5">
              <span className="text-sm font-semibold text-white">
                Live demo
              </span>
            </div>

            <h1 className="text-4xl lg:text-4xl font-bold leading-tight text-white">
              Can't believe?{" "}
              <span className="bg-gradient-to-r from-[#89c1fa] via-[#ffdcdc] to-[#89c1fa] text-transparent bg-clip-text animate-gradient">
                Try NOW
              </span>{" "}
              a <br className="hidden sm:block" /> free test call
            </h1>

            <div className="space-y-3 text-gray-300">
              <p className="text-xl font-medium">
                Curious how our AI agents work?
              </p>

              <p className="text-base text-[#c4c0cb]">
                Get a hands-on experience by trying a free demo call. Fill in
                your <br className="hidden sm:block" />
                details, and our AI representative will call you instantly.
              </p>

              <p className="text-base">
                Agent is trained to discuss about AI Voice Bot services and book{" "}
                <br className="hidden sm:block" />
                appointments.
              </p>
            </div>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 border-blue-gradient rounded-[24px] shadow-4xl">
          <div className="rounded-[10px] p-6 md:p-8 bg-[#1A1F1B] backdrop-blur-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-[#3a0ffb] ring-offset-2 ring-offset-[#1A1F1B]">
                <img
                  src="images/cartoon.png"
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-2xl text-[#e2e4e4]">
                  Xeny AI Voice agent
                </h3>
                <p className="text-lg text-[#3a0ffb]">
                  AI Voice Bot representative
                </p>
                {/* <div className="flex items-center gap-2 py-1.5 rounded-full">
                  <img
                    src="images/flag.svg"
                    alt="US Flag"
                    className="w-6 h-6"
                  />
                  <span className="text-md font-medium text-[#e2e4e4]">
                    English
                  </span>
                </div> */}
              </div>
            </div>

            <div className="space-y-4 flex justify-center">
              {isConnecting ? (
                <BeatLoader />
              ) : (
                <div
                  className="bg-blue-500 p-4 rounded-full transform transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg animate-wave"
                  onClick={() => {
                    handleConnect();
                  }}
                >
                  {isRecording ? (
                    <CircleStop className="text-white" />
                  ) : (
                    <Mic className="text-white" />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // return (
  //   <div className="flex h-screen">
  //     <div className="w-80 bg-gray-50 p-4 flex flex-col border-r">
  //       <div className="flex-1 overflow-y-auto">
  //         <div type="single" className="space-y-4" value="connection">
  //           <div value="connection">
  //             <div className="text-lg font-semibold">Middle Tier Endpoint</div>
  //             <div className="space-y-4">
  //               <input
  //                 placeholder="Endpoint"
  //                 value={endpoint}
  //                 onChange={(e) => validateEndpoint(e.target.value)}
  //                 disabled={isConnected}
  //               />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <button
  //         className="mt-4"
  //         variant={isConnected ? "destructive" : "default"}
  //         onClick={handleConnect}
  //         disabled={isConnecting || !validEndpoint}
  //       >
  //         <Power className="w-4 h-4 mr-2" />
  //         {isConnecting
  //           ? "Connecting..."
  //           : isConnected
  //           ? "Disconnect"
  //           : "Connect"}
  //       </button>
  //     </div>

  //     <div className="flex-1 flex flex-col">
  //       <div className="flex-1 p-4 overflow-y-auto">
  //         <div className="space-y-4">
  //           {messages.map((message) => (
  //             <div
  //               key={message.id}
  //               className={`p-3 rounded-lg ${
  //                 message.type === "user"
  //                   ? "bg-blue-100 ml-auto max-w-[80%]"
  //                   : message.type === "status"
  //                   ? "bg-gray-50 mx-auto max-w-[80%] text-center"
  //                   : "bg-gray-100 mr-auto max-w-[80%]"
  //               }`}
  //             >
  //               {message.content}
  //             </div>
  //           ))}
  //         </div>
  //         <div ref={messagesEndRef} />
  //       </div>

  //       <div className="p-4 border-t">
  //         <div className="flex gap-2">
  //           <input
  //             value={currentMessage}
  //             onChange={(e) => setCurrentMessage(e.target.value)}
  //             placeholder="Type your message..."
  //             onKeyUp={(e) => e.key === "Enter" && sendMessage()}
  //             disabled={!isConnected}
  //           />
  //           <button
  //             variant="outline"
  //             onClick={toggleRecording}
  //             className={isRecording ? "bg-red-100" : ""}
  //             disabled={!isConnected}
  //           >
  //             {isRecording ? (
  //               <Mic className="w-4 h-4" />
  //             ) : (
  //               <MicOff className="w-4 h-4" />
  //             )}
  //           </button>
  //           <button onClick={sendMessage} disabled={!isConnected}>
  //             <Send className="w-4 h-4" />
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default ChatInterface;
