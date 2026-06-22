"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Mail, Phone, MapPin, Facebook, Github } from "lucide-react"

const ease = [0.22, 1, 0.36, 1] as const

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText("luukien2910@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: "", email: "", message: "" })
      }, 3000)
    }
  }

  /* ── blinking cursor ── */
  function BlinkDot() {
    return <span className="inline-block h-2 w-2 bg-[#ea580c] animate-blink" />
  }


  return (
    <section id="contact" className="w-full px-6 py-20 lg:px-12">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease }}
        className="flex items-center gap-4 mb-8"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono">
          {"// SECTION: CONTACT"}
        </span>
        <div className="flex-1 border-t border-border" />
        <BlinkDot />
        <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono">003</span>
      </motion.div>

      {/* Main split grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-2 border-foreground">
        
        {/* Left Column: Profile Card & Terminal info */}
        <div className="p-8 border-b-2 lg:border-b-0 lg:border-r-2 border-foreground bg-background flex flex-col justify-between gap-8">
          <div>
            {/* Header info */}
            <div className="mb-6">
              <h2 className="text-3xl font-mono font-bold tracking-tight text-foreground uppercase">
                Chi Kien Luu
              </h2>
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mt-1">
                AI Engineering & Python Software Development
              </p>
            </div>

            {/* Visual Icon Grid (matches screenshot styling but adjusted to fit page theme) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 bg-foreground text-background flex items-center justify-center border border-foreground">
                  <Mail size={16} />
                </div>
                <div className="flex flex-col relative">
                  <span className="text-[9px] tracking-widest text-muted-foreground uppercase font-mono">Email</span>
                  <button 
                    onClick={handleCopyEmail}
                    className="text-xs font-mono hover:text-[#ea580c] transition-colors text-left focus:outline-none"
                    title="Click to copy email"
                  >
                    luukien2910@gmail.com
                  </button>
                  {copied && (
                    <span className="absolute -top-6 left-0 bg-[#ea580c] text-background text-[9px] font-mono px-2 py-0.5 border border-foreground animate-bounce z-30 uppercase font-bold tracking-widest">
                      Copied!
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-9 w-9 bg-foreground text-background flex items-center justify-center border border-foreground">
                  <Facebook size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] tracking-widest text-muted-foreground uppercase font-mono">Facebook</span>
                  <a href="https://facebook.com/kienchiluu2910" target="_blank" rel="noopener noreferrer" className="text-xs font-mono hover:text-[#ea580c] transition-colors">
                    facebook.com/kienchiluu2910
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-9 w-9 bg-foreground text-background flex items-center justify-center border border-foreground">
                  <Phone size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] tracking-widest text-muted-foreground uppercase font-mono">Phone</span>
                  <span className="text-xs font-mono">(+84) 814-069-335</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-9 w-9 bg-foreground text-background flex items-center justify-center border border-foreground">
                  <Github size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] tracking-widest text-muted-foreground uppercase font-mono">GitHub</span>
                  <a href="https://github.com/luwukien" target="_blank" rel="noopener noreferrer" className="text-xs font-mono hover:text-[#ea580c] transition-colors">
                    github.com/luwukien
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:col-span-2">
                <div className="h-9 w-9 bg-foreground text-background flex items-center justify-center border border-foreground">
                  <MapPin size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] tracking-widest text-muted-foreground uppercase font-mono">Location</span>
                  <span className="text-xs font-mono">Hoa Lac Hi-tech Park, Hanoi</span>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Box representing the query contact logs */}
          <div className="border border-foreground bg-foreground p-4 text-background font-mono text-xs select-none">
            <div className="flex items-center gap-2 border-b border-background/20 pb-2 mb-2 opacity-50">
              <span className="h-1.5 w-1.5 bg-[#ea580c] rounded-full animate-ping" />
              <span>luwukien@sys:~$</span>
            </div>
            <div className="space-y-1">
              <p className="text-background/80"><span className="text-[#ea580c]">$</span> cat contact.json</p>
              <pre className="text-background text-[11px] leading-relaxed overflow-x-auto">
{`{
  "name": "Chi Kien Luu",
  "alias": "luwukien",
  "school": "FPT University (Year 3)",
  "role": "AI Engineering Intern",
  "skills": ["Python", "PyTorch", "FastAPI"]
}`}
              </pre>
              <p className="text-[#ea580c] animate-blink font-bold mt-1">_</p>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Message Form */}
        <div className="p-8 bg-background flex flex-col justify-between gap-6">
          <div>
            <h3 className="text-2xl font-mono font-bold tracking-tight text-foreground uppercase">
              Send me a message
            </h3>
            <p className="text-xs font-mono text-muted-foreground leading-relaxed mt-2 max-w-md">
              Have a project or question? Drop a message and I'll get back to you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 font-mono">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-[10px] tracking-widest text-muted-foreground uppercase">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border-2 border-foreground bg-background px-4 py-2.5 text-xs text-foreground focus:outline-none focus:border-[#ea580c] transition-colors placeholder:text-muted-foreground/50"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-[10px] tracking-widest text-muted-foreground uppercase">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border-2 border-foreground bg-background px-4 py-2.5 text-xs text-foreground focus:outline-none focus:border-[#ea580c] transition-colors placeholder:text-muted-foreground/50"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-[10px] tracking-widest text-muted-foreground uppercase">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Write your message here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full border-2 border-foreground bg-background px-4 py-2.5 text-xs text-foreground focus:outline-none focus:border-[#ea580c] transition-colors resize-none placeholder:text-muted-foreground/50"
              />
            </div>

            <div className="pt-2">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-0 text-xs font-mono tracking-wider uppercase bg-foreground text-background w-full sm:w-auto"
              >
                <span className="flex items-center justify-center w-10 h-10 bg-[#ea580c]">
                  <ArrowRight size={16} strokeWidth={2} className="text-background" />
                </span>
                <span className="px-6 py-2.5">
                  {submitted ? "Message Sent!" : "Send Message"}
                </span>
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
