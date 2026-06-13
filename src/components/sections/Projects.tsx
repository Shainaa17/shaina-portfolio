'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  IconBrandGithub,
  IconExternalLink,
  IconBrain,
  IconChartBar,
  IconCoin,
  IconBug,
  IconCalendar,
  IconUsers,
  IconLock,
  IconCamera,
  IconTruck,
  IconArrowRight,
  IconChevronDown,
} from '@tabler/icons-react'

type Project = {
  id: string
  title: string
  tagline: string
  description: string
  icon: React.ElementType
  accent: string
  gradient: string
  badges: { label: string; highlight?: boolean }[]
  stack: string[]
  highlights: string[]
  pipeline?: string[]
  github: string | null
  demo: string | null
  featured?: boolean
  category: 'ai' | 'fullstack' | 'ml'
}

const PROJECTS: Project[] = [
  {
    id: 'har',
    title: 'Human Activity Recognition',
    tagline: 'Real-time motion classification with explainable AI',
    description:
      'End-to-end deep learning pipeline for classifying human activities from accelerometer/gyroscope sensor data using a CNN-LSTM hybrid. Features real-time inference via Phyphox and SHAP-based explainability for transparent predictions.',
    icon: IconBrain,
    accent: '#6366F1',
    gradient: 'from-indigo-500/20 to-purple-500/10',
    badges: [{ label: '93.1% Accuracy', highlight: true }, { label: 'CNN-LSTM' }, { label: 'SHAP / XAI' }],
    stack: ['Python', 'TensorFlow', 'Keras', 'Streamlit', 'SHAP', 'Phyphox'],
    highlights: [
      '93.1% accuracy on UCI-HAR multi-class dataset',
      'CNN-LSTM hybrid captures spatial + temporal sensor patterns',
      'Real-time accelerometer/gyroscope streams via Phyphox',
      'SHAP integration for feature importance and model transparency',
      'Interactive Streamlit dashboard for live inference',
    ],
    pipeline: ['Sensor Stream', 'Preprocessing', 'CNN Layers', 'LSTM Layers', 'Softmax', 'SHAP'],
    github: 'https://github.com/Shainaa17/human-activity-recognition',
    demo: null,
    featured: true,
    category: 'ml',
  },
  {
    id: 'visionai',
    title: 'VisionAI Assistant',
    tagline: 'Multimodal image understanding with vision + language',
    description:
      'AI-powered visual assistant that understands image content and answers contextual questions. Combines BLIP for caption generation with LLM APIs for natural language responses — a full multimodal AI pipeline.',
    icon: IconCamera,
    accent: '#8B5CF6',
    gradient: 'from-violet-500/20 to-fuchsia-500/10',
    badges: [{ label: 'Multimodal AI', highlight: true }, { label: 'BLIP + LLM' }, { label: 'Visual QA' }],
    stack: ['Python', 'BLIP', 'Hugging Face', 'LLM APIs', 'Streamlit'],
    highlights: [
      'Image captioning using BLIP (Bootstrapped Language-Image Pretraining)',
      'Visual question answering with contextual LLM processing',
      'End-to-end multimodal pipeline: vision → language → response',
      'Interactive chat interface built with Streamlit',
      'Demonstrates practical CV + GenAI integration',
    ],
    pipeline: ['Image Upload', 'BLIP Caption', 'Context Extract', 'LLM Processing', 'NL Response'],
    github: 'https://github.com/Shainaa17/vision-ai-assistant',
    demo: null,
    featured: true,
    category: 'ai',
  },
  {
    id: 'delivery',
    title: 'Delivery Delay Risk Prediction',
    tagline: 'Predictive analytics for logistics and supply chains',
    description:
      'ML system that forecasts shipment delays using historical logistics data. Enables proactive identification of at-risk deliveries to improve operational planning and reduce supply chain disruptions.',
    icon: IconTruck,
    accent: '#F59E0B',
    gradient: 'from-amber-500/20 to-orange-500/10',
    badges: [{ label: '92% Accuracy', highlight: true }, { label: 'XGBoost' }, { label: 'Risk Classifier' }],
    stack: ['Python', 'Scikit-learn', 'Pandas', 'Random Forest', 'XGBoost'],
    highlights: [
      '92% prediction accuracy on logistics dataset',
      'Feature engineering from historical shipment and route data',
      'Random Forest + XGBoost ensemble comparison',
      'Risk classification: low / medium / high delay probability',
      'Predictive dashboard for operational decision support',
    ],
    pipeline: ['Raw Data', 'Feature Eng.', 'Model Training', 'Risk Score', 'Dashboard'],
    github: 'https://github.com/Shainaa17/delivery-delay-risk-prediction',
    demo: null,
    featured: true,
    category: 'ml',
  },
  {
    id: 'loan',
    title: 'Loan Approval Prediction',
    tagline: '97% accurate credit risk classification model',
    description:
      'ML pipeline for automated loan approval decisions using feature engineering, multi-model comparison, and a Tkinter interface for real-time eligibility prediction.',
    icon: IconCoin,
    accent: '#34D399',
    gradient: 'from-emerald-500/20 to-teal-500/10',
    badges: [{ label: '97% Accuracy', highlight: true }, { label: 'Credit Risk' }, { label: 'Random Forest' }],
    stack: ['Python', 'Scikit-learn', 'Pandas', 'Random Forest', 'Decision Tree', 'Tkinter'],
    highlights: [
      '97% classification accuracy on test dataset',
      'Comprehensive EDA with feature engineering pipeline',
      'Multi-model evaluation: Random Forest, Decision Tree, Logistic Regression',
      'Tkinter GUI for real-time loan eligibility checks',
      'Credit risk scoring with feature importance interpretation',
    ],
    pipeline: ['Raw Data', 'EDA', 'Feature Eng.', 'Model Train', 'Evaluate', 'Tkinter UI'],
    github: 'https://github.com/Shainaa17/-oan-status-prediction',
    demo: null,
    category: 'ml',
  },
  {
    id: 'foodwise',
    title: 'FoodWise',
    tagline: 'Hostel food wastage analytics and demand forecasting',
    description:
      'Full-stack analytics platform that helps hostel kitchens reduce food waste through demand forecasting, inventory tracking, and SQL-powered analytics with complex stored procedures and triggers.',
    icon: IconChartBar,
    accent: '#22D3EE',
    gradient: 'from-cyan-500/20 to-teal-500/10',
    badges: [{ label: 'Demand Forecasting', highlight: true }, { label: 'SQL Analytics' }, { label: 'Triggers' }],
    stack: ['Node.js', 'Express.js', 'MySQL', 'JavaScript', 'Chart.js'],
    highlights: [
      'Normalized MySQL schema with 6 interconnected tables',
      'SQL triggers for automatic inventory alerts and audit logs',
      'Stored procedures for attendance-based demand forecasting',
      'Full-stack REST API with Express.js backend',
      'Analytics dashboard with Chart.js visualization',
    ],
    pipeline: ['UI', 'Express API', 'MySQL', 'Triggers', 'Stored Procs', 'Analytics'],
    github: 'https://github.com/Shainaa17/FoodWise',
    demo: null,
    category: 'fullstack',
  },
  {
    id: 'unstuck',
    title: 'Unstuck – Debugging Game',
    tagline: 'Gamified debugging platform powered by AI hints',
    description:
      'Interactive platform where developers improve debugging skills through progressively difficult coding challenges. AI-powered hints and explanations transform traditional exercises into an engaging game.',
    icon: IconBug,
    accent: '#EC4899',
    gradient: 'from-pink-500/20 to-rose-500/10',
    badges: [{ label: 'AI-Powered Hints', highlight: true }, { label: 'Gamified' }, { label: 'Leaderboard' }],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI API', 'JWT', 'Tailwind CSS'],
    highlights: [
      'Progressive difficulty levels with buggy code challenges',
      'AI-generated hints and explanations via OpenAI API',
      'Score tracking, leaderboard, and XP system',
      'JWT authentication with user progress persistence',
      'Real-time code evaluation and learning analytics dashboard',
    ],
    pipeline: ['Challenge', 'Code Editor', 'Evaluation', 'AI Hint', 'Score', 'Leaderboard'],
    github: 'https://github.com/navya0776/unstuck',
    demo: null,
    category: 'fullstack',
  },
  {
    id: 'interview',
    title: 'Interview Scheduling Platform',
    tagline: 'End-to-end interview management for 100–150+ users',
    description:
      'Complete MERN-stack interview scheduling system enabling candidates to book slots while admins manage schedules. Eliminates manual coordination with real-time availability and automated workflows.',
    icon: IconCalendar,
    accent: '#6366F1',
    gradient: 'from-indigo-500/20 to-blue-500/10',
    badges: [{ label: '150+ Users', highlight: true }, { label: 'MERN Stack' }, { label: 'Real-time Slots' }],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    highlights: [
      'Candidate booking portal with real-time slot availability',
      'Admin dashboard for slot creation and schedule management',
      'JWT-based authentication with role-based access control',
      'Interview status management and booking history',
      'Handled 100–150+ users with zero scheduling conflicts',
    ],
    pipeline: ['Candidate', 'Slot Booking', 'Availability Check', 'Admin Review', 'Confirmation'],
    github: 'https://github.com/Shainaa17/interview-portal',
    demo: null,
    category: 'fullstack',
  },
  {
    id: 'event',
    title: 'Event Registration System',
    tagline: 'Scalable registration portal for 200–250+ participants',
    description:
      'Registration platform for technical and society events. Participants register seamlessly while organizers track everything through an admin dashboard with analytics and search.',
    icon: IconUsers,
    accent: '#34D399',
    gradient: 'from-emerald-500/20 to-green-500/10',
    badges: [{ label: '250+ Participants', highlight: true }, { label: 'MERN Stack' }, { label: 'Admin Dashboard' }],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    highlights: [
      'User registration flow with validation and confirmation',
      'Event management dashboard for organizers',
      'Real-time participant tracking and registration analytics',
      'Search, filter, and export participant data',
      'Supported 200–250+ participants across society events',
    ],
    pipeline: ['Registration', 'Validation', 'MongoDB', 'Admin Dashboard', 'Analytics'],
    github: 'https://github.com/Shainaa17/Registration_portal',
    demo: null,
    category: 'fullstack',
  },
  {
    id: 'AuthFlow',
    title: 'SecureAuth Framework',
    tagline: 'Production-grade authentication system with JWT + bcrypt',
    description:
      'Full-stack authentication framework implementing industry-standard security practices: JWT access/refresh tokens, bcrypt password hashing, role-based authorization, and protected routes.',
    icon: IconLock,
    accent: '#F59E0B',
    gradient: 'from-yellow-500/20 to-amber-500/10',
    badges: [{ label: 'JWT + Refresh Tokens', highlight: true }, { label: 'bcrypt' }, { label: 'RBAC' }],
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'bcrypt'],
    highlights: [
      'JWT access + refresh token rotation for secure sessions',
      'bcrypt password hashing with salt rounds',
      'Role-based access control (RBAC) for protected routes',
      'Secure API communication patterns',
      'Production-ready auth patterns for SaaS products',
    ],
    pipeline: ['Register', 'bcrypt Hash', 'JWT Issue', 'Refresh Flow', 'RBAC', 'Protected API'],
    github: 'https://github.com/Shainaa17/Authentication-app',
    demo: null,
    category: 'fullstack',
  },
]

