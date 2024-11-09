import React from 'react';
import { motion } from 'framer-motion';
import { GamepadIcon, Code2, Rocket, Cpu, Wifi, Zap } from 'lucide-react';

const projects = [
  {
    title: "PIXEL PERFECT",
    description: "A retro-styled game built with React and WebGL",
    icon: GamepadIcon,
    tags: ["React", "WebGL", "Game Dev"],
    link: "#",
    color: "from-pink-600 to-purple-600",
  },
  {
    title: "CYBER SYNC",
    description: "Real-time multiplayer arcade experience",
    icon: Wifi,
    tags: ["Socket.io", "Node.js", "Three.js"],
    link: "#",
    color: "from-cyan-600 to-blue-600",
  },
  {
    title: "NEON DRIVE",
    description: "Retro-wave inspired racing game",
    icon: Zap,
    tags: ["Unity", "C#", "WebGL"],
    link: "#",
    color: "from-purple-600 to-pink-600",
  },
  {
    title: "QUANTUM QUEST",
    description: "Puzzle game with quantum computing themes",
    icon: Cpu,
    tags: ["React", "TypeScript", "Canvas"],
    link: "#",
    color: "from-blue-600 to-cyan-600",
  },
  {
    title: "BYTE BATTLES",
    description: "Competitive coding game platform",
    icon: Code2,
    tags: ["Vue.js", "Firebase", "WebRTC"],
    link: "#",
    color: "from-green-600 to-teal-600",
  },
  {
    title: "SPACE RACE",
    description: "Multiplayer space exploration game",
    icon: Rocket,
    tags: ["Three.js", "WebGL", "Physics"],
    link: "#",
    color: "from-teal-600 to-green-600",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-arcade-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-arcade text-3xl text-center mb-12 neon-text">HIGH SCORES</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300"
                   style={{ backgroundImage: `linear-gradient(to right, ${project.color})` }} />
              <a
                href={project.link}
                className="block relative bg-black/50 pixel-corners p-6 border border-arcade-purple hover:border-arcade-pink transition-colors duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                     style={{ backgroundImage: `linear-gradient(to right, ${project.color})` }} />
                <project.icon className="w-12 h-12 mb-4 text-arcade-blue group-hover:text-arcade-pink transition-colors duration-300" />
                <h3 className="font-arcade text-xl text-arcade-pink mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-arcade-purple/20 text-arcade-blue font-arcade text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}