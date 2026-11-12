'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  IconSchool,
  IconBriefcase,
  IconCode,
  IconBrain,
  IconDatabase,
  IconRocket,
} from '@tabler/icons-react'

const TIMELINE = [
  { year: '2022', label: 'Class X', detail: '98% — ICSE Board', icon: IconSchool },
  { year: '2024', label: 'Class XII', detail: '94% — CBSE Board', icon: IconSchool },
  { year: '2024', label: 'Joined TIET', detail: 'B.E. Computer Engineering', icon: IconCode },
  { year: '2025', label: 'GSSoC Contributor', detail: 'Open Source, MERN Stack', icon: IconCode },
  { year: '2026', label: 'AI/ML Intern', detail: 'Kraftland Intelligence Pvt Ltd', icon: IconBriefcase },
  { year: '2026', label: 'IT Intern', detail: 'Tata Cummins Limited', icon: IconBriefcase },
]

const FOCUS_AREAS = [
  { icon: IconBrain, label: 'Artificial Intelligence', color: 'text-primary' },
  { icon: IconCode, label: 'Full Stack Engineering', color: 'text-secondary' },
  { icon: IconRocket, label: 'Generative AI & LLMs', color: 'text-accent' },
  { icon: IconDatabase, label: 'Scalable Systems', color: 'text-primary-light' },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="about" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="max-container section-padding">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">About</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-700 tracking-tight text-white">
            The person behind <span className="text-gradient">the code</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* CGPA badge */}
            <div className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-bg-card border border-border mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-display font-bold text-sm">
                9.86
              </div>
              <div>
                <div className="text-white text-sm font-semibold">Current CGPA</div>
                <div className="text-muted text-xs">Thapar Institute of Engineering & Technology</div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-base mb-6">
              I'm a Computer Engineering undergraduate at <span className="text-white font-medium">Thapar Institute of Engineering & Technology</span>, driven by a deep interest in building systems where AI and software engineering intersect.
            </p>

            <p className="text-gray-400 leading-relaxed text-base mb-8">
              My work spans from training and deploying machine learning models to building full-stack applications. I'm especially fascinated by <span className="text-white font-medium">Generative AI</span>, LLM orchestration, and the engineering challenges behind making intelligent systems that actually work in production.
            </p>

            {/* Focus areas */}
            <div className="grid grid-cols-2 gap-3">
              {FOCUS_AREAS.map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-3 rounded-xl bg-bg-card border border-border"
                >
                  <Icon size={18} className={color} />
                  <span className="text-gray-300 text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-white font-display font-600 text-lg mb-8">Journey so far</h3>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-px timeline-line" />

              <div className="flex flex-col gap-6">
                {TIMELINE.map(({ year, label, detail, icon: Icon }, i) => (
                  <motion.div
                    key={`${year}-${label}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-4 relative"
                  >
                    {/* Node */}
                    <div className="relative z-10 w-12 h-12 rounded-xl bg-bg-card border border-border flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 transition-colors">
                      <Icon size={18} className="text-primary" />
                    </div>

                    <div className="flex-1 pt-0.5">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs text-accent font-mono font-600">{year}</span>
                        <span className="w-4 h-px bg-border-light" />
                        <span className="text-white font-medium text-sm">{label}</span>
                      </div>
                      <span className="text-muted text-sm">{detail}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
