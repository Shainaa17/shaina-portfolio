'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { IconArrowDown, IconDownload, IconMail, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import NetworkCanvas from '@/components/ui/NetworkCanvas'

const SOCIALS = [
  { icon: IconBrandGithub, href: 'https://github.com/Shainaa17', label: 'GitHub' },
  { icon: IconBrandLinkedin, href: 'https://www.linkedin.com/in/shaina-gera-a66822330/', label: 'LinkedIn' },
  { icon: IconMail, href: '#contact', label: 'Email', internal: true },
]

const scrollTo = (href: string) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <NetworkCanvas />

      {/* Radial spotlight */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(99,102,241,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 section-padding max-container w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Available for opportunities
          </div>

          {/* Name */}
          <h1 className="font-display font-800 tracking-tight mb-4">
            <span className="block text-2xl sm:text-3xl text-muted font-medium tracking-widest uppercase mb-3">
              Hi, I'm
            </span>
            <span
              className="block text-6xl sm:text-8xl lg:text-9xl text-white leading-none"
              style={{ letterSpacing: '-0.03em' }}
            >
              Shaina
              <br />
              <span className="text-gradient">Gera</span>
            </span>
          </h1>

          {/* Animated role */}
          <div className="mt-6 h-10 flex items-center justify-center">
            <TypeAnimation
              sequence={[
                'AI Engineer',
                2400,
                'Full Stack Developer',
                2400,
                'ML Practitioner',
                2400,
                'Problem Solver',
                2400,
                'LLM Systems Builder',
                2400,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-xl sm:text-2xl font-display font-600 text-secondary-light"
            />
          </div>

          {/* Headline */}
          <p className="mt-6 text-xl sm:text-2xl font-display font-500 text-white max-w-3xl mx-auto leading-tight" style={{ letterSpacing: '-0.01em' }}>
            Building Intelligent Systems with{' '}
            <span className="text-gradient-primary">AI, Data,</span> and Full Stack Engineering.
          </p>

          {/* Subheadline */}
          <p className="mt-4 text-base text-muted max-w-2xl mx-auto leading-relaxed">
            B.Tech Computer Engineering student at <span className="text-white font-medium">Thapar Institute of Engineering & Technology</span> (2024–2028), focused on AI, Machine Learning, Generative AI, and scalable software systems. CGPA{' '}
            <span className="text-accent font-semibold">9.86 / 10</span>.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => scrollTo('#projects')}
              className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-xl transition-all duration-200 hover:shadow-glow hover:-translate-y-0.5 text-sm sm:text-base"
            >
              View Projects
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-border-light text-gray-300 hover:text-white hover:border-primary/50 font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base"
            >
              <IconDownload size={16} />
              Resume
            </a>
            <button
              onClick={() => scrollTo('#contact')}
              className="px-6 py-3 text-muted hover:text-white font-medium rounded-xl transition-all duration-200 text-sm sm:text-base"
            >
              Contact Me →
            </button>
          </div>

          {/* Socials */}
          <div className="mt-10 flex items-center justify-center gap-3">
            {SOCIALS.map(({ icon: Icon, href, label, internal }) =>
              internal ? (
                <button
                  key={label}
                  onClick={() => scrollTo(href)}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl border border-border-light bg-bg-card text-muted hover:text-white hover:border-primary/50 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon size={18} />
                </button>
              ) : (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl border border-border-light bg-bg-card text-muted hover:text-white hover:border-primary/50 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon size={18} />
                </a>
              )
            )}
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-white transition-colors flex flex-col items-center gap-2 group"
        aria-label="Scroll to about"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <IconArrowDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  )
}
