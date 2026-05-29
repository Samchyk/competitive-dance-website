import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Music, Users, Trophy, Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-dance.png"
            alt="Профессиональные танцоры на сцене"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/70" />
        </div>
        
        {/* Animated Background Overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                Prémium Táncsport Közösség
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
              Éljük meg a <span className="text-amber-400">tánc</span> varázsát
            </h1>

            <p className="text-xl sm:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Csatornázzon a versenyszellem, az előrehozott tanítást és a dinamikus közösség egy helyre. Ahol a szenvedély találkozik az előkelőséggel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-black font-medium rounded-md hover:bg-white/90 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Kezdj most
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="px-8 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-all duration-200"
              >
                Tudj meg többet
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-white/60">Görgess le</span>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
              Miért válassz bennünket?
            </h2>
            <p className="text-xl text-foreground/70">
              Szakértelem, passzió és közösség egy helyen
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-slide-in-left">
              <Image
                src="/team.png"
                alt="Professzionális táncoktató csapat"
                width={500}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-bold text-foreground">
                Élitművészek és Oktatók
              </h3>
              <p className="text-lg text-foreground/70">
                Csapatunk nemzetközi versenyek győzteseinek, tapasztalt oktatók és szenvedélyes tánccal dolgozó professzionálisokból áll.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <Trophy className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-foreground">Nemzetközi versenyeken ismert oktatók</span>
                </li>
                <li className="flex gap-3">
                  <Music className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-foreground">Egyéni és csoportos tanítási módszerek</span>
                </li>
                <li className="flex gap-3">
                  <Users className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-foreground">Minden szinten támogatás nyújtás</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="group animate-slide-in-left">
              <div className="bg-gradient-to-br from-secondary/10 to-transparent p-8 rounded-lg border border-secondary/20 hover:border-secondary/50 transition-all duration-300 h-full flex flex-col gap-4">
                <div className="w-12 h-12 bg-secondary/30 rounded-lg flex items-center justify-center group-hover:bg-secondary/50 transition-colors">
                  <Music className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Professzionális Oktatás
                </h3>
                <p className="text-foreground/70">
                  Tapasztalt tanárok vezetik az órákat
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
              <div className="bg-gradient-to-br from-primary/10 to-transparent p-8 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 h-full flex flex-col gap-4">
                <div className="w-12 h-12 bg-primary/30 rounded-lg flex items-center justify-center group-hover:bg-primary/50 transition-colors">
                  <Trophy className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Versenylehetőségek
                </h3>
                <p className="text-foreground/70">
                  Rendszeres helyi és nemzetközi versenyek
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-secondary/10 to-transparent p-8 rounded-lg border border-secondary/20 hover:border-secondary/50 transition-all duration-300 h-full flex flex-col gap-4">
                <div className="w-12 h-12 bg-secondary/30 rounded-lg flex items-center justify-center group-hover:bg-secondary/50 transition-colors">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Élénk Közösség
                </h3>
                <p className="text-foreground/70">
                  Támogató, barátságos társaság
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
              <div className="bg-gradient-to-br from-primary/10 to-transparent p-8 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 h-full flex flex-col gap-4">
                <div className="w-12 h-12 bg-primary/30 rounded-lg flex items-center justify-center group-hover:bg-primary/50 transition-colors">
                  <Sparkles className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Magas Minőség
                </h3>
                <p className="text-foreground/70">
                  Kiváló szolgáltatások és felszerelés
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold">
            Készen állsz csatlakozni?
          </h2>
          <p className="text-xl opacity-90">
            Fedezd fel a tánc világát és csatornázd az értékeket az igazak közül
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-primary-foreground text-primary font-semibold rounded-md hover:bg-primary-foreground/90 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Kérdezz most
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