const FILTERS = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI / GenAI' },
  { id: 'ml', label: 'Machine Learning' },
  { id: 'fullstack', label: 'Full Stack' },
]

function PipelineDiagram({ steps, color }: { steps: string[]; color: string }) {
  return (
    <div className="flex items-center gap-1 flex-wrap">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-1">
          <div
            className="px-2 py-1 rounded-md text-xs font-medium border"
            style={{
              borderColor: `${color}30`,
              background: `${color}${Math.max(10, Math.round((i + 1) * (40 / steps.length))).toString(16).padStart(2, '0')}`,
              color: '#D1D5DB',
            }}
          >
            {step}
          </div>
          {i < steps.length - 1 && (
            <IconArrowRight size={10} className="text-muted flex-shrink-0" />
          )}
        </div>
      ))}
    </div>
  )
}

function ProjectCard({ project, inView, index }: { project: Project; inView: boolean; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const { title, tagline, description, icon: Icon, accent, gradient, badges, stack, highlights, pipeline, github, demo } = project

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group rounded-2xl border border-border bg-bg-card overflow-hidden transition-all duration-300 hover:border-opacity-60 flex flex-col"
      style={{ '--accent': accent } as React.CSSProperties}
    >
      {/* Banner */}
      <div
        className={`h-24 bg-gradient-to-br ${gradient} relative overflow-hidden flex-shrink-0`}
        style={{ borderBottom: `1px solid ${accent}18` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-13 h-13 w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}
          >
            <Icon size={26} style={{ color: accent }} />
          </div>
        </div>
        <div
          className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-20"
          style={{ background: accent, filter: 'blur(18px)' }}
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-white font-display font-700 text-base leading-snug mb-1">{title}</h3>
        <p className="text-muted text-xs mb-3 leading-relaxed">{tagline}</p>

        {/* Badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {badges.map(({ label, highlight }) => (
            <span
              key={label}
              className="text-xs px-2 py-0.5 rounded-md font-medium"
              style={{
                background: highlight ? `${accent}18` : '#1F2937',
                color: highlight ? accent : '#9CA3AF',
                border: `1px solid ${highlight ? `${accent}35` : '#374151'}`,
              }}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Expandable detail */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28 }}
              className="overflow-hidden"
            >
              <p className="text-gray-400 text-xs leading-relaxed mb-4">{description}</p>

              {pipeline && (
                <div className="mb-4 p-3 rounded-xl bg-bg border border-border">
                  <p className="text-xs text-muted mb-2 uppercase tracking-wider">Pipeline</p>
                  <PipelineDiagram steps={pipeline} color={accent} />
                </div>
              )}

              <ul className="space-y-1.5 mb-4">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-xs text-gray-400">
                    <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: accent }} />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stack */}
        <div className="flex flex-wrap gap-1 mt-auto mb-4">
          {stack.slice(0, 4).map((t) => (
            <span key={t} className="text-xs text-muted bg-bg border border-border rounded px-1.5 py-0.5">
              {t}
            </span>
          ))}
          {stack.length > 4 && (
            <span className="text-xs text-muted bg-bg border border-border rounded px-1.5 py-0.5">
              +{stack.length - 4}
            </span>
          )}
        </div>

        {/* Footer row */}
        <div className="flex items-center gap-3 pt-3 border-t border-border">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted hover:text-white transition-colors"
            >
              <IconBrandGithub size={13} />
              GitHub
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors"
            >
              <IconExternalLink size={13} />
              Demo
            </a>
          )}
          <button
            onClick={() => setExpanded(!expanded)}
            className="ml-auto flex items-center gap-1 text-xs text-muted hover:text-white transition-colors"
          >
            {expanded ? 'Less' : 'Details'}
            <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <IconChevronDown size={13} />
            </motion.span>
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  const visible = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="max-container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Projects</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-700 tracking-tight text-white">
            Things I've <span className="text-gradient">built</span>
          </h2>
          <p className="mt-4 text-muted max-w-xl text-sm">
            {PROJECTS.length} projects spanning ML systems, Generative AI, and full-stack engineering.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {FILTERS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setFilter(id)}
              className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
              style={{
                background: filter === id ? '#6366F1' : '#111827',
                color: filter === id ? '#fff' : '#6B7280',
                border: `1px solid ${filter === id ? '#6366F1' : '#1F2937'}`,
                boxShadow: filter === id ? '0 0 20px #6366F130' : 'none',
              }}
            >
              {label}
              <span
                className="ml-2 text-xs opacity-70"
              >
                {id === 'all' ? PROJECTS.length : PROJECTS.filter((p) => p.category === id).length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {visible.map((project, i) => (
              <ProjectCard key={project.id} project={project} inView={inView} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
