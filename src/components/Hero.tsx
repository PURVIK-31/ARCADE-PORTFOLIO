import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";
import { Joystick } from "lucide-react";

export function Hero() {
  return (
    <div className="relative h-screen bg-arcade-dark overflow-hidden">
      <div className="absolute inset-0 scanline">
        <Canvas>
          <Scene />
        </Canvas>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-arcade-dark via-transparent to-transparent" />
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Joystick className="w-16 h-16 mx-auto mb-8 text-arcade-purple animate-pulse-slow" />
            <h1 className="font-arcade text-4xl md:text-5xl font-bold neon-text mb-8">
              PURVIK SHARMA
            </h1>
            <p className="font-arcade text-lg md:text-xl text-arcade-blue mb-12">
              LET'S PLAY <p></p>
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-8"
            >
              <a
                href="#projects"
                className="inline-block px-8 py-4 font-arcade text-white bg-arcade-purple neon-border pixel-corners hover:bg-opacity-80 transition-all duration-300"
              >
                PRESS START
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
