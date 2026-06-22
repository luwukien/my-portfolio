"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Check, Minus } from "lucide-react"
import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

/* ── scramble-in project metric effect ── */
function ScrambleMetric({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [display, setDisplay] = useState(target.replace(/[0-9]/g, "0"))

  useEffect(() => {
    let iterations = 0
    const maxIterations = 18
    const interval = setInterval(() => {
      if (iterations >= maxIterations) {
        setDisplay(target)
        clearInterval(interval)
        return
      }
      setDisplay(
        target
          .split("")
          .map((char, i) => {
            if (!/[0-9]/.test(char)) return char
            if (iterations > maxIterations - 5 && i < iterations - (maxIterations - 5)) return char
            return String(Math.floor(Math.random() * 10))
          })
          .join("")
      )
      iterations++
    }, 50)
    return () => clearInterval(interval)
  }, [target])

  return (
    <span className="font-mono font-bold" style={{ fontVariantNumeric: "tabular-nums" }}>
      {display}{suffix}
    </span>
  )
}

/* ── live system throughput line ── */
function StatusLine() {
  const [activeUsers, setActiveUsers] = useState("12")

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers((Math.random() * 20 + 5).toFixed(0))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-2 text-[10px] tracking-widest text-muted-foreground uppercase font-mono">
      <span className="h-1.5 w-1.5 bg-[#ea580c] animate-pulse" />
      <span>gpu cluster load: {activeUsers}%</span>
    </div>
  )
}

/* ── blinking cursor indicator ── */
function BlinkDot() {
  return <span className="inline-block h-2 w-2 bg-[#ea580c] animate-blink" />
}

/* ── project config ── */
interface Project {
  id: string
  name: string
  metric: string
  unit: string
  tag: string | null
  description: string
  techs: { text: string; included: boolean }[]
  cta: string
  link: string
  highlighted: boolean
}

const PROJECTS: Project[] = [
  {
    id: "neural-chat",
    name: "PROJECT_01 // LLM_CHAT",
    metric: "98.2",
    unit: "% acc",
    tag: "NLP / AGENT",
    description: "Fine-tuned Llama-3 model for domain-specific agentic chat with retrieval-augmented generation (RAG).",
    techs: [
      { text: "PyTorch & Transformers", included: true },
      { text: "LangChain & VectorDB", included: true },
      { text: "FastAPI Backend", included: true },
      { text: "Model Quantization (4-bit)", included: true },
      { text: "Distributed Inference Cluster", included: false },
      { text: "Multi-GPU Training SLA", included: false },
    ],
    cta: "VIEW GITHUB",
    link: "https://github.com/luwukien",
    highlighted: false,
  },
  {
    id: "vision-pipeline",
    name: "PROJECT_02 // CV_DETECT",
    metric: "12",
    unit: "ms lat",
    tag: "CV / REALTIME",
    description: "High-throughput object detection and segmentation pipeline using YOLOv8, optimized for edge devices.",
    techs: [
      { text: "YOLOv8 & OpenCV", included: true },
      { text: "TensorRT Optimization", included: true },
      { text: "C++ Custom Inference Core", included: true },
      { text: "Multi-Stream Video Pipeline", included: true },
      { text: "Kubernetes Deployments", included: true },
      { text: "On-Prem Hardware Sync", included: false },
    ],
    cta: "LAUNCH DEMO",
    link: "https://github.com/luwukien",
    highlighted: true,
  },
  {
    id: "distributed-training",
    name: "PROJECT_03 // DIST_TRAIN",
    metric: "2.4",
    unit: "x speedup",
    tag: "SYS / GPU",
    description: "Custom training loop optimization framework utilizing DeepSpeed and PyTorch FSDP for large models.",
    techs: [
      { text: "PyTorch FSDP & DeepSpeed", included: true },
      { text: "Mixed Precision (AMP)", included: true },
      { text: "NCCL Communication Backend", included: true },
      { text: "GPU Profiling & CUDA Kernels", included: true },
      { text: "Custom Optimizer Fusion", included: true },
      { text: "Zero-Redundancy Optimizer", included: true },
    ],
    cta: "READ PAPER",
    link: "https://github.com/luwukien",
    highlighted: false,
  },
]

