'use client'

import { IconBolt, IconHeart } from '@tabler/icons-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-10">
      <div className="max-container section-padding">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <IconBolt size={13} className="text-white" />
            </div>
            <span className="text-sm text-muted">
              <span className="text-white font-medium">Shaina Gera</span> — AI Engineer & Full Stack Developer
            </span>
          </div>

          <p className="text-sm text-muted flex items-center gap-1.5">
            Built with{' '}
            <IconHeart size={13} className="text-primary inline" />{' '}
            using Next.js, Tailwind & Framer Motion · © {year}
          </p>
        </div>
      </div>
    </footer>
  )
}
