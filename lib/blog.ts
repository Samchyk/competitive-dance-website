// Blog posts data - Hungarian language content
export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'tancoszt-standard-tanc',
    title: 'Ismerjük meg a Standard Tánc Stílusát',
    excerpt: 'Standard tánc nem csak mozgások – ez az elegancia, a technika és az armonikus munka művészete.',
    category: 'Tanítás',
    image: '/hero-dance.png',
    content: `A standard tánc egy klasszikus és elegáns stílus, amely elegáns mozgásokra és precíz technikára összpontosít. Ez az egyik legrégebbi tánc forma, amely szenvedélyes és érzékeny.

## A Standard Tánc Alapelemei

A standard tánc öt alaptípusból áll: Waltz, Tango, Viennese Waltz, Foxtrot és Quickstep. Mindegyiknek megvan a saját ritmusát és jellegzetességeit.

### Waltz
A waltz az egyik legromantikusabb tánc stílus. Három ütemű ritmusú és folyamatos mozgásokra jellemzően.

### Tango
A tango szenvedély és dráma. Ez egy legalább két ütemű tánc, amely intenzív expressziót igényel.

## Fejlődés és Gyakorlat

A standard tánc megtanulása fokozatos folyamat. Kezdd az alapvető lépésekkel, majd fokozatosan halad előre a bonyolultabb technikákon.

Javasoljuk a rendszeres gyakorlatot és egy képzett oktatóval való tanulást a helyes technika felépítéséhez.`,
  },
  {
    id: '2',
    slug: 'latin-tanc-ritmus-es-mozgas',
    title: 'Latin Tánc: Ritmus és Mozgás',
    excerpt: 'Fedezz fel a Latin tánc energikus és szenzuális világát, amely a ritmusok és a testmozgások összharmóniája.',
    category: 'Tanítás',
    image: '/classes-banner.png',
    content: `A latin tánc egy energikus és élénk stílus, amely a ritmikus mozgásokra és az érzelmi kifejezésre összpontosít. Ez egy szabad és kreatív tánc forma, amely lehetővé teszi a személyes kifejezést.

## A Latin Tánc Típusai

A latin tánc többféle stílust tartalmaz: Cha-cha-cha, Rumba, Jive, Paso Doble és Samba.

### Cha-cha-cha
A Cha-cha-cha egy vidám és játékos tánc, amely laza csípőmozgásokra jellemző.

### Rumba
A Rumba a legromantikusabb latin tánc, amely lassú és érzékeny mozgásokra összpontosít.

## Gyakorlási Tippek

1. Tanulj meg a ritmusokat
2. Gyakorolj csípő mozgásokat
3. Halotj a lábmozgások kalibrálásán
4. Kombinálj zenét és mozgást

Rendszeres gyakorlat és türelem szükséges a mesterséghez.`,
  },
  {
    id: '3',
    slug: 'verseny-elokeszulet-tippek',
    title: 'Verseny Előkészület: Tippek és Trükkök',
    excerpt: 'Megtanuld, hogyan kell felkészülni egy versenyre és önbizalommal lépni a parkettre.',
    category: 'Verseny',
    image: '/competition.png',
    content: `A versenyhez való felkészülés egy komplex és összetett folyamat, amely fizikai, mentális és érzelmi felkészülést igényel.

## Fizikai Felkészülés

Az első lépés a fizikai felkészülés. Rendszeres gyakorlatot, erős alapot és technika fejlesztést igényel.

- Gyakorolj legalább 3-4 alkalommal hetente
- Fókuszálj a gyenge pontokra
- Végezz nyújtásokat és erősítési gyakorlatokat

## Mentális Felkészülés

A mentális felkészülés ugyanolyan fontos, mint a fizikai. Tudod elképzelni magad a parketton és nyerni kell.

- Vizualizálj sikert
- Gyakorolj relaxáció technikákat
- Vegyél szükség szerint pszichológiai segítséget

## Nap Előtt

Az utolsó napok kritikusak. Pihenj, egyél jól és maradj hidegvérűen.

- Ne gyakorolj túl sokat
- Végezz könnyű nyújtásokat
- Aludj jól az utolsó éjszakán

## A Verseny Napján

Végül a nagy nap. Mutasd meg, amit tanultál és élvezd az élményt!`,
  },
  {
    id: '4',
    slug: 'tanc-tanacsok-kezdoknek',
    title: 'Tánctanácsok Kezdőknek',
    excerpt: 'Ha most kezdesz táncolni, ezek az alapvető tanácsok segítenek az első lépéseken.',
    category: 'Tanítás',
    image: '/workshop.png',
    content: `A táncolás elkezdése mindig izgalmas és kissé rémisztő. Néhány hasznos tanács a kezdőkhöz.

## Válassz egy Stílust

Először döntsd el, melyik tánc stílus érdekel. Standard vagy latin? Vagy mindkettő?

## Keressen egy Jó Oktatót

Egy jó oktató nagyon fontos. Válassz egy tapasztalt és türelmes oktatót.

## Kezd Az Alapokkal

Ne siessesd el. Az alapok megtanulása az első feladat. Ezekre majd építesz fel.

## Gyakorolj Rendszeresen

Rendszeres gyakorlat sokkal fontosabb, mint az alkalmi intenzív edzés.

- Legalább 2-3 alkalom hetente
- Otthon is gyakorolj ha lehet
- Önmagad felé türelmes legyél

## Élvezd Az Utadad

A legfontosabb: élvezd az utadad! A tánc egy öröm, nem egy kötelezettség.`,
  },
  {
    id: '5',
    slug: 'tancforma-es-testartalmi-kezeles',
    title: 'Tánc Forma és Testhalmozás Kezelés',
    excerpt: 'Fedezz fel a helyes pózokkal és testmegfigyeléssel kapcsolatos fontos információkat.',
    category: 'Tanítás',
    image: '/team.png',
    content: `A helyes forma a tánc alapja. Rosszul tanított forma lassan másodlagos problémákat okozhat.

## Helyes Tartás

A jó testtartás az alapja a jó technikának. Tartsd fel a fejed, relaxált legyen az vagy és vonzódjon felfelé.

## Csipő Mozgások

A csipő mozgások kritikusak a latin táncban. A csípőd mozgatni kell a lábaidnak megfelelően, nem pedig a fordítottja.

## Kar Pozíció

A kar pozíció szintén fontos. A karok legyen elegánsak és kontrolláltnak, nem pedig merevnek.

## Közös Hibák

1. Túl merev testtartás
2. Nem megfelelő csípő mozgás
3. Figyelmetlenség a ritmusra
4. Rossz testmérték

## Fejlődés

A forma fejlesztése idő igényes. Ne siessesd el, és legyen türelmes magadhoz.`,
  },
  {
    id: '6',
    slug: 'zenei-ritmus-es-tancozas',
    title: 'Zenei Ritmus és Táncolás',
    excerpt: 'A zene és a ritmus megértése kulcsfontosságú a táncolásban. Megtanuld, hogyan hallgatódj meg a ritmusra.',
    category: 'Tanítás',
    image: '/blog-hero.png',
    content: `A zene és a ritmus megértése kritikus a táncolásban. A jó táncos úgy mozog, ahogy a zene játszik.

## A Ritmus Megértése

Először meg kell értened a ritmus sablonját. Különböző tánc stilusok különböző ritmusokat használnak.

### 2/4 Ritmus
Quickstep és Jive ezt a ritmus mintát használja.

### 3/4 Ritmus
Waltz és Viennese Waltz ezt a ritmus mintát használja.

### 4/4 Ritmus
Foxtrot és Tango ezt a ritmus mintát használja.

## Hallgatódz a Ritmusra

Gyakorolj a zene meghallgatására. Számold meg a ritmus számot és halotj meg az accento.

## Ritmus és Mozgás Összhangja

A mozgások és a zene összhangja az alapja a jó táncolásnak. Soha ne hadd a ritmus; helyette hagyja, hogy a ritmus vezetje a mozgásodat.`,
  },
  {
    id: '7',
    slug: 'par-munka-es-kommunikacio',
    title: 'Párral Dolgozni: Kommunikáció és Harmónia',
    excerpt: 'Megtanuld, hogyan kell egy táncpartnerrel harmóniában dolgozni és kommunikálni.',
    category: 'Tanítás',
    image: '/team.png',
    content: `A párral táncolás különleges készség. Szükséges kommunikáció, bizalom és harmónia.

## Kommunikáció

A kommunikáció az alapja a jó páros táncolásnak. Mind a vezetőnek, mind a követőnek szükséges érteni egymást.

### Vezetői Jelek
A vezető egyértelmű jeleket kell adnia a követőnek a mozgásokról.

### Követő Empatia
A követőnek empatikusnak kell lennie és követnie kell a vezetőt.

## Bizalom

Bizalom szükséges a jó páros táncoláshoz. Mind a vezetőnek, mind a követőnek meg kell bíznia egymásban.

## Közös Gyakorlás

Rendszeres gyakorlás a partnered mellett segít a harmónia és a szinkronizáció fejlesztésben.

## Visszajelzés

Nyílt és konstruktív visszajelzés segít mindketten fejlődni.`,
  },
  {
    id: '8',
    slug: 'versenyzok-alaptul-kiterjesztes',
    title: 'Versenyzőknek: Az Alapból a Magas Szintig',
    excerpt: 'A kezdetektől az elismert versenyzőig – az utad a tánc csúcsáig.',
    category: 'Verseny',
    image: '/competition.png',
    content: `Az utad az alapoktól az elit szintig terjedhet, de szükséges a dedikáció és a munka.

## Az Alapok

Kezdd a grundvetős tanítással. Az alapok fontos mindenen.

## Közepes Szint

Miután elsajátítottad az alapokat, lépj az előbb lépésekre.

- Fejlett technikák
- Koreográfia
- Versenyre való felkészülés

## Haladó Szint

Az elite szint felé tartó versenyzőknek szükséges:

- Szoros tanítás egy kiemelkedő oktatóval
- Rendszeres verseny tapasztalat
- Dedikáció és szokszisztematikus praxis
- Mentális és fizikai felkészültség

## Fenntartás

Az elit szint nem végpont. Szükséges folyamatosan fejlődni és versenyezni.`,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}
