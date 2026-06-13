'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import toast from 'react-hot-toast'
import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconSend,
  IconLoader2,
  IconCode,
} from '@tabler/icons-react'

const SOCIALS = [
  { icon: IconMail, label: 'sgera_be24@thapar.edu', href: 'mailto:sgera_be24@thapar.edu' },
  { icon: IconBrandGithub, label: 'github.com/Shainaa17', href: 'https://github.com/Shainaa17' },
  { icon: IconBrandLinkedin, label: 'linkedin.com/in/shaina-gera-a66822330', href: 'https://www.linkedin.com/in/shaina-gera-a66822330/' },
  { icon: IconCode, label: 'leetcode.com/u/shainnaaa____', href: 'https://leetcode.com/u/shainnaaa____/' },
]

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (res.ok) {
        toast.success(data.message || 'Message sent!')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        toast.error(data.error || 'Something went wrong.')
      }
    } catch {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200'

  return (
    <section id="contact" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="max-container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Contact</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-700 tracking-tight text-white">
            Let's <span className="text-gradient">connect</span>
          </h2>
          <p className="mt-4 text-muted max-w-xl">
            Open to internships, collaborations, and interesting projects. Drop me a message.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="space-y-4 mb-10">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-bg-card hover:border-primary/40 transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{label}</span>
                </a>
              ))}
            </div>

            <div className="p-5 rounded-2xl border border-border bg-bg-card">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white text-sm font-medium">Available</span>
              </div>
              <p className="text-muted text-sm">
                Open for internships and freelance projects starting 2026.
              </p>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-muted mb-1.5">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-muted mb-1.5">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm text-muted mb-1.5">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-muted mb-1.5">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the project, role, or idea..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary hover:bg-primary-dark text-white font-medium rounded-xl transition-all duration-200 hover:shadow-glow disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <IconLoader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <IconSend size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
