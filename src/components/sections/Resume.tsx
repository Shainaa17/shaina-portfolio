'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { IconDownload, IconExternalLink, IconFileText } from '@tabler/icons-react'

export default function Resume() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="resume" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="max-container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Resume</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-700 tracking-tight text-white">
            Full credentials
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-border bg-bg-card overflow-hidden"
        >
          {/* Header bar */}
          <div className="flex items-center justify-between p-5 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center">
                <IconFileText size={18} className="text-primary" />
              </div>
              <div>
                <div className="text-white font-medium text-sm">Shaina_Gera_Resume.pdf</div>
                <div className="text-muted text-xs">B.Tech CSE · TIET · CGPA 9.86</div>
              </div>
            </div>

            <div className="flex gap-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm text-muted border border-border rounded-xl hover:text-white hover:border-border-light transition-all duration-200"
              >
                <IconExternalLink size={15} />
                <span className="hidden sm:inline">Open</span>
              </a>
              <a
                href="/resume.pdf"
                download="Shaina_Gera_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2 text-sm bg-primary text-white rounded-xl hover:bg-primary-dark hover:shadow-glow transition-all duration-200 font-medium"
              >
                <IconDownload size={15} />
                Download
              </a>
            </div>
          </div>

          {/* Embedded PDF */}
          <div className="relative bg-bg" style={{ height: '700px' }}>
            <iframe
              src="/resume.pdf"
              className="w-full h-full"
              title="Shaina Gera Resume"
              style={{ border: 'none' }}
            />
            {/* Fallback message for browsers that block iframe PDFs */}
            <noscript>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <p className="text-muted text-sm">PDF preview requires JavaScript.</p>
                <a
                  href="/resume.pdf"
                  download
                  className="px-4 py-2 bg-primary text-white text-sm rounded-xl"
                >
                  Download Resume
                </a>
              </div>
            </noscript>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
