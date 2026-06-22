"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

function PixelMascot() {
  return (
    <svg viewBox="0 0 100 100" width="80" height="80" className="drop-shadow-lg select-none" xmlns="http://www.w3.org/2000/svg">
      {/* Sticker Outline (white background stroke) */}
      <g stroke="white" strokeWidth="6" strokeLinejoin="miter" fill="white">
        <rect x="20" y="25" width="60" height="42" />
        <rect x="12" y="37" width="8" height="18" />
        <rect x="80" y="37" width="8" height="18" />
        <rect x="26" y="67" width="8" height="18" />
        <rect x="40" y="67" width="8" height="18" />
        <rect x="52" y="67" width="8" height="18" />
        <rect x="66" y="67" width="8" height="18" />
      </g>
      
      {/* Colored Body (Terracotta Orange) */}
      <g fill="#d67b5c">
        <rect x="20" y="25" width="60" height="42" />
        <rect x="12" y="37" width="8" height="18" />
        <rect x="80" y="37" width="8" height="18" />
        <rect x="26" y="67" width="8" height="18" />
        <rect x="40" y="67" width="8" height="18" />
        <rect x="52" y="67" width="8" height="18" />
        <rect x="66" y="67" width="8" height="18" />
      </g>
      
      {/* Eyes (> < shape) */}
      <path d="M30 42 L38 46 L30 50" stroke="black" strokeWidth="2.5" strokeLinecap="miter" fill="none" strokeLinejoin="miter" />
      <path d="M70 42 L62 46 L70 50" stroke="black" strokeWidth="2.5" strokeLinecap="miter" fill="none" strokeLinejoin="miter" />
    </svg>
  )
}

export function HeroSection() {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const updatePosition = () => {
      // Calculate random coordinates based on window size to prevent overflow
      const maxW = window.innerWidth * 0.35
      const maxH = window.innerHeight * 0.20
      const targetX = (Math.random() - 0.5) * maxW * 2
      const targetY = (Math.random() - 0.5) * maxH * 2
      setCoords({ x: targetX, y: targetY })
    }

    // Set initial position on mount
    updatePosition()

    // Move to a new position every 6 seconds
    const interval = setInterval(updatePosition, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center px-6 py-12 lg:px-24 overflow-hidden">
      
      {/* Animated Floating Pixel Mascot (mounted check prevents hydration mismatches) */}
      {mounted && (
        <motion.div
          className="absolute z-10 select-none pointer-events-none"
          animate={{
            x: coords.x,
            y: coords.y,
            rotate: [0, coords.x > 0 ? 12 : -12, 0],
            scale: [1, 1.04, 0.96, 1],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
          }}
        >
          <PixelMascot />
        </motion.div>
      )}

      <div className="flex flex-col items-center text-center max-w-2xl w-full">
        {/* Top headline: Chi Kien Luu */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease }}
          className="relative z-20 font-pixel text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-foreground mb-2 select-none"
        >
          Chi Kien Luu
        </motion.h1>

        {/* Bottom headline: luwukien. */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
          className="relative z-20 font-pixel text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-foreground mb-4 select-none"
          aria-hidden="true"
        >
          luwukien.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45, ease }}
          className="relative z-20 text-xs lg:text-sm text-muted-foreground max-w-md mb-6 leading-relaxed font-mono"
        >
          AI Engineering | Python Software Development
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="relative z-0 group flex items-center gap-0 bg-foreground text-background text-sm font-mono tracking-wider uppercase"
        >
          <span className="flex items-center justify-center w-10 h-10 bg-[#ea580c]">
            <motion.span
              className="inline-flex"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <ArrowRight size={16} strokeWidth={2} className="text-background" />
            </motion.span>
          </span>
          <span className="px-5 py-2.5">
            Contact Me
          </span>
        </motion.a>
      </div>
    </section>
  )
}
