"use client"

import { motion } from "framer-motion"
import { Cpu, Code } from "lucide-react"

export function DualFocusGraphic() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-foreground bg-background text-foreground font-mono text-left w-full">
      {/* Left Panel: AI Engineering */}
      <div className="p-6 border-b-2 md:border-b-0 md:border-r-2 border-foreground flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4 border-b border-border pb-2">
            <div className="flex items-center gap-2">
              <Cpu size={14} className="text-[#ea580c]" />
              <span className="text-xs font-bold tracking-wider uppercase">AI_ENGINEERING</span>
            </div>
            <span className="text-[9px] text-muted-foreground uppercase">focus.01</span>
          </div>
          <ul className="space-y-2.5">
            {[
              "Deep Learning & Neural Networks",
              "LLM Fine-tuning, RAG & Agents",
              "NLP & Computer Vision Pipelines",
              "Model Optimization & TensorRT",
            ].map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + idx * 0.08 }}
                className="flex items-start gap-2.5 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <span className="text-[#ea580c] mt-0.5">&gt;</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
          <span className="text-[9px] text-muted-foreground uppercase">status: active</span>
          <span className="h-1.5 w-1.5 bg-[#ea580c] rounded-full animate-ping" />
        </div>
      </div>

      {/* Right Panel: Python Software Development */}
      <div className="p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4 border-b border-border pb-2">
            <div className="flex items-center gap-2">
              <Code size={14} className="text-[#ea580c]" />
              <span className="text-xs font-bold tracking-wider uppercase">PYTHON_DEVELOPMENT</span>
            </div>
            <span className="text-[9px] text-muted-foreground uppercase">focus.02</span>
          </div>
          <ul className="space-y-2.5">
            {[
              "High-Performance FastAPI Backends",
              "Robust OOP & Design Patterns",
              "Testing with Pytest & CI/CD",
              "Dockerization & Model Deployment",
            ].map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + idx * 0.08 }}
                className="flex items-start gap-2.5 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <span className="text-[#ea580c] mt-0.5">&gt;</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
          <span className="text-[9px] text-muted-foreground uppercase">engine: python_3.12</span>
          <span className="text-[10px] text-[#ea580c] font-bold">READY</span>
        </div>
      </div>
    </div>
  )
}
