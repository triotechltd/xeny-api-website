

<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.bundle.min.js"></script>
<script src="js/owl.carousel.min.js"></script>
<script>


 const menu = document.querySelector(".menu");
 const menuMain = menu.querySelector(".menu-main");
 const goBack = menu.querySelector(".go-back");
 const menuTrigger = document.querySelector(".mobile-menu-trigger");
 const closeMenu = menu.querySelector(".mobile-menu-close");
 let subMenu;
 menuMain.addEventListener("click", (e) =>{
 	if(!menu.classList.contains("active")){
 		return;
 	}
   if(e.target.closest(".menu-item-has-children")){
   	 const hasChildren = e.target.closest(".menu-item-has-children");
      showSubMenu(hasChildren);
   }
 });
 goBack.addEventListener("click",() =>{
 	 hideSubMenu();
 })
 menuTrigger.addEventListener("click",() =>{
 	 toggleMenu();
 })
 closeMenu.addEventListener("click",() =>{
 	 toggleMenu();
 })
 document.querySelector(".menu-overlay").addEventListener("click",() =>{
 	toggleMenu();
 })
 function toggleMenu(){
 	menu.classList.toggle("active");
 	document.querySelector(".menu-overlay").classList.toggle("active");
 }
 function showSubMenu(hasChildren){
    subMenu = hasChildren.querySelector(".sub-menu");
    subMenu.classList.add("active");
    subMenu.style.animation = "slideLeft 0.5s ease forwards";
    const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
    menu.querySelector(".current-menu-title").innerHTML=menuTitle;
    menu.querySelector(".mobile-menu-head").classList.add("active");
 }

 function  hideSubMenu(){  
    subMenu.style.animation = "slideRight 0.5s ease forwards";
    setTimeout(() =>{
       subMenu.classList.remove("active");	
    },300); 
    menu.querySelector(".current-menu-title").innerHTML="";
    menu.querySelector(".mobile-menu-head").classList.remove("active");
 }
 
 window.onresize = function(){
 	if(this.innerWidth >991){
 		if(menu.classList.contains("active")){
 			toggleMenu();
 		}

 	}
 }


</script>
<script>
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY >= 56) {
      header.style.background = "rgb(0 0 0 / 95%)"; // Solid background
    } else {
      header.style.background = "rgb(0 0 0 / 10%)"; // Transparent background
    }
  });
</script>

<script>
const recordAudio = () =>
  new Promise(async (resolve) => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    const audioChunks = [];
    mediaRecorder.addEventListener("dataavailable", (event) => {
      audioChunks.push(event.data);
    });

    const start = () => mediaRecorder.start();

    const stop = () =>
      new Promise((resolve) => {
        mediaRecorder.addEventListener("stop", () => {
          const audioBlob = new Blob(audioChunks);
          const audioUrl = URL.createObjectURL(audioBlob);
          const audio = new Audio(audioUrl);
          const play = () => audio.play();
          resolve({ audioBlob, audioUrl, play });
        });
        mediaRecorder.stop();
      });

    resolve({ start, stop });
  });

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

const recorders = [
  "recorder",
  "recorder1",
  "recorder2",
  "recorder3",
  "recorder4"
];

recorders.forEach((id) => {
  const recorderDiv = document.getElementById(id);

  let isRecording = false;

  recorderDiv.addEventListener("click", async () => {
    if (recorderDiv.classList.contains("recording")) {
      recorderDiv.classList.remove("recording");
      recorderDiv.classList.add("download");
      isRecording = false;
      setTimeout(() => {
        recorderDiv.classList.remove("download");
        recorderDiv.classList.add("out");
      }, 1000);
    } else if (
      !recorderDiv.classList.contains("recording") &&
      !recorderDiv.classList.contains("download")
    ) {
      recorderDiv.classList.remove("out");
      recorderDiv.classList.add("recording");
      isRecording = true;

      const recording = await recordAudio();
      recording.start();

      while (isRecording) {
        await sleep(1);
      }

      const audio = await recording.stop();
      await sleep(2000);
      audio.play();
    }
  });
});
</script>
<script>


document.addEventListener("DOMContentLoaded", () => {
 function counter(id, start, end, duration) {
  let obj = document.getElementById(id),
   current = start,
   range = end - start,
   increment = end > start ? 1 : -1,
   step = Math.abs(Math.floor(duration / range)),
   timer = setInterval(() => {
    current += increment;
    obj.textContent = current;
    if (current == end) {
     clearInterval(timer);
    }
   }, step);
 }
 counter("count1", 50, 40, 82);
 counter("count2", 50, 85, 95);
 counter("count3", 0, 90, 55);
   
});

