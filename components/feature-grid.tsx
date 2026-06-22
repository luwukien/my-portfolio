"use client"

import { TerminalCard } from "@/components/bento/terminal-card"
import { DitherCard } from "@/components/bento/dither-card"
import { MetricsCard } from "@/components/bento/metrics-card"
import { StatusCard } from "@/components/bento/status-card"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const ease = [0.22, 1, 0.36, 1] as const

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease },
  }),
}

interface ProjectOverlayProps {
  title: string
  description: string
  techStack: string[]
  link: string
}

function ProjectHoverOverlay({ title, description, techStack, link }: ProjectOverlayProps) {
  return (
    <div className="absolute inset-0 bg-foreground text-background p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 font-mono select-none">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between border-b border-background/20 pb-2">
          <span className="text-xs font-bold tracking-wider uppercase text-[#ea580c]">
            {title}
          </span>
          <span className="text-[9px] uppercase tracking-widest opacity-60">project_spec</span>
        </div>
        <p className="text-xs leading-relaxed opacity-90">{description}</p>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="border border-background/30 px-2 py-0.5 text-[9px] uppercase tracking-wider bg-background/5 text-background"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 border border-background/20 hover:border-background py-2 text-xs tracking-wider uppercase font-bold bg-[#ea580c] text-background transition-colors duration-200"
      >
        <span>View Project Source</span>
        <ArrowRight size={12} />
      </a>
    </div>
  )
}
/* ── blinking cursor ── */
function BlinkDot() {
  return <span className="inline-block h-2 w-2 bg-[#ea580c] animate-blink" />
}

export function FeatureGrid() {
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
        <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
          {"// SECTION: PROJECTS"}
        </span>
        <div className="flex-1 border-t border-border" />
        <BlinkDot />
        <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">002</span>
      </motion.div>

      {/* 2x2 Bento Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-2 border-2 border-foreground"
      >
        {/* Terminal */}
        <motion.div
          custom={0}
          variants={cardVariants}
          className="relative border-b-2 md:border-b-0 md:border-r-2 border-foreground min-h-[280px] group overflow-hidden"
        >
          <TerminalCard />
          <ProjectHoverOverlay
            title="PROJECT_01 // LLM_CHAT"
            description="Fine-tuned Llama-3 model for domain-specific agentic chat with retrieval-augmented generation (RAG) and custom tool calling."
            techStack={["Python", "PyTorch", "Transformers", "FastAPI", "LangChain"]}
            link="https://github.com/luwukien"
          />
        </motion.div>

        {/* Dither */}
        <motion.div
          custom={1}
          variants={cardVariants}
          className="relative border-b-2 md:border-b-0 border-foreground min-h-[280px] group overflow-hidden"
        >
          <DitherCard />
          <ProjectHoverOverlay
            title="PROJECT_02 // CV_DETECT"
            description="High-throughput object detection and segmentation pipeline utilizing YOLOv8 and TensorRT, optimized for edge inference."
            techStack={["C++", "Python", "TensorRT", "OpenCV", "CUDA", "Docker"]}
            link="https://github.com/luwukien"
          />
        </motion.div>

        {/* Metrics */}
        <motion.div
          custom={2}
          variants={cardVariants}
          className="relative border-t-2 md:border-r-2 border-foreground min-h-[280px] group overflow-hidden"
        >
          <MetricsCard />
          <ProjectHoverOverlay
            title="PROJECT_03 // DIST_TRAIN"
            description="High-performance training loop scaling framework using PyTorch FSDP, DeepSpeed, and NCCL communication backend."
            techStack={["Python", "PyTorch", "DeepSpeed", "NCCL", "CUDA Profiles"]}
            link="https://github.com/luwukien"
          />
        </motion.div>

        {/* Status */}
        <motion.div
          custom={3}
          variants={cardVariants}
          className="relative border-t-2 border-foreground min-h-[280px] group overflow-hidden"
        >
          <StatusCard />
          <ProjectHoverOverlay
            title="PROJECT_04 // ORCHESTRATOR"
            description="Microservices-based pipeline orchestrating multiple model deployments, featuring automated benchmarking, routing, and fallbacks."
            techStack={["Python", "FastAPI", "Redis", "RabbitMQ", "Docker"]}
            link="https://github.com/luwukien"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
