import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import { Star, Award } from 'lucide-react'

export const metadata = {
  title: 'Oktatók | Versenytánc',
  description: 'Ismerje meg profin oktatóinkat',
}

export default function Teachers() {
  const teachers = [
    {
      name: 'Soós Mária',
      specialty: 'Standard Tánc',
      experience: '20+ évek',
      image: '/competition.png',
      bio: 'Nemzetközi bajnok, több mint 20 év tapasztalata a versenytáncban. Szenvedéllyel tanít új generációkat.',
      achievements: ['5× Magyar Bajnok', 'Nemzetközi Díj', 'Több mint 100 tanítványt tanított'],
    },
    {
      name: 'Nagy István',
      specialty: 'Latin Tánc',
      experience: '18+ évek',
      image: '/blog-hero.png',
      bio: 'Profi koreográfus és versenyző. Szakérteje a Latin tánc dinamikájának és kifejezésének.',
      achievements: ['3× Nemzetközi Finalist', 'Koreográfiai Díj', 'Szakmai Elismerés'],
    },
    {
      name: 'Kovács Zsuzsanna',
      specialty: 'Tánctechnika',
      experience: '15+ évek',
      image: '/workshop.png',
      bio: 'Specialista az alapvető technikák és gyakorlás módszerek terén. Szereti az egyéni fejlesztést.',
      achievements: ['Tanítási Kitüntetés', 'Tánc Elméleti Szakértő', '50+ versenybejegyzés'],
    },
  ]

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-foreground">
            Oktatók
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Tanulj a legjobbaktól - a szakértelem és tapasztalat személyi szinten
          </p>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <div
                key={index}
                className="group bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden border-b border-border">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-foreground">
                      {teacher.name}
                    </h3>
                    <p className="text-sm text-secondary font-semibold mb-1">
                      {teacher.specialty}
                    </p>
                    <p className="text-xs text-foreground/60">{teacher.experience} tapasztalat</p>
                  </div>

                  <p className="text-foreground/70">
                    {teacher.bio}
                  </p>

                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-foreground mb-3 text-sm">Eredmények</h4>
                    <ul className="space-y-2">
                      {teacher.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                          <Award className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full mt-4 px-4 py-2 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary/10 transition-colors">
                    Tudj meg többet
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold">
            Tanítási Filozófiánk
          </h2>
          <p className="text-lg opacity-90">
            Azt hiszünk, hogy kiváló oktatás nem csak technikai tudásról szól. Ez a szenvedély megosztásáról, az egyéni fejlesztésről és inspirálásról szól, hogy a tánc szeretete feltöltse a lelked.
          </p>
          <div className="grid grid-cols-3 gap-6 text-sm mt-12">
            <div>
              <Star className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>Személyre szabott megközelítés</p>
            </div>
            <div>
              <Star className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>Tapasztalat és patika</p>
            </div>
            <div>
              <Star className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>Szenvedély az eredményre</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