</script>
 
<script>
var stopCircle = document.getElementsByClassName('anima');
for (var i = 0; i < stopCircle.length; i++) {
    if (stopCircle[i].matches(':hover')) {}
    stopCircle[i].addEventListener("mouseover", function(event) {
        document.getElementsByClassName('circle-arround-two-1')[0].classList.add("stopanima");
        document.getElementsByClassName('circle-arround-two-2')[0].classList.add("stopanima");
        document.getElementsByClassName('circle-arround-two-3')[0].classList.add("stopanima");
        document.getElementsByClassName('circle-arround-two-4')[0].classList.add("stopanima");
    });
    stopCircle[i].addEventListener("mouseout", function(event) {
        document.getElementsByClassName('circle-arround-two-1')[0].classList.remove("stopanima");
        document.getElementsByClassName('circle-arround-two-2')[0].classList.remove("stopanima");
        document.getElementsByClassName('circle-arround-two-3')[0].classList.remove("stopanima");
        document.getElementsByClassName('circle-arround-two-4')[0].classList.remove("stopanima");
    });
}


</script>
<script>
  const track = document.getElementById('sliderTrack');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;
  const totalSlides = dots.length;

  function updateSlider() {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  function goToSlide(index) {
    currentSlide = index;
    updateSlider();
  }

  document.getElementById('prevBtn').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  });

  updateSlider();
</script>
<script>
 jQuery("#carousel-01").owlCarousel({
  autoplay: true,
  rewind: true,
  margin: 30,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1024: {
      items: 3
    },
    1366: {
      items: 3
    }
  }
});
</script>

<script>
 document.addEventListener('DOMContentLoaded', function() {
  // Funktion zum Scrollen und Entfernen des Hash
  function handleAnchorClick(e) {
    // Verhindere Standardverhalten
    e.preventDefault();

    // Extrahiere den Ziel-Anker
    const href = this.getAttribute('href');
    let targetId;

    // Fall 1: Einfacher Anchor-Link (z.B. "#about")
    if (href.startsWith('#')) {
      targetId = href.substring(1);
      scrollToTarget(targetId);
    } 
    // Fall 2: Vollständige URL mit Anchor (z.B. "https://.../#about")
    else {
      const url = new URL(href);
      if (url.hash) {
        targetId = url.hash.substring(1);

        // Wenn Link zur Hauptseite geht
        if (url.hostname === window.location.hostname && 
            (url.pathname === '/' || url.pathname === '/index.php')) {
          scrollToTarget(targetId);

          // Zur Hauptseite navigieren, falls nicht schon dort
          if (window.location.pathname !== '/' && window.location.pathname !== '/index.php') {
            window.location.href = '/' + '#' + targetId;
            return;
          }
        }
      }
    }
  }

  // Funktion zum Scrollen zum Ziel
  function scrollToTarget(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Smooth Scroll
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });

      // URL ohne Hash aktualisieren
      history.replaceState(null, null, ' ');
    }
  }

  // Event-Listener für alle Anchor-Links
  document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', handleAnchorClick);
  });

  // Behandle initialen Hash beim Laden der Seite
  if (window.location.hash) {
    const targetId = window.location.hash.substring(1);
    scrollToTarget(targetId);
  }

  // Back-to-top Button anzeigen/verstecken
  const backToTopButton = document.getElementById('backToTop');
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });
});
</script>

 <script>
  const sets = [
    { playId: 'playBtn', waveId: 'audioWaves' },
    { playId: 'playBtn1', waveId: 'audioWaves1' },
    { playId: 'playBtn2', waveId: 'audioWaves2' },
  ];

  sets.forEach(set => {
    const playBtn = document.getElementById(set.playId);
    const audioWaves = document.getElementById(set.waveId);

    if (playBtn && audioWaves) {
      playBtn.addEventListener('click', () => {
        playBtn.style.display = 'none';
        audioWaves.style.display = 'block';
      });

      audioWaves.addEventListener('click', () => {
        audioWaves.style.display = 'none';
        playBtn.style.display = 'flex';
      });
    }
  });