/* ── single project card ── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.12, duration: 0.6, ease }}
      className={`flex flex-col h-full ${
        project.highlighted
          ? "border-2 border-foreground bg-foreground text-background"
          : "border-2 border-foreground bg-background text-foreground"
      }`}
    >
      {/* Card header */}
      <div
        className={`flex items-center justify-between px-5 py-3 border-b-2 ${
          project.highlighted ? "border-background/20" : "border-foreground"
        }`}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-mono">
          {project.name}
        </span>
        <div className="flex items-center gap-2">
          {project.tag && (
            <span className="bg-[#ea580c] text-background text-[9px] tracking-[0.15em] uppercase px-2 py-0.5 font-mono">
              {project.tag}
            </span>
          )}
          <span className="text-[10px] tracking-[0.2em] font-mono opacity-50">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Metric block */}
      <div className="px-5 pt-6 pb-4">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl lg:text-4xl">
            <ScrambleMetric target={project.metric} />
          </span>
          {project.unit && (
            <span
              className={`text-xs font-mono tracking-widest uppercase ${
                project.highlighted ? "text-background/50" : "text-muted-foreground"
              }`}
            >
              {project.unit}
            </span>
          )}
        </div>
        <p
          className={`text-xs font-mono mt-3 leading-relaxed ${
            project.highlighted ? "text-background/60" : "text-muted-foreground"
          }`}
        >
          {project.description}
        </p>
      </div>

      {/* Tech list */}
      <div
        className={`flex-1 px-5 py-4 border-t-2 ${
          project.highlighted ? "border-background/20" : "border-foreground"
        }`}
      >
        <div className="flex flex-col gap-3">
          {project.techs.map((tech, fi) => (
            <motion.div
              key={tech.text}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 + 0.3 + fi * 0.04, duration: 0.35, ease }}
              className="flex items-start gap-3"
            >
              {tech.included ? (
                <Check
                  size={12}
                  strokeWidth={2.5}
                  className="mt-0.5 shrink-0 text-[#ea580c]"
                />
              ) : (
                <Minus
                  size={12}
                  strokeWidth={2}
                  className={`mt-0.5 shrink-0 ${
                    project.highlighted ? "text-background/30" : "text-muted-foreground/40"
                  }`}
                />
              )}
              <span
                className={`text-xs font-mono leading-relaxed ${
                  tech.included
                    ? ""
                    : project.highlighted
                    ? "text-background/30 line-through"
                    : "text-muted-foreground/40 line-through"
                }`}
              >
                {tech.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-5 pb-5 pt-3">
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className={`group w-full flex items-center justify-center gap-0 text-xs font-mono tracking-wider uppercase ${
            project.highlighted
              ? "bg-background text-foreground"
              : "bg-foreground text-background"
          }`}
        >
          <span className="flex items-center justify-center w-9 h-9 bg-[#ea580c]">
            <ArrowRight size={14} strokeWidth={2} className="text-background" />
          </span>
          <span className="flex-1 py-2.5 text-center">{project.cta}</span>
        </motion.a>
      </div>
    </motion.div>
  )
}

/* ── main projects section ── */
export function ProjectsSection() {
  return (
    <section id="projects" className="w-full px-6 py-20 lg:px-12">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease }}
        className="flex items-center gap-4 mb-8"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono">
          {"// SECTION: FEATURED_PROJECTS"}
        </span>
        <div className="flex-1 border-t border-border" />
        <BlinkDot />
        <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono">
          000
        </span>
      </motion.div>

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease }}
        className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
      >
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl lg:text-3xl font-mono font-bold tracking-tight uppercase text-foreground text-balance">
            Selected engineering work
          </h2>
          <p className="text-xs lg:text-sm font-mono text-muted-foreground leading-relaxed max-w-md">
            A showcase of models built, neural systems optimized, and machine learning components deployed to production.
          </p>
        </div>
        <StatusLine />
      </motion.div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Bottom note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5, ease }}
        className="flex items-center gap-3 mt-6"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono">
          {"* Source code for all projects is open-source and hosted on GitHub."}
        </span>
        <div className="flex-1 border-t border-border" />
      </motion.div>
    </section>
  )
}
