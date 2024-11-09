import React from "react";
import { Github, Linkedin, Mail, Gamepad2 } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-arcade-dark/80 backdrop-blur-sm border-b border-arcade-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="font-arcade text-xl text-arcade-purple flex items-center gap-2">
              <Gamepad2 className="h-6 w-6" />
              <span className="hidden sm:inline">ARCADE</span>
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#about"
                className="font-arcade text-sm text-arcade-blue hover:text-arcade-pink transition-colors"
              >
                ABOUT
              </a>
              <a
                href="#projects"
                className="font-arcade text-sm text-arcade-blue hover:text-arcade-pink transition-colors"
              >
                PROJECTS
              </a>
              <a
                href="#contact"
                className="font-arcade text-sm text-arcade-blue hover:text-arcade-pink transition-colors"
              >
                CONTACT
              </a>
            </div>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-arcade-blue hover:text-arcade-pink transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-arcade-blue hover:text-arcade-pink transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-arcade-blue hover:text-arcade-pink transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
