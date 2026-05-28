'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In production, you'd send this data to an API
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-foreground">
            Kapcsolat
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Szeretnénk hallani tőled. Keress meg bármilyen kérdésed vagy visszajelzésed van
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-16">
            {/* Email */}
            <div className="bg-card rounded-lg border border-border p-8 text-center">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                E-mail
              </h3>
              <a href="mailto:info@hungaryversenytanc.com" className="text-foreground/70 hover:text-primary transition-colors">
                info@hungaryversenytanc.com
              </a>
              <p className="text-sm text-foreground/60 mt-2">24 órán belül válaszolunk</p>
            </div>

          </div>
          {/* Contact Form and Hours */}
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
                Küldjél üzenetet
              </h2>

              {submitted && (
                <div className="mb-6 p-4 bg-secondary/20 border border-secondary/50 rounded-lg text-secondary">
                  Köszönöm az üzenetet! Hamarosan válaszolunk.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Név
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-input border border-border rounded-md text-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Az Ön neve"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-input border border-border rounded-md text-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-input border border-border rounded-md text-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="+36 1 234 5678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Tárgy
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-input border border-border rounded-md text-foreground focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Válassz egy témát</option>
                    <option value="tancsoksa">Tancsokságra vonatkozó</option>
                    <option value="versenyre">Versenyre vonatkozó</option>
                    <option value="workshop">Workshop</option>
                    <option value="egyeb">Egyéb</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Üzenet
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 bg-input border border-border rounded-md text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Az Ön üzenete..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
                >
                  Küldés
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
