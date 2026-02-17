"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedText from '@/components/shared/animated-text';
import { ArrowDown } from 'lucide-react';

const terminalLines = [
  "init_portfolio.sh",
  "Loading user profile...",
  "Profile: Sukumar Manna",
  "Specialization: Cybersecurity & Digital Forensics",
  "Status: Ready",
];

export default function Hero() {
  const [animationFinished, setAnimationFinished] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatePresence>
          {!animationFinished && (
            <motion.div
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.8 } }}
              className="w-full max-w-2xl mx-auto"
            >
              <AnimatedText lines={terminalLines} onFinished={() => setTimeout(() => setAnimationFinished(true), 500)} />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {animationFinished && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 font-headline">
                Computer Science Engineer &
                <br />
                <span className="text-primary">Cybersecurity Specialist</span>.
              </h1>
              <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
                Seeking a technical role in cybercrime prevention, security operations, and threat analysis using practical networking, SIEM, and ethical security knowledge.
              </p>
              <a href="#about" className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-primary-foreground transition duration-200 rounded-md bg-primary hover:bg-primary/90 focus:shadow-outline focus:outline-none">
                Explore My Work
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: animationFinished ? 1 : 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
