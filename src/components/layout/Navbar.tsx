'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconMenu2, IconX, IconBolt } from '@tabler/icons-react'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.4 }
    )
    NAV_ITEMS.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'py-3 bg-bg/80 backdrop-blur-xl border-b border-border/50'
            : 'py-5 bg-transparent'
        )}
      >
        <div className="max-container section-padding">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:shadow-glow transition-shadow duration-300">
                <IconBolt size={16} className="text-white" />
              </div>
              <span className="font-display font-700 text-base tracking-tight">
                <span className="text-white">SG</span>
                <span className="text-primary">.</span>
              </span>
            </button>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map(({ label, href }) => {
                const id = href.replace('#', '')
                return (
                  <li key={label}>
                    <button
                      onClick={() => scrollTo(href)}
                      className={cn(
                        'px-4 py-2 text-sm rounded-lg transition-all duration-200 relative',
                        active === id
                          ? 'text-white'
                          : 'text-muted hover:text-white'
                      )}
                    >
                      {active === id && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 bg-white/5 rounded-lg"
                          transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                        />
                      )}
                      <span className="relative z-10">{label}</span>
                    </button>
                  </li>
                )
              })}
            </ul>

            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => scrollTo('#contact')}
                className="px-4 py-2 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-glow"
              >
                Hire me
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 text-muted hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-4 right-4 z-40 bg-bg-card/95 backdrop-blur-xl border border-border rounded-2xl p-4 shadow-card"
          >
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="w-full text-left px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-150"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-3 pt-3 border-t border-border">
              <button
                onClick={() => scrollTo('#contact')}
                className="w-full py-3 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-dark transition-colors"
              >
                Hire me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
