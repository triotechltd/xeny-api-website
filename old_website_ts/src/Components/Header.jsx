import React from "react";

export default function Header() {
  return (
    <header className="py-4 px-4 md:px-6 border-b-2 border-[#FFFFFF]/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-shrink-0">
          <a href="index.html" className="flex items-center">
            <img
              src="images/voice-bot-logo.png"
              alt="AI Voice Bot"
              className="h-[35px] w-[110px] md:h-[43px] md:w-[160px]"
            />
          </a>
        </div>

        <div className="hidden lg:flex items-center justify-center flex-1 ml-12">
          <div className="flex items-center space-x-8 p-4 border-given">
            <div className="relative group">
              <a
                href="#"
                className="text-[#3a0ffb] text-sm flex items-center font-semibold "
              >
                Solution
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="#3a0ffb"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </a>

              <div className="absolute left-0 mt-2 w-[800px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-transparent bg-gradient-to-r from-[#3a0ffb]/20 via-white to-[#3a0ffb]/20">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="space-y-6">
                      <a
                        href="#"
                        className="block hover:bg-gray-50 p-4 rounded-xl transition-colors"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <svg
                            className="w-6 h-6 text-[#3a0ffb]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                          <h4 className="text-[#3a0ffb] font-semibold">
                            Lead Generation
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Automate your outbound calls with AI voice agents
                        </p>
                      </a>
                      <a
                        href="#"
                        className="block hover:bg-gray-50 p-4 rounded-xl transition-colors"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <svg
                            className="w-6 h-6 text-[#3a0ffb]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                            />
                          </svg>
                          <h4 className="text-[#3a0ffb] font-semibold">
                            Customer Support
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          24/7 AI phone support for your customers
                        </p>
                      </a>
                    </div>

                    <div className="space-y-6">
                      <a
                        href="#"
                        className="block hover:bg-gray-50 p-4 rounded-xl transition-colors"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <svg
                            className="w-6 h-6 text-[#3a0ffb]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <h4 className="text-[#3a0ffb] font-semibold">
                            Appointment Setting
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Schedule meetings automatically with AI
                        </p>
                      </a>
                      <a
                        href="#"
                        className="block hover:bg-gray-50 p-4 rounded-xl transition-colors"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <svg
                            className="w-6 h-6 text-[#3a0ffb]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <h4 className="text-[#3a0ffb] font-semibold">
                            Lead Qualification
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Pre-qualify leads with intelligent AI agents
                        </p>
                      </a>
                    </div>

                    <div className="space-y-6">
                      <a
                        href="#"
                        className="block hover:bg-gray-50 p-4 rounded-xl transition-colors"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <svg
                            className="w-6 h-6 text-[#3a0ffb]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                          <h4 className="text-[#3a0ffb] font-semibold">
                            Documentation
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Learn how to implement our AI solutions
                        </p>
                      </a>
                      <a
                        href="#"
                        className="block hover:bg-gray-50 p-4 rounded-xl transition-colors"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <svg
                            className="w-6 h-6 text-[#3a0ffb]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                            />
                          </svg>
                          <h4 className="text-[#3a0ffb] font-semibold">
                            Case Studies
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          See how others succeed with our platform
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <a
                href="#"
                className="text-black text-sm flex items-center font-semibold"
              >
                Industries
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </a>
            </div>
            <a href="#" className="text-black text-sm font-semibold">
              Pricing
            </a>
            <a href="#" className="text-black text-sm font-semibold">
              White label
            </a>
            <div className="relative group">
              <a
                href="#"
                className="text-black text-sm flex items-center font-semibold"
              >
                Resources
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="relative group">
              <a
                href="#"
                className="text-black text-sm flex items-center font-semibold"
              >
                FAQs
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center bg-white rounded-[20px] p-1 border-given relative">
          <a
            href="https://app.xeny.ai/login"
            className="text-black px-5 py-2 text-sm font-semibold relative z-10 transition-colors duration-300"
            id="loginBtn"
          >
            Login
          </a>

          <a
            href="https://app.xeny.ai/register"
            onclick="toggleAuth('signup')"
            className="text-black px-5 py-2 rounded-full text-sm font-semibold flex items-center relative z-10 transition-colors duration-300"
            id="signupBtn"
          >
            Sign up
            <span className="ml-2">
              <svg
                width="11"
                height="12"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.76673 2.31672C8.76673 2.22783 8.7334 2.15006 8.66673 2.08339C8.60007 2.01672 8.52229 1.98339 8.4334 1.98339H4.70007C4.61118 1.98339 4.5334 2.01672 4.46673 2.08339C4.40007 2.15006 4.36673 2.22783 4.36673 2.31672C4.36673 2.40561 4.40007 2.47783 4.46673 2.53339C4.5334 2.58895 4.61118 2.61672 4.70007 2.61672H7.66673L1.3334 8.95006C1.26673 9.01672 1.2334 9.0945 1.2334 9.18339C1.2334 9.27228 1.26673 9.35006 1.3334 9.41672C1.40007 9.48339 1.47784 9.51672 1.56673 9.51672C1.65562 9.51672 1.7334 9.48339 1.80007 9.41672L8.1334 3.08339V6.05006C8.1334 6.13895 8.16118 6.21672 8.21673 6.28339C8.27229 6.35006 8.34451 6.38339 8.4334 6.38339C8.52229 6.38339 8.60007 6.35006 8.66673 6.28339C8.7334 6.21672 8.76673 6.13895 8.76673 6.05006V2.31672Z"
                  fill="#030014"
                  stroke="black"
                  stroke-width="0.5"
                />
              </svg>
            </span>
          </a>
        </div>

        <div className="lg:hidden">
          <button
            type="button"
            className="text-black hover:text-gray-600"
            onclick="toggleMobileMenu()"
          >
            <div className="hamburger-menu">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </button>
        </div>
      </nav>

      <div
        id="mobileMenu"
        className="hidden lg:hidden fixed inset-0 bg-gradient-to-b from-white/95 to-gray-50/95 backdrop-blur-xl z-50 transition-all duration-500 ease-in-out transform"
      >
        <div className="min-h-screen flex flex-col px-6 pt-4 space-y-8">
          <div className="flex justify-between items-center">
            <a
              href="index.html"
              className="flex items-center opacity-0 animate-fadeIn"
            >
              <img
                src="images/logo.svg"
                alt="AI Voice Bot"
                className="h-[35px] w-[110px] md:h-[43px] md:w-[136px]"
              />
            </a>
            <button
              onclick="toggleMobileMenu()"
              className="text-black p-2 rounded-xl hover:bg-gray-100 transition-colors duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center space-y-6">
            <a href="#" className="mobile-nav-item group">
              <span className="flex items-center justify-between">
                <span className="text-xl font-semibold">Solution</span>
                <svg
                  className="w-5 h-5 transform transition-transform duration-300 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </a>
            <a href="#" className="mobile-nav-item group">
              <span className="flex items-center justify-between">
                <span className="text-xl font-semibold">Industries</span>
                <svg
                  className="w-5 h-5 transform transition-transform duration-300 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </a>
            <a href="#" className="mobile-nav-item">
              <span className="text-xl font-semibold">Pricing</span>
            </a>
            <a href="#" className="mobile-nav-item">
              <span className="text-xl font-semibold">White label</span>
            </a>
            <a href="#" className="mobile-nav-item group">
              <span className="flex items-center justify-between">
                <span className="text-xl font-semibold">Resources</span>
                <svg
                  className="w-5 h-5 transform transition-transform duration-300 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </a>
            <a href="#" className="mobile-nav-item group">
              <span className="flex items-center justify-between">
                <span className="text-xl font-semibold">FAQs</span>
                <svg
                  className="w-5 h-5 transform transition-transform duration-300 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </a>
          </nav>

          <div className="space-y-4 pb-8">
            <div className="bg-white rounded-[20px] p-1 border-given relative flex justify-between">
              <div
                className="absolute bg-[#00ff40] h-[80%] rounded-full transition-all duration-300"
                id="mobileToggleBackground"
                style={{ width: "45%", left: "5px", top: "10%" }}
              ></div>

              <a
                href="#"
                onclick="toggleMobileAuth('login')"
                className="flex-1 text-center px-6 py-3.5 text-lg font-semibold relative z-10 transition-colors duration-300"
                id="mobileLoginBtn"
              >
                Login
              </a>

              <a
                href="https://voicebot.triotech.in/register"
                onclick="toggleMobileAuth('signup')"
                className="flex-1 text-center px-6 py-3.5 text-lg font-semibold relative z-10 transition-colors duration-300 flex items-center justify-center"
                id="mobileSignupBtn"
              >
                Sign up
                <span className="ml-2">
                  <svg
                    width="11"
                    height="12"
                    viewBox="0 0 10 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.76673 2.31672C8.76673 2.22783 8.7334 2.15006 8.66673 2.08339C8.60007 2.01672 8.52229 1.98339 8.4334 1.98339H4.70007C4.61118 1.98339 4.5334 2.01672 4.46673 2.08339C4.40007 2.15006 4.36673 2.22783 4.36673 2.31672C4.36673 2.40561 4.40007 2.47783 4.46673 2.53339C4.5334 2.58895 4.61118 2.61672 4.70007 2.61672H7.66673L1.3334 8.95006C1.26673 9.01672 1.2334 9.0945 1.2334 9.18339C1.2334 9.27228 1.26673 9.35006 1.3334 9.41672C1.40007 9.48339 1.47784 9.51672 1.56673 9.51672C1.65562 9.51672 1.7334 9.48339 1.80007 9.41672L8.1334 3.08339V6.05006C8.1334 6.13895 8.16118 6.21672 8.21673 6.28339C8.27229 6.35006 8.34451 6.38339 8.4334 6.38339C8.52229 6.38339 8.60007 6.35006 8.66673 6.28339C8.7334 6.21672 8.76673 6.13895 8.76673 6.05006V2.31672Z"
                      fill="#030014"
                      stroke="black"
                      stroke-width="0.5"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
