'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { IconTrophy, IconStar, IconCode, IconBriefcase, IconBrandGithub } from '@tabler/icons-react'

const ACHIEVEMENTS = [
  {
    icon: IconTrophy,
    title: '₹6,00,000+ Merit Scholarship',
    description: 'Full merit scholarship awarded for academic excellence and consistent high performance at Thapar Institute.',
    color: '#F59E0B',
    stat: '₹6L+',
    statLabel: 'Total Value',
  },
  {
    icon: IconStar,
    title: 'Tata Cummins Scholarship',
    description: 'Recipient of Cummins Scholarsgip for outstanding academic performance in Class X, Class XII, First Year, and Second Year of undergraduate studies.',
    color: '#6366F1',
    stat: 'Awarded',
    statLabel: '4x',
  },
  {
    icon: IconCode,
    title: '200+ DSA Problems',
    description: 'Solved over 200 Data Structures and Algorithms problems across LeetCode and competitive programming platforms.',
    color: '#22D3EE',
    stat: '200+',
    statLabel: 'Problems',
  },
  {
    icon: IconBriefcase,
    title: 'AI/ML Engineering Intern',
    description: 'Secured a competitive AI/ML internship building production-grade intelligence platforms at Kraftland Intelligence Pvt Ltd.',
    color: '#8B5CF6',
    stat: 'Hired',
    statLabel: 'As Intern',
  },
  {
    icon: IconBrandGithub,
    title: 'Open Source Contributor',
    description: 'Active contributor in GirlScript Summer of Code, merging pull requests to real-world open source MERN projects.',
    color: '#34D399',
    stat: 'GSSoC',
    statLabel: '2025',
  },
]

export default function Achievements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="achievements" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="max-container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Achievements</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-700 tracking-tight text-white">
            Recognition & <span className="text-gradient">milestones</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ACHIEVEMENTS.map(({ icon: Icon, title, description, color, stat, statLabel }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl border border-border bg-bg-card p-6 group card-hover-effect overflow-hidden"
            >
              {/* Glow background */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 80% 20%, ${color}08 0%, transparent 60%)`,
                }}
              />

              {/* Stat display */}
              <div className="absolute top-4 right-4 text-right">
                <div className="text-xl font-display font-800" style={{ color }}>{stat}</div>
                <div className="text-xs text-muted">{statLabel}</div>
              </div>

              <div className="relative">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                >
                  <Icon size={20} style={{ color }} />
                </div>

                <h3 className="text-white font-display font-600 text-base mb-2 pr-16">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
