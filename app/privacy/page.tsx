import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Adatvédelmi Szabályzat | Versenytánc',
  description: 'Adatvédelmi szabályzat és információ',
}

export default function Privacy() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />

      <section className="flex-1 py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h1 className="text-5xl font-serif font-bold text-foreground mb-4">
              Adatvédelmi Szabályzat
            </h1>

          </div>

          <div className="prose prose-invert max-w-none space-y-6 text-foreground/80">
            <section className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-foreground">1. Bevezetés</h2>
              <p>
                A Versenytánc elkötelezett a Ön adatainak védelme iránt. Ez az adatvédelmi szabályzat elmagyarázza, hogyan gyűjtjük, használjuk és védjük Ön személyes adatait.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-foreground">2. Gyűjtött Adatok</h2>
              <p>
                Gyűjthetünk a következőket:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Név és e-mail cím</li>
                <li>Telefonszám</li>
                <li>Tangyak és szint információ</li>
                <li>Felhasználói viselkedés az oldalon</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-foreground">3. Az Adatok Használata</h2>
              <p>
                Ön adatait használjuk:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Tancsokságra vonatkozó kommunikáció</li>
                <li>Szervereink javítása</li>
                <li>Versenyre vonatkozó információ</li>
                <li>E-mail közlemények</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-foreground">4. Adatok Megosztása</h2>
              <p>
                Nem osztjuk meg Ön adatait harmadik felekkel, kivéve szükséges jogi okok miatt.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-foreground">5. Sütik</h2>
              <p>
                Sütik segítségével nyomon követjük az Ön jelenlétét oldalunkon. Ezek segíteni az oldal működésében és a tapasztalat javításában.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-foreground">6. Az Ön Jogai</h2>
              <p>
                Joga van:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Megkérdezni, milyen adataink van Ön</li>
                <li>Kérhet korrekciót</li>
                <li>Kérhet törlést</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-foreground">7. Kapcsolat</h2>
              <p>
                Ha kérdése van az adatvédelemről, vágjon fel velünk kapcsolatot.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
