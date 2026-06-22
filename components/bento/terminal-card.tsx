"use client"

import { useEffect, useState } from "react"

const LOG_LINES = [
  "> finger luwukien",
  "Login: luwukien           Name: Chi Kien Luu",
  "Directory: /home/luwukien Shell: /bin/zsh",
  "Status: AI Engineering Intern",
  "Education: 2rd-year SE student @ FPT University",
  "> cat skills.txt",
  "Languages: Python, C++, TypeScript, SQL",
  "Frameworks: PyTorch, TensorFlow, Next.js, FastAPI",
  "Fields: LLMs, NLP, CV, Model Optimization",
  "> python -c 'import torch; print(torch.cuda.is_available())'",
  "True (GPU: NVIDIA RTX 40-Series)",
  "> npm run dev --project=portfolio",
  "ready - started server on 0.0.0.0:3000",
  "status: active & open to internship roles",
  "> --------- QUERY COMPLETE ---------",
]

export function TerminalCard() {
  const [lines, setLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => {
        const next = prev + 1
        if (next >= LOG_LINES.length) {
          setLines([])
          return 0
        }
        setLines((l) => [...l.slice(-8), LOG_LINES[next]])
        return next
      })
    }, 600)

    // Add first line
    setLines([LOG_LINES[0]])

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 border-b-2 border-foreground px-4 py-2">
        <span className="h-2 w-2 bg-[#ea580c]" />
        <span className="h-2 w-2 bg-foreground" />
        <span className="h-2 w-2 border border-foreground" />
        <span className="ml-auto text-[10px] tracking-widest text-muted-foreground uppercase">
          terminal.sys
        </span>
      </div>
      <div className="flex-1 bg-foreground p-4 overflow-hidden">
        <div className="flex flex-col gap-1">
          {lines.map((line, i) => (
            <span
              key={`${currentLine}-${i}`}
              className="text-xs text-background font-mono block"
              style={{ opacity: i === lines.length - 1 ? 1 : 0.6 }}
            >
              {line}
            </span>
          ))}
          <span className="text-xs text-[#ea580c] font-mono animate-blink">{"_"}</span>
        </div>
      </div>
    </div>
  )
}
