import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import { Clock, Users, Star, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Workshopok | Versenytánc',
  description: 'Intenzív tanulási ülések és speciális szemináriumok',
}

export default function Workshops() {
  const workshops = [
    {
      title: 'Standard Tánc Mesterkurzus',
      instructor: 'Soós Mária',
      duration: '4 hétvége',
      level: 'Közép - Haladó',
      description: 'Fejlett technikák és versenyfeladatok az elit szintről tanítva',
      maxParticipants: '20',
      highlights: ['Személyre szabott visszajelzés', 'Versenyfeladat praxis', 'Videó analízis'],
    },
    {
      title: 'Latin Tánc Alapok',
      instructor: 'Nagy István',
      duration: '6 hét',
      level: 'Kezdő - Közép',
      description: 'A latin tánc alapjainak teljes bevezetése és ritmusmérnöksége',
      maxParticipants: '25',
      highlights: ['Ritmusok megtanulása', 'Hip mozgások', 'Koreográfia alapok'],
    },
    {
      title: 'Egyensúly és Fluiditás',
      instructor: 'Kovács Zsuzsanna',
      duration: '8 hétvége',
      level: 'Összes szint',
      description: 'Fejlessz meghaladó technikákat, amelyek a tánc formáit és rugalmasságát javítják',
      maxParticipants: '15',
      highlights: ['Tornagyakorlatok', 'Fluiditáselmélet', 'Versenyfeladat adaptáció'],
    },
  ]

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/workshop.png"
          alt="Tánc workshop intenzív oktatás"
          fill
          priority
          className="object-cover "
          style={{ position: 'absolute' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-white">
            Workshopok
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Intenzív tanulási ülések a legjelentősebb oktatóktól
          </p>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <div
                key={index}
                className="group bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden hover:shadow-lg flex flex-col"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-6 border-b border-border">
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                    {workshop.title}
                  </h3>
                  <p className="text-sm text-foreground/60 mb-3">
                    Oktatóként: {workshop.instructor}
                  </p>
                  <div className="inline-block px-2 py-1 bg-primary/20 text-primary rounded text-xs font-semibold">
                    {workshop.level}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <p className="text-foreground/70">
                    {workshop.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-3 pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                      <div className="text-sm">
                        <p className="text-foreground/60">Időtartam</p>
                        <p className="font-semibold text-foreground">{workshop.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="text-sm">
                        <p className="text-foreground/60">Max résztvevők</p>
                        <p className="font-semibold text-foreground">{workshop.maxParticipants}</p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="pt-2">
                    <p className="text-sm font-semibold text-foreground mb-2">Mit tanulhatsz:</p>
                    <ul className="space-y-1">
                      {workshop.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border mt-auto">
                    <button className="w-full px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors">
                      Feliratkozás
                    </button>
                  </div>
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
            Miért A Workshopok?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <Star className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Szűk Csoport Tanítás</h3>
                <p className="text-foreground/70">Magas minőségű, személyre szabott oktatás kisebb csoportokban</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Star className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Szakterület Szakértelem</h3>
                <p className="text-foreground/70">Nemzetközi szinten elismert oktatók és versenyzők</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Star className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Intenzív Tanulás</h3>
                <p className="text-foreground/70">Sűrű tantárgy és gyors fejlődés biztos csoportban</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Star className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Hálózatépítés</h3>
                <p className="text-foreground/70">Csatlakozz más versenyzőkkel és mélyítsd kapcsolatait</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
