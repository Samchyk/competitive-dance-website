import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import { Calendar, MapPin, Users, Trophy } from 'lucide-react'

export const metadata = {
  title: 'Versenyek | Versenytánc',
  description: 'Fedezd fel a versenylehetőségeket és az eredménycsinálást',
}

export default function Events() {
  const events = [
    {
      title: 'Magyar Bajnokság',
      location: 'Budapest, Kongresszusi Központ',
      participants: '200+ versenyző',
      description: 'Az éves fő esemény, ahol a legjobb tehetségek egymással versengenek',
      category: 'Bajnokság',
      status: 'Közelgő',
    },
    {
      title: 'Nyári Versenyprogram',
      location: 'Budapest, Sportcsarnok',
      participants: '150+ versenyző',
      description: 'Nyári versenyszezon megnyitó - öt különböző kategória',
      category: 'Verseny',
      status: 'Közelgő',
    },
    {
      title: 'Őszi Nemzetközi Verseny',
      location: 'Budapest, Arénában',
      participants: '250+ versenyző',
      description: 'Nemzetközi versenyzőket vonzó prestízsus esemény',
      category: 'Nemzetközi',
      status: 'Közelgő',
    },
    {
      title: 'Karácsony Gálakoncert',
      location: 'Budapest Városháza',
      participants: 'Kiválasztott előadók',
      description: 'A év lezárása egy csodálatos gálakoncerttel',
      category: 'Gála',
      status: 'Közelgő',
    },
  ]

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/competition.png"
          alt="Versenyző táncos teljesítmény"
          fill
          priority
          className="object-cover "
          style={{ position: 'absolute' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 " />
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-white">
            Versenyek & Események
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Szoknu te az egész évet eseményekkel és felszabadult versenylehetőségekkel
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="group bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden hover:shadow-lg"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Left - Content */}
                  <div className="flex-1 p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                          {event.title}
                        </h3>
                        <p className="text-foreground/70">
                          {event.description}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary text-xs font-semibold rounded-full whitespace-nowrap">
                          {event.category}
                        </span>
                        <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full whitespace-nowrap">
                          {event.status}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
                        <div>
                          <p className="text-xs text-foreground/60">Helyszín</p>
                          <p className="font-semibold text-foreground text-sm">{event.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary flex-shrink-0" />
                        <div>
                          <p className="text-xs text-foreground/60">Résztvevők</p>
                          <p className="font-semibold text-foreground text-sm">{event.participants}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right - CTA */}
                  <div className="flex items-center justify-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-t sm:border-t-0 sm:border-l border-border">
                    <button className="w-full sm:w-auto px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors whitespace-nowrap">
                      Regisztráció
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
            Hogyan Működik A Verseny?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-foreground">
                Feliratkozás
              </h3>
              <p className="text-foreground/70">
                Válassz egy eseményt és egy kategóriát. A feliratkozási időpontok hónapokkal a verseny előtt nyitnak meg.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-foreground">
                Előkészülés
              </h3>
              <p className="text-foreground/70">
                Dolgozz velünk az oktatóink közül, hogy kiművelj a megfelelő rutin és készültség.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-foreground">
                Versenyezz
              </h3>
              <p className="text-foreground/70">
                A versenynap jön és te megmutatod, miből vagy képes. Támogatjuk neked minden lépésben.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-foreground">
                Ünneplés
              </h3>
              <p className="text-foreground/70">
                Függetlenül az eredménytől, az átélmény az, ami számít. Végül közösen ünneplünk.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
