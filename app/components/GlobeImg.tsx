'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';

function GlobeImg() {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5, // Delay before the animation starts
        duration: 1, // Duration of the animation
        ease: "easeInOut", // Easing function
      },
    },
  };

  return (
    <motion.div variants={imageVariants} initial="hidden" animate="visible">
      <Image className="hidden md:flex opacity-40" src="/Globe.gif" width={800} height={600} alt="test" />
    </motion.div>
  )
}

export default GlobeImg
