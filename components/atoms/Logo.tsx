'use client';

import React from "react";
import { motion } from "framer-motion";

export default function SentAuthLogo() {
  return (
    <motion.div 
      className="flex items-center gap-3"
      animate={{ scale: [1, 1.01, 1], opacity: [1, 0.98, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* Your custom Union.png logo */}
      <div className="relative h-10">
        <motion.div
          className="absolute inset-0 rounded-lg opacity-20 blur-md"
          style={{ background: 'linear-gradient(135deg, #405276, #64284C)' }}
          animate={{ opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="relative h-full flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src="/Union.png"
            alt="SentAuth"
            height={40}
            className="h-full w-auto object-contain"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
