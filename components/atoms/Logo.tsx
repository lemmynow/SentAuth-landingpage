'use client';

import React from "react";
import { motion } from "framer-motion";
import UnionSvg from "@/public/Union.svg";

export default function SentAuthLogo() {
  return (
    <motion.div 
      className="flex items-center gap-3"
      animate={{ scale: [1, 1.01, 1], opacity: [1, 0.98, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* Your custom Union.svg logo */}
      <div className="relative w-10 h-10">
        <motion.div
          className="absolute inset-0 rounded-lg opacity-20 blur-md"
          style={{ background: 'linear-gradient(135deg, #405276, #64284C)' }}
          animate={{ opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="relative w-full h-full flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <UnionSvg
            className="w-full h-full object-contain"
            width={40}
            height={40}
          />
        </motion.div>
      </div>
      
      {/* Wordmark */}
      <motion.div 
        className="flex items-baseline gap-0"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <span className="font-display font-bold text-xl tracking-tight text-black">
          Sent
        </span>
        <span 
          className="font-display font-bold text-xl tracking-tight bg-clip-text text-transparent"
          style={{ backgroundImage: 'linear-gradient(135deg, #405276, #64284C)' }}
        >
          Auth
        </span>
      </motion.div>
    </motion.div>
  );
}
