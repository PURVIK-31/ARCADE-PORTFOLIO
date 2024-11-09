import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-arcade-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-arcade text-3xl mb-4 neon-text">PLAYER 2 ENTER</h2>
          <p className="font-arcade text-arcade-blue">JOIN THE GAME</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4 group cursor-pointer">
              <div className="p-3 bg-arcade-purple/20 rounded-lg group-hover:bg-arcade-purple/30 transition-colors duration-300">
                <Mail className="h-6 w-6 text-arcade-pink" />
              </div>
              <span className="font-arcade text-arcade-blue group-hover:text-arcade-pink transition-colors duration-300">
                PLAYER@GAME.COM
              </span>
            </div>
            <div className="flex items-center space-x-4 group cursor-pointer">
              <div className="p-3 bg-arcade-purple/20 rounded-lg group-hover:bg-arcade-purple/30 transition-colors duration-300">
                <Phone className="h-6 w-6 text-arcade-pink" />
              </div>
              <span className="font-arcade text-arcade-blue group-hover:text-arcade-pink transition-colors duration-300">
                1-UP-123-4567
              </span>
            </div>
            <div className="flex items-center space-x-4 group cursor-pointer">
              <div className="p-3 bg-arcade-purple/20 rounded-lg group-hover:bg-arcade-purple/30 transition-colors duration-300">
                <MapPin className="h-6 w-6 text-arcade-pink" />
              </div>
              <span className="font-arcade text-arcade-blue group-hover:text-arcade-pink transition-colors duration-300">
                ARCADE CITY, CA
              </span>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {!submitted ? (
              <>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="ENTER NAME"
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-arcade-purple text-arcade-blue font-arcade placeholder-arcade-purple/50 pixel-corners focus:neon-border focus:outline-none"
                  />
                  <div className="absolute inset-0 pointer-events-none pixel-corners border border-arcade-purple opacity-50" />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="ENTER EMAIL"
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-arcade-purple text-arcade-blue font-arcade placeholder-arcade-purple/50 pixel-corners focus:neon-border focus:outline-none"
                  />
                  <div className="absolute inset-0 pointer-events-none pixel-corners border border-arcade-purple opacity-50" />
                </div>
                <div className="relative">
                  <textarea
                    placeholder="YOUR MESSAGE"
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-black/30 border border-arcade-purple text-arcade-blue font-arcade placeholder-arcade-purple/50 pixel-corners focus:neon-border focus:outline-none resize-none"
                  />
                  <div className="absolute inset-0 pointer-events-none pixel-corners border border-arcade-purple opacity-50" />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-arcade-purple text-white font-arcade py-3 pixel-corners neon-border hover:bg-opacity-80 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      SENDING...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      SEND MESSAGE
                    </>
                  )}
                </button>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 mx-auto mb-4 text-arcade-pink">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-arcade text-xl text-arcade-pink mb-2">MESSAGE SENT!</h3>
                <p className="text-arcade-blue">THANKS FOR JOINING THE GAME</p>
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}