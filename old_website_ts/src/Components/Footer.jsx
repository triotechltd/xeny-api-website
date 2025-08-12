import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-[#1F0D97] py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Footer Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Logo and Description Column */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="images/voice-bot-logo.png"
                  alt="AI Voice Bot"
                  className="h-8"
                />
              </div>
              <p className="text-sm mb-6">
                Create no-code AI phone call agents to automate incoming and
                outgoing calls. Xeny.ai is the fully featured platform
                to deploy an AI Voicebot without coding skills.
              </p>
              {/* <div className="flex items-center gap-4">
                <a href="#" className="text-white hover:text-white/80">
                  <img
                    src="images/linkedin.svg"
                    alt="Discord"
                    className="h-6"
                  />
                </a>
              </div> */}
            </div>

            {/* AI Voice Bot Column */}
            <div className="col-span-1">
              <h4 className="font-semibold mb-4">AI Voice Bot</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms and conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* AI Voice Bot Solution Column */}
            <div className="col-span-1">
              <h4 className="font-semibold mb-4">AI Voice Bot Solution</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    See AI Voice Bot in action
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Use cases
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    No-code platform
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Available languages
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Frequently asked questions
                  </a>
                </li>
              </ul>
            </div>

            {/* Platform Column */}
            <div className="col-span-1">
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Try for free
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    White label
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Sign up now
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Login
                  </a>
                </li>
              </ul>
            </div>

            {/* Industries Column */}
            <div className="col-span-1">
              <h4 className="font-semibold mb-4">Industries</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Call center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Real estate
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Online stores
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Medical
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm">
            <p>Copyright © 2024 All rights reserved Xeny.ai</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
