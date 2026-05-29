import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Felhasználási Feltételek | Versenytánc',
  description: 'Felhasználási feltételek és szerzódés',
}

export default function Terms() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />

      <section className="flex-1 py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h1 className="text-5xl font-serif font-bold text-foreground mb-4">
              Felhasználási Feltételek
            </h1> 
          </div>

          <div className="prose prose-invert max-w-none space-y-6 text-foreground/80">
            <section className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-foreground">1. Elfogadás a Feltételekről</h2>
              <p>
                Az oldal használatával elfogadod ezeket a feltételeket. Ha nem fogadod el, ne használd az oldalt.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-foreground">2. Oldal Használata</h2>
              <p>
                Az oldalt csak törvényes célokra használhatod. Tilos:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Illegális tartalom terjesztése</li>
                <li>Mások zaklatása vagy sértése</li>
                <li>Technikai támadások</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-foreground">3. Fiók Biztonság</h2>
              <p>
                Te vagy felelős a fiókodat és jelszavadt védelméért. Nem vagyunk felelős jogosulatlan hozzáférésért.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-foreground">4. Tancsokság Szerződés</h2>
              <p>
                A tancsokságra vonatkozó feltételek:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Havi díjat kell fizetni az óra előtt</li>
                <li>Komolyabb bejelentésekhezlegalább 48 órát javasolt</li>
                <li>Az órákat visszavétlenül meghagyja szóban</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-foreground">5. Vitatás Megoldása</h2>
              <p>
                Ha vitánk van, próbálunk békésen megoldani. Ha nem, akkor a magyar törvényt követjük.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-foreground">6. Felelősség Korlátozása</h2>
              <p>
                A Versenytánc nem felelős közvetett vagy következményes kárért az oldal használatából.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-foreground">7. Módosítások</h2>
              <p>
                Az oldal bármikor módosíthat ezeket a feltételeket. Az oldal folyamatos használata az új feltételek elfogadásának számít.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-foreground">8. Kapcsolat</h2>
              <p>
                Ha kérdéseid van a feltételekről, lépj velünk kapcsolatba.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