</script>
<script>
document.addEventListener('DOMContentLoaded', function() {
    // Verifica se o navegador suporta a captura de áudio
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Solicita permissão para acessar o microfone
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(function(stream) {
                // Configura o contexto de áudio
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const source = audioContext.createMediaStreamSource(stream);
                const analyser = audioContext.createAnalyser();
                analyser.fftSize = 256;

                // Cria um buffer para armazenar os dados do volume
                const dataArray = new Uint8Array(analyser.frequencyBinCount);
                
                source.connect(analyser);

                // Elementos que representam os círculos
                const circles = document.querySelectorAll('.circle');

                function checkVolume() {
                    analyser.getByteFrequencyData(dataArray);

                    // Calcula o volume médio
                    const volume = dataArray.reduce((a, b) => a + b) / dataArray.length;

                    // Calcula a escala e a duração da rotação com base no volume
                    const scale = 1 + (volume / 255) * 1.5;  // Escala maior para impacto visível (1 + 150% no máximo)
                    const rotationDuration = Math.max(4, 10 - (volume / 255) * 10);  // Mais volume = rotação mais lenta
                    const borderRadius = 48 - (volume / 255) * 10;  // Ajusta o border-radius (menos circular com mais volume)

                    // Aplica a nova escala, rotação e border-radius a cada círculo
                    circles.forEach(circle => {
                        circle.style.transform = `translate(-50%, -50%) scale(${scale})`;
                        circle.style.animationDuration = `${rotationDuration}s`;  // Ajusta a duração da rotação
                        circle.style.setProperty('--dynamic-border-radius', `${borderRadius}%`);  // Define o border-radius dinâmico
                    });

                    requestAnimationFrame(checkVolume);
                }

                // Inicia a checagem do volume
                checkVolume();
            })
            .catch(function(err) {
                console.log('Erro ao acessar o microfone: ' + err);
            });
    } else {
        console.log('getUserMedia não é suportado neste navegador.');
    }
});
  

</script>

<script>
 const micBtn = document.getElementById("micBtn");
  const micText = document.getElementById("micText");

  let isListening = false;

  micBtn.addEventListener("click", () => {
    isListening = !isListening;

    if (isListening) {
      micBtn.classList.add("listening");
      micText.textContent = '"Listening..."';
      // Add actual voice recognition logic here if needed
    } else {
      micBtn.classList.remove("listening");
      micText.textContent = '"Click here to talk"';
    }
  });

</script>

 <script>
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".playSound");
    const audios = document.querySelectorAll(".audio");
    let currentAudio = null;

    buttons.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();

            const audioId = btn.getAttribute("data-id");
            const audio = document.getElementById(audioId);

            // Stop all other audios
            audios.forEach(aud => {
                if (aud !== audio) {
                    aud.pause();
                    aud.currentTime = 0;
                }
            });

            // Toggle play/pause
            if (audio.paused) {
                audio.play().catch(err => console.error("Audio play error:", err));
                currentAudio = audio;
            } else {
                audio.pause();
                audio.currentTime = 0;
                currentAudio = null;
            }
        });
    });
});
</script>
<!-- Audio Worklet Scripts -->
<script>
    // Audio worklet code strings for dynamic loading
    const playbackWorkletCode = `
        class PlaybackWorklet extends AudioWorkletProcessor {
            constructor() {
                super();
                this.port.onmessage = this.handleMessage.bind(this);
                this.buffer = [];
            }

            handleMessage(event) {
                if (event.data === null) {
                    this.buffer = [];
                    return;
                }
                this.buffer.push(...event.data);
            }

            process(inputs, outputs, parameters) {
                const output = outputs[0];
                const channel = output[0];

                if (this.buffer.length > channel.length) {
                    const toProcess = this.buffer.splice(0, channel.length);
                    channel.set(toProcess.map((v) => v / 32768));
                } else {
                    channel.set(this.buffer.map((v) => v / 32768));
                    this.buffer = [];
                }

                return true;
            }
        }
        registerProcessor("playback-worklet", PlaybackWorklet);
    `;

    const recorderWorkletCode = `
        class PCMProcessor extends AudioWorkletProcessor {
            constructor() {
                super();
            }

            process(inputs) {
                const input = inputs[0];
                if (input.length > 0) {
                    const float32Buffer = input[0];
                    const int16Buffer = this.convertFloat32ToInt16(float32Buffer);
                    this.port.postMessage(int16Buffer);
                }
                return true;
            }

            convertFloat32ToInt16(float32Array) {
                const int16Array = new Int16Array(float32Array.length);
                for (let i = 0; i < float32Array.length; i++) {
                    let val = Math.floor(float32Array[i] * 0x7fff);
                    val = Math.max(-0x8000, Math.min(0x7fff, val));
                    int16Array[i] = val;
                }
                return int16Array;
            }
        }
        registerProcessor("recorder-worklet", PCMProcessor);
    `;
</script>

