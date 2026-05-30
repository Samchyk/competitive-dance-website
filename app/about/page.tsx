import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import { Users, Heart, Zap, Star } from 'lucide-react'

export const metadata = {
  title: 'Rólunk | Versenytánc',
  description: 'Ismerj meg bennünket és megtudd, mi motivál bennünket',
}

export default function About() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-foreground">
            Rólunk
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Egy szenvedélyes csapat, amely a tánc és a verseny szeretete köré összpontosul
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl font-serif font-bold text-foreground">
                Az Ötletünk Kezdete
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Éveket töltöttünk a versenyző tánc világában, és egy közös álmunk volt: egy olyan helyet létrehozni, ahol a szenvedély, a szaktudás és a közösség egységesen létezik.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Tudjuk, hogy a versenyző tánc nem csak mozgásokról szól – ez az önfejlesztésről, az erősségről és az olyan emberek közösségéről, akik ugyanazokat az értékeket osztják.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Ezért hoztuk létre ezt a platformot: hogy irányítsuk és támogassuk az utolsó egy százalékot.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden group">
              <Image
                src="/team.png"
                alt="Tánc, Szenvedély, Közösség"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
              Alapértékek
            </h2>
            <p className="text-xl text-foreground/70">
              Amit szívből hiszünk
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="bg-background p-8 rounded-lg border border-border hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                Közösség
              </h3>
              <p className="text-foreground/70">
                Építünk barátságokat és támogató kapcsolatokat
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-background p-8 rounded-lg border border-border hover:border-secondary/30 transition-colors">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                Kiválóság
              </h3>
              <p className="text-foreground/70">
                Az ügyességünk maximális szintjére törekszünk
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-background p-8 rounded-lg border border-border hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                Szenvedély
              </h3>
              <p className="text-foreground/70">
                Szeretjük, amit csinálunk, és ez érzékelhető
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-background p-8 rounded-lg border border-border hover:border-secondary/30 transition-colors">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                Fejlődés
              </h3>
              <p className="text-foreground/70">
                Bátorítjuk a tanulást és az önfejlesztést
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
              Csapatunk
            </h2>
            <p className="text-xl text-foreground/70">
              Tapasztalt versenyzők és oktatók
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['/hero-dance.png', '/workshop.png', '/classes-banner.png'].map((img, i) => (
              <div key={i} className="group">
                <div className="relative h-64 rounded-lg mb-4 overflow-hidden border border-border group-hover:border-primary/30 transition-all">
                  <Image
                    src={img}
                    alt="Csapattag"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                  Hungaryversenytanc
                </h3>
                <p className="text-sm text-foreground/60 mb-3">
                  Oktatási szakértő
                </p>
                <p className="text-foreground/70">
                  Több mint 15 év tapasztalata a versenyzésben
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
