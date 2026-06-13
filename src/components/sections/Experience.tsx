'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { IconBriefcase, IconCode, IconUsers, IconChevronDown } from '@tabler/icons-react'

const EXPERIENCES = [
  {
    id: 'kraftland',
    role: 'AI/ML Engineering Intern',
    company: 'Kraftland Intelligence Pvt Ltd',
    duration: '2026 — Present',
    type: 'Internship',
    icon: IconBriefcase,
    color: '#6366F1',
    summary: 'Building AI-powered market intelligence systems using LLMs, RAG, and semantic search.',
    highlights: [
      'Architected an AI-powered Market Intelligence Platform with multi-source data aggregation',
      'Implemented Retrieval Augmented Generation (RAG) pipeline for competitor intelligence',
      'Built semantic search using vector embeddings for intelligent document retrieval',
      'Developed predictive analytics modules with LLM-driven workflow orchestration',
      'Integrated LangChain for multi-step reasoning and structured data extraction',
    ],
    stack: ['Python', 'LangChain', 'RAG', 'Vector DBs', 'LLMs', 'FastAPI'],
    architecture: [
      { label: 'Data Sources', color: '#374151' },
      { label: 'Ingestion', color: '#1F2937' },
      { label: 'Vector Store', color: '#6366F120' },
      { label: 'LLM Pipeline', color: '#6366F140' },
      { label: 'Intelligence API', color: '#6366F160' },
    ],
  },
  {
    id: 'gssoc',
    role: 'Open Source Contributor',
    company: 'GirlScript Summer of Code (GSSoC)',
    duration: '2025',
    type: 'Open Source',
    icon: IconCode,
    color: '#22D3EE',
    summary: 'Contributed to MERN stack projects, submitted pull requests, and collaborated with global open-source communities.',
    highlights: [
      'Contributed to multiple MERN stack open-source repositories',
      'Merged pull requests improving UI/UX and backend functionality',
      'Participated in GitHub collaboration workflows and code reviews',
      'Built features following open-source contribution guidelines',
    ],
    stack: ['React', 'Node.js', 'MongoDB', 'Express.js', 'GitHub'],
    architecture: null,
  },
  {
    id: 'iste',
    role: 'Technical Head',
    company: 'ISTE Student Chapter, TIET',
    duration: '2024 — 2026',
    type: 'Leadership',
    icon: IconUsers,
    color: '#8B5CF6',
    summary: 'Led the technical wing of the ISTE student chapter, building platforms and driving technical initiatives.',
    highlights: [
      'Built and deployed 3 web platforms supporting 200+ active users',
      'Led a team of developers through planning, execution, and delivery',
      'Organized technical workshops and coding events',
      'Maintained and scaled production infrastructure',
    ],
    stack: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Vercel'],
    architecture: null,
  },
]

export default function Experience() {
  const [expanded, setExpanded] = useState<string>('kraftland')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="experience" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="max-container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Experience</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-700 tracking-tight text-white">
            Where I've <span className="text-gradient">worked</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {EXPERIENCES.map(({ id, role, company, duration, type, icon: Icon, color, summary, highlights, stack, architecture }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border transition-all duration-300 overflow-hidden"
              style={{
                borderColor: expanded === id ? `${color}40` : '#1F2937',
                background: expanded === id ? `${color}06` : '#111827',
              }}
            >
              {/* Header */}
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setExpanded(expanded === id ? '' : id)}
                aria-expanded={expanded === id}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                  >
                    <Icon size={20} style={{ color }} />
                  </div>
                  <div>
                    <div className="text-white font-display font-600 text-lg leading-tight">{role}</div>
                    <div className="text-muted text-sm mt-0.5 flex items-center gap-2">
                      <span>{company}</span>
                      <span className="w-1 h-1 rounded-full bg-border-light" />
                      <span className="text-accent text-xs">{duration}</span>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ background: `${color}15`, color }}
                      >
                        {type}
                      </span>
                    </div>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expanded === id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconChevronDown size={20} className="text-muted" />
                </motion.div>
              </button>

              {/* Expanded content */}
              <AnimatePresence>
                {expanded === id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-6 pb-6 border-t border-border pt-6">
                      <p className="text-gray-400 text-sm mb-6 leading-relaxed">{summary}</p>

                      {/* Architecture visualization for Kraftland */}
                      {architecture && (
                        <div className="mb-6 p-4 rounded-xl bg-bg border border-border">
                          <p className="text-xs text-muted mb-3 uppercase tracking-wider">System Architecture</p>
                          <div className="flex items-center gap-2 flex-wrap">
                            {architecture.map(({ label, color: bg }, idx) => (
                              <div key={label} className="flex items-center gap-2">
                                <div
                                  className="px-3 py-1.5 rounded-lg text-xs text-gray-300 border border-border font-medium"
                                  style={{ background: bg }}
                                >
                                  {label}
                                </div>
                                {idx < architecture.length - 1 && (
                                  <span className="text-muted text-xs">→</span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <ul className="space-y-2 mb-6">
                        {highlights.map((h) => (
                          <li key={h} className="flex items-start gap-3 text-sm text-gray-300">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
                            {h}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2.5 py-1 rounded-lg border font-medium"
                            style={{ borderColor: `${color}30`, color, background: `${color}10` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
