'use client'

import React from 'react';
import { motion } from 'framer-motion';

const BlurCircle = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 1, delay: 0.5 }} // Add a delay of 0.5 seconds
        className="w-[200px] h-[200px] absolute md:hidden top-[-2rem] right-[25%] rounded-full bg-gradient-to-br from-[#d40c0c] to-[#0066eb] filter blur-3xl opacity-20 z-[-1]"
      ></motion.div>
    </div>
  );
};

export default BlurCircle;

  
