'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const SKILL_CATEGORIES = [
  {
    id: 'ai',
    label: 'AI & ML',
    color: '#6366F1',
    skills: [
      { name: 'TensorFlow', level: 85 },
      { name: 'Scikit-Learn', level: 90 },
      { name: 'PyTorch', level: 70 },
      { name: 'SHAP / XAI', level: 80 },
    ],
  },
  {
    id: 'genai',
    label: 'Generative AI',
    color: '#8B5CF6',
    skills: [
      { name: 'LangChain', level: 88 },
      { name: 'RAG Systems', level: 85 },
      { name: 'Vector Embeddings', level: 82 },
      { name: 'LLM Workflows', level: 80 },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    color: '#22D3EE',
    skills: [
      { name: 'React', level: 88 },
      { name: 'Next.js', level: 85 },
      { name: 'Three.js', level: 65 },
      { name: 'Tailwind CSS', level: 92 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    color: '#34D399',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 88 },
      { name: 'REST APIs', level: 90 },
      { name: 'Python', level: 92 },
    ],
  },
  {
    id: 'data',
    label: 'Databases',
    color: '#F59E0B',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 82 },
      { name: 'Firebase', level: 75 },
      { name: 'Vector DBs', level: 78 },
    ],
  },
  {
    id: 'lang',
    label: 'Languages',
    color: '#EC4899',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'JavaScript', level: 88 },
      { name: 'Java', level: 80 },
      { name: 'C++', level: 78 },
    ],
  },
]

const TECH_BADGES = [
  'React', 'Next.js', 'Node.js', 'Express.js', 'Python', 'JavaScript', 'TypeScript',
  'TensorFlow', 'Scikit-Learn', 'LangChain', 'RAG', 'Vector Embeddings',
  'MongoDB', 'MySQL', 'Firebase', 'Java', 'C++', 'Three.js',
  'Tailwind CSS', 'Framer Motion', 'Figma', 'Git', 'Vercel', 'Docker',
]

export default function Skills() {
  const [active, setActive] = useState('ai')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const current = SKILL_CATEGORIES.find((c) => c.id === active)!

  return (
    <section id="skills" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="max-container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Skills</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-700 tracking-tight text-white">
            What I work <span className="text-gradient">with</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Category tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-row lg:flex-col gap-2 flex-wrap"
          >
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className="relative flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 w-full"
                style={{
                  background: active === cat.id ? `${cat.color}12` : 'transparent',
                  border: `1px solid ${active === cat.id ? `${cat.color}40` : '#1F2937'}`,
                }}
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: cat.color }}
                />
                <span
                  className="text-sm font-medium transition-colors"
                  style={{ color: active === cat.id ? '#F9FAFB' : '#6B7280' }}
                >
                  {cat.label}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Skill bars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-5 p-6 rounded-2xl bg-bg-card border border-border"
              >
                <h3
                  className="font-display font-600 text-lg mb-6"
                  style={{ color: current.color }}
                >
                  {current.label}
                </h3>

                {current.skills.map(({ name, level }, i) => (
                  <div key={name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm font-medium">{name}</span>
                      <span className="text-muted text-xs font-mono">{level}%</span>
                    </div>
                    <div className="h-1.5 bg-bg-elevated rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${level}%` } : { width: 0 }}
                        transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full skill-bar"
                        style={{ background: `linear-gradient(90deg, ${current.color}, ${current.color}99)` }}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Tech badge cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <p className="text-muted text-sm mb-5 text-center">Full technology stack</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {TECH_BADGES.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.03 }}
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-bg-card border border-border text-gray-400 hover:text-white hover:border-primary/40 transition-all duration-200 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