<!-- Main Application Script -->
<script>
    // Audio Player Class
    class Player {
        constructor() {
            this.playbackNode = null;
        }

        async init(sampleRate) {
            if (this.playbackNode === null) {
                const audioContext = new AudioContext({ sampleRate });
                await audioContext.audioWorklet.addModule("data:text/javascript," + encodeURIComponent(playbackWorkletCode));

                this.playbackNode = new AudioWorkletNode(audioContext, "playback-worklet");
                this.playbackNode.connect(audioContext.destination);
            }
        }

        play(buffer) {
            if (this.playbackNode) {
                this.playbackNode.port.postMessage(buffer);
            }
        }

        clear() {
            if (this.playbackNode) {
                this.playbackNode.port.postMessage(null);
            }
        }
    }

    // Audio Recorder Class
    class Recorder {
        constructor(onDataAvailable) {
            this.onDataAvailable = onDataAvailable;
            this.audioContext = null;
            this.mediaStream = null;
            this.mediaStreamSource = null;
            this.workletNode = null;
        }

        async start(stream) {
            try {
                this.audioContext = new AudioContext({ 
                    latencyHint: "interactive", 
                    sampleRate: 24000 
                });
                
                await this.audioContext.audioWorklet.addModule("data:text/javascript," + encodeURIComponent(recorderWorkletCode));

                this.mediaStream = stream;
                this.mediaStreamSource = this.audioContext.createMediaStreamSource(this.mediaStream);
                this.workletNode = new AudioWorkletNode(this.audioContext, "recorder-worklet", {
                    numberOfInputs: 1,
                    numberOfOutputs: 1,
                    channelCount: 1,
                    processorOptions: {
                        sampleRate: this.audioContext.sampleRate,
                    },
                });

                this.workletNode.port.onmessage = (event) => {
                    this.onDataAvailable(event.data.buffer);
                };

                this.mediaStreamSource.connect(this.workletNode);
                this.workletNode.connect(this.audioContext.destination);
            } catch (error) {
                console.error("Recording error:", error);
                this.stop();
            }
        }

        stop() {
            if (this.mediaStream) {
                this.mediaStream.getTracks().forEach((track) => track.stop());
            }
            if (this.audioContext) {
                this.audioContext.close();
            }
        }
    }

    // WebSocket Client Class
    class WebSocketClient {
        constructor(url) {
            this.socket = undefined;
            this.connectedPromise = new Promise(async (resolve, reject) => {
                this.socket = new WebSocket(url);
                this.socket.binaryType = "arraybuffer";
                
                this.socket.onopen = () => {
                    this.socket.onmessage = (ev) => this.messageHandler(ev);
                    this.closedPromise = new Promise((resolve) => {
                        this.socket.onclose = this.getClosedHandler(resolve);
                    });
                    this.socket.onerror = (ev) => this.handleError(ev);
                    resolve();
                };
                
                this.socket.onerror = (ev) => {
                    this.error = ev.error || new Error("Unknown error");
                    reject(ev);
                };
            });

            this.closedPromise = undefined;
            this.error = undefined;
            this.messageQueue = [];
            this.receiverQueue = [];
            this.done = false;
        }

        handleError(event) {
            this.error = event.error || new Error("Unknown error");
            while (this.receiverQueue.length > 0) {
                const [_, reject] = this.receiverQueue.shift();
                reject(this.error);
            }
        }

        getClosedHandler(closeResolve) {
            return (_) => {
                this.done = true;
                while (this.receiverQueue.length > 0) {
                    const [resolve, reject] = this.receiverQueue.shift();
                    if (this.error) {
                        reject(this.error);
                    } else {
                        resolve({ value: undefined, done: true });
                    }
                }
                closeResolve();
            };
        }

        messageHandler(event) {
            const data = event.data;
            const message = (data instanceof ArrayBuffer) ? 
                { type: "binary", data } : 
                { type: "text", data };
            
            if (this.receiverQueue.length > 0) {
                const [resolve, _] = this.receiverQueue.shift();
                resolve({ value: message, done: false });
            } else {
                this.messageQueue.push(message);
            }
        }

        [Symbol.asyncIterator]() {
            return {
                next: () => {
                    if (this.error) {
                        return Promise.reject(this.error);
                    } else if (this.done) {
                        return Promise.resolve({ value: undefined, done: true });
                    } else if (this.messageQueue.length > 0) {
                        const message = this.messageQueue.shift();
                        return Promise.resolve({ value: message, done: false });
                    } else {
                        return new Promise((resolve, reject) => {
                            this.receiverQueue.push([resolve, reject]);
                        });
                    }
                },
            };
        }

        async send(message) {
            await this.connectedPromise;
            if (this.error) {
                throw this.error;
            }
            if (this.socket?.readyState !== WebSocket.OPEN) {
                throw new Error("WebSocket is not open");
            }
            this.socket.send(message.data);
        }

        async close() {
            await this.connectedPromise;
            if (this.done) {
                return;
            }

            if (this.socket?.readyState === WebSocket.OPEN) {
                this.socket.close();
                await this.closedPromise;
            }
        }
    }

    // Main Application State
    let endpoint = "wss://webapiss.xeny.ai/realtime";
    let isRecording = false;
    let isConnected = false;
    let isConnecting = false;
    let webSocketClient = null;

    // Audio handlers
    let audioPlayerRef = null;
    let audioRecorderRef = null;

    // DOM Elements
    const micButton = document.getElementById('micButton');
    const micIcon = document.getElementById('micIcon');
    const stopIcon = document.getElementById('stopIcon');
    const loadingSpinner = document.getElementById('loadingSpinner');

    // Initialize audio player
    async function initAudioPlayer() {
        if (!audioPlayerRef) {
            audioPlayerRef = new Player();
            await audioPlayerRef.init(24000);
        }
        return audioPlayerRef;
    }

    // Handle audio recording
    async function handleAudioRecord(webSocketClient, isRecording) {
        if (!isRecording && webSocketClient) {
            if (!audioRecorderRef) {
                audioRecorderRef = new Recorder(async (buffer) => {
                    await webSocketClient?.send({ type: "binary", data: buffer });
                });
            }
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: {
                    echoCancellation: true,
                    sampleRate: 24000,
                },
            });
            await audioRecorderRef.start(stream);
            return true;
        } else if (audioRecorderRef) {
            await audioRecorderRef.stop();
            audioRecorderRef = null;
            return false;
        }
        return isRecording;
    }

    // Handle WebSocket messages
    async function handleWSMessage(message) {
        switch (message.type) {
            case "control":
                if (message.action === "speech_started") {
                    audioPlayerRef?.clear();
                }
                break;
        }
    }

    // Receive loop for WebSocket messages
    async function receiveLoop() {
        const player = await initAudioPlayer();
        if (!webSocketClient) return;

        for await (const message of webSocketClient) {
            if (message.type === "text") {
                const data = JSON.parse(message.data);
                await handleWSMessage(data);
            } else if (message.type === "binary" && player) {
                player.play(new Int16Array(message.data));
            }
        }
    }

    // Handle connection
    async function handleConnect() {
        if (isConnected) {
            await disconnect();
        } else {
            // Show loading state
            micIcon.classList.add('hidden');
            stopIcon.classList.add('hidden');
            loadingSpinner.classList.remove('hidden');
            
            isConnecting = true;
            
            try {
                webSocketClient = new WebSocketClient(new URL(endpoint));
                isConnected = true;
                receiveLoop();
            } catch (error) {
                console.error("Connection failed:", error);
            } finally {
                isConnecting = false;
                toggleRecording();
            }
        }
    }

    // Disconnect
    async function disconnect() {
        isConnected = false;
        if (isRecording) {
            await toggleRecording();
        }
        if (audioRecorderRef) {
            audioRecorderRef.stop();
        }
        if (audioPlayerRef) {
            await audioPlayerRef.clear();
        }
        if (webSocketClient) {
            await webSocketClient.close();
        }
        webSocketClient = null;
        
        // Reset button state
        micIcon.classList.remove('hidden');
        stopIcon.classList.add('hidden');
        loadingSpinner.classList.add('hidden');
    }

    // Toggle recording
    async function toggleRecording() {
        try {
            const newRecordingState = await handleAudioRecord(webSocketClient, isRecording);
            isRecording = newRecordingState;
            
            if (isRecording) {
                micIcon.classList.add('hidden');
                stopIcon.classList.remove('hidden');
                loadingSpinner.classList.add('hidden');
                micButton.classList.add('recording');
            } else {
                micIcon.classList.remove('hidden');
                stopIcon.classList.add('hidden');
                loadingSpinner.classList.add('hidden');
                micButton.classList.remove('recording');
            }
        } catch (error) {
            console.error("Recording error:", error);
            isRecording = false;
            micIcon.classList.remove('hidden');
            stopIcon.classList.add('hidden');
            loadingSpinner.classList.add('hidden');
            micButton.classList.remove('recording');
        }
    }

    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
        disconnect();
    });
</script>

