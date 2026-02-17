"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type AnimatedTextProps = {
  lines: string[];
  onFinished: () => void;
};

export default function AnimatedText({ lines, onFinished }: AnimatedTextProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      setIsTyping(false);
      onFinished();
      return;
    }

    const line = lines[currentLineIndex];
    let i = 0;
    setDisplayedText(''); // Clear text for new line
    const typingInterval = setInterval(() => {
      if (i < line.length) {
        setDisplayedText(prev => prev + line.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentLineIndex(prev => prev + 1);
        }, currentLineIndex === lines.length - 1 ? 250 : 700); // Shorter delay for last line
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [currentLineIndex, lines, onFinished]);

  return (
    <AnimatePresence>
      {isTyping && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="font-code text-left text-sm md:text-base bg-black/50 p-4 rounded-lg border border-border"
        >
          {lines.map((line, index) => (
             <div key={index} style={{ visibility: index <= currentLineIndex ? 'visible' : 'hidden' }}>
              <span className="text-accent">$ </span>
              <span>{index < currentLineIndex ? line : (index === currentLineIndex ? displayedText : '')}</span>
            </div>
          ))}
           <div className="inline-block w-2 h-4 bg-primary animate-pulse ml-2"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
