'use client';

import React from "react";

export default function SentAuthLogo() {
  return (
    <div className="flex items-center gap-3">
      {/* Your custom Union.svg logo */}
      <div className="relative h-10">
        <div
          className="absolute inset-0 rounded-lg opacity-20 blur-md"
          style={{ background: 'linear-gradient(135deg, #405276, #64284C)' }}
        />
        <div className="relative h-full flex items-center justify-center">
          <img
            src="/Union.svg"
            alt="SentAuth"
            height={40}
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
