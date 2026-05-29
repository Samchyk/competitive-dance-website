import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import { Clock, Users, Calendar } from 'lucide-react'

export const metadata = {
  title: 'Órák | Versenytánc',
  description: 'Nézze meg az elérhető táncosztályokat és órarendet',
}

export default function Classes() {
  const classTypes = [
    {
      title: 'Kezdő Tánc',
      level: 'Kezdő',
      duration: '60 perc',
      schedule: 'Hétfő & Szerda',
      time: '18:00 - 19:00',
      capacity: '15 fő',
      description: 'Az alapvető technikák és ritmusok megtanulása',
    },
    {
      title: 'Közép Szint',
      level: 'Közép',
      duration: '75 perc',
      schedule: 'Kedd & Csütörtök',
      time: '19:00 - 20:15',
      capacity: '12 fő',
      description: 'Fejlett technikák és koreográfia fejlesztés',
    },
    {
      title: 'Haladó Verseny',
      level: 'Haladó',
      duration: '90 perc',
      schedule: 'Szombat & Vasárnap',
      time: '10:00 - 11:30',
      capacity: '10 fő',
      description: 'Versenyfeladatok és profi szintű edzés',
    },
    {
      title: 'Egyéni Oktatás',
      level: 'Összes szint',
      duration: 'Rugalmas',
      schedule: 'Egyéni egyeztetéssel',
      time: 'Egyéni egyeztetéssel',
      capacity: '1 fő',
      description: 'Személyre szabott tanítás és fejlesztés',
    },
  ]

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/classes-banner.png"
          alt="Táncosztályok"
          fill
          priority
          className="object-cover"
          style={{ position: 'absolute' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 " />
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-white">
            Tánc Órák
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Válassz az alábbiakból és kezdd el az utadad
          </p>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {classTypes.map((classItem, index) => (
              <div
                key={index}
                className="group bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden hover:shadow-lg"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-6 border-b border-border">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                    {classItem.title}
                  </h3>
                  <p className="text-sm text-foreground/60 mb-3">{classItem.description}</p>
                  <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold">
                    {classItem.level}
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-foreground/60 uppercase tracking-wider">Tartam</p>
                        <p className="font-semibold text-foreground">{classItem.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-foreground/60 uppercase tracking-wider">Napok</p>
                        <p className="font-semibold text-foreground">{classItem.schedule}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-border">
                    <p className="text-sm text-foreground/60 mb-1">Idő:</p>
                    <p className="font-semibold text-foreground">{classItem.time}</p>
                  </div>

                  <div className="pt-2">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-xs text-foreground/60">Kapacitás</p>
                        <p className="font-semibold text-foreground">{classItem.capacity}</p>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-4 px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors">
                    Feliratkozás
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-8 text-center">
            Gyakran Feltett Kérdések
          </h2>
          <div className="space-y-6">
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">
                Szükségem van korábbi tapasztalatra?
              </h3>
              <p className="text-foreground/70">
                Nem! Nincsenek előfeltételek. Az összes szint számára van egy óra típusunk.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">
                Mi az a típusú ruhák szükségesek?
              </h3>
              <p className="text-foreground/70">
                Kényelmes edzőruha és tánccipő ajánlott. Az első órán járulékos nem szükséges.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">
                Tudom-e próbaórára menni?
              </h3>
              <p className="text-foreground/70">
                Igen! Az első óra ingyenes próbával rendelkezik. Egyszerűen csatornázzon és jelezze szándékát.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
