'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  IconUser,
  IconBriefcase,
  IconCode,
  IconFileText,
  IconMail,
  IconSearch,
  IconX,
  IconBrandGithub,
  IconBrandLinkedin,
  IconTrophy,
  IconTerminal2,
} from '@tabler/icons-react'

const COMMANDS = [
  { icon: IconUser, label: 'About', action: '#about', type: 'nav' },
  { icon: IconCode, label: 'Projects', action: '#projects', type: 'nav' },
  { icon: IconBriefcase, label: 'Experience', action: '#experience', type: 'nav' },
  { icon: IconTrophy, label: 'Achievements', action: '#achievements', type: 'nav' },
  { icon: IconFileText, label: 'Resume', action: '#resume', type: 'nav' },
  { icon: IconMail, label: 'Contact', action: '#contact', type: 'nav' },
  { icon: IconBrandGithub, label: 'GitHub', action: 'https://github.com/Shainaa17', type: 'link' },
  { icon: IconBrandLinkedin, label: 'LinkedIn', action: 'https://www.linkedin.com/in/shaina-gera-a66822330/', type: 'link' },
  { icon: IconTerminal2, label: 'LeetCode', action: 'https://leetcode.com/u/shainnaaa____/', type: 'link' },
]

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault()
        setOpen(true)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const filtered = COMMANDS.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  )

  const run = (cmd: (typeof COMMANDS)[0]) => {
    setOpen(false)
    setQuery('')
    if (cmd.type === 'link') {
      window.open(cmd.action, '_blank', 'noopener noreferrer')
    } else {
      const el = document.querySelector(cmd.action)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-bg/80 backdrop-blur-sm z-[100]"
            onClick={() => setOpen(false)}
          />

          {/* Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[101] w-full max-w-sm px-4"
          >
            <div className="rounded-2xl border border-border bg-bg-card shadow-card overflow-hidden">
              {/* Search input */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-border">
                <IconSearch size={16} className="text-muted flex-shrink-0" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search commands..."
                  className="flex-1 bg-transparent text-white text-sm placeholder:text-muted outline-none"
                />
                <button onClick={() => setOpen(false)}>
                  <IconX size={15} className="text-muted hover:text-white transition-colors" />
                </button>
              </div>

              {/* Results */}
              <div className="p-2">
                {filtered.length === 0 ? (
                  <p className="text-muted text-sm text-center py-6">No commands found.</p>
                ) : (
                  filtered.map((cmd) => {
                    const Icon = cmd.icon
                    return (
                      <button
                        key={cmd.label}
                        onClick={() => run(cmd)}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors text-left group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-bg border border-border flex items-center justify-center">
                          <Icon size={15} className="text-muted group-hover:text-primary transition-colors" />
                        </div>
                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{cmd.label}</span>
                        <span className="ml-auto text-xs text-muted">{cmd.type === 'link' ? '↗' : '↓'}</span>
                      </button>
                    )
                  })
                )}
              </div>

              <div className="px-4 py-2.5 border-t border-border flex items-center gap-3">
                <span className="text-xs text-muted">Press <kbd className="text-primary font-mono">Esc</kbd> to close</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
