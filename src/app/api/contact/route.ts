import { NextRequest, NextResponse } from 'next/server'
import mongoose from 'mongoose'

// ── MongoDB connection ────────────────────────────────────
const MONGODB_URI = process.env.MONGODB_URI || ''

let isConnected = false

async function connectDB() {
  if (isConnected) return
  if (!MONGODB_URI) {
    console.warn('MONGODB_URI not set — skipping DB save')
    return
  }
  await mongoose.connect(MONGODB_URI)
  isConnected = true
}

// ── Contact Schema ────────────────────────────────────────
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  read: { type: Boolean, default: false },
})

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema)

// ── POST handler ──────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, subject, message } = body

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    if (message.length > 2000) {
      return NextResponse.json({ error: 'Message too long (max 2000 characters).' }, { status: 400 })
    }

    // Save to MongoDB
    try {
      await connectDB()
      await Contact.create({ name, email, subject, message })
    } catch (dbErr) {
      console.error('DB save failed:', dbErr)
      // Continue even if DB fails — still try to send email
    }

    // Optional: send email via nodemailer
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const nodemailer = await import('nodemailer')
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        })

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_TO || process.env.EMAIL_USER,
          subject: `Portfolio Contact: ${subject}`,
          html: `
            <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #030712; color: #F9FAFB; padding: 32px; border-radius: 16px; border: 1px solid #1F2937;">
              <h2 style="color: #6366F1; margin-bottom: 24px;">New Portfolio Message</h2>
              <p><strong style="color: #9CA3AF;">From:</strong> ${name} (${email})</p>
              <p><strong style="color: #9CA3AF;">Subject:</strong> ${subject}</p>
              <div style="margin-top: 16px; padding: 16px; background: #111827; border-radius: 8px; border-left: 3px solid #6366F1;">
                <p style="white-space: pre-wrap;">${message}</p>
              </div>
              <p style="color: #6B7280; font-size: 12px; margin-top: 24px;">Sent from shainagera.dev portfolio</p>
            </div>
          `,
        })

        // Confirmation to sender
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: email,
          subject: `Got your message, ${name}!`,
          html: `
            <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #030712; color: #F9FAFB; padding: 32px; border-radius: 16px; border: 1px solid #1F2937;">
              <h2 style="color: #6366F1;">Thanks for reaching out!</h2>
              <p style="color: #D1D5DB; margin-top: 16px;">Hi ${name},</p>
              <p style="color: #D1D5DB; margin-top: 8px;">I've received your message and will get back to you within 24–48 hours.</p>
              <div style="margin-top: 24px; padding: 16px; background: #111827; border-radius: 8px; border-left: 3px solid #22D3EE;">
                <p style="color: #9CA3AF; font-size: 14px;">Your message:</p>
                <p style="color: #D1D5DB; margin-top: 8px; white-space: pre-wrap;">${message}</p>
              </div>
              <p style="color: #6B7280; font-size: 12px; margin-top: 24px;">— Shaina Gera | shainagera.dev</p>
            </div>
          `,
        })
      } catch (emailErr) {
        console.error('Email send failed:', emailErr)
      }
    }

    return NextResponse.json({ success: true, message: "Message received — I'll be in touch soon!" })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
