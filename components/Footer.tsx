'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-foreground rounded flex items-center justify-center">
                <span className="text-primary font-serif text-lg font-bold">H</span>
              </div>
              <span className="font-serif text-lg font-bold">Hungaryversenytanc</span>
            </div>
            <p className="text-sm opacity-90">
              Prémium táncsport közösség és versenyirányítási platform
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-lg font-semibold">Gyorslinks</h3>
            <Link href="/" className="text-sm hover:opacity-80 transition-opacity">Kezdőlap</Link>
            <Link href="/about" className="text-sm hover:opacity-80 transition-opacity">Rólunk</Link>
            <Link href="/classes" className="text-sm hover:opacity-80 transition-opacity">Órák</Link>
            <Link href="/blog" className="text-sm hover:opacity-80 transition-opacity">Blog</Link>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-lg font-semibold">Szolgáltatások</h3>
            <Link href="/events" className="text-sm hover:opacity-80 transition-opacity">Versenyek</Link>
            <Link href="/classes" className="text-sm hover:opacity-80 transition-opacity">Csoportok</Link>
            <Link href="/workshops" className="text-sm hover:opacity-80 transition-opacity">Workshopok</Link>
            <Link href="/contact" className="text-sm hover:opacity-80 transition-opacity">Kapcsolat</Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-lg font-semibold">Elérhetőség</h3>
            <a href="mailto:info@hungaryversenytanc.com" className="text-sm hover:opacity-80 transition-opacity flex items-center gap-2">
              <Mail className="w-4 h-4" />
              info@hungaryversenytanc.com
            </a>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm opacity-75">
            © {currentYear} Hungaryversenytanc. Minden jog fenntartva.
          </p>
          {/* Legal Links */}
          <div className="flex gap-4 text-sm">
            <Link href="/privacy" className="hover:opacity-80 transition-opacity">Adatvédelem</Link>
            <Link href="/terms" className="hover:opacity-80 transition-opacity">Feltételek</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
