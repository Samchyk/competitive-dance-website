import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import { getAllBlogPosts } from '@/lib/blog'
import Link from 'next/link'
import { ArrowRight, Tag } from 'lucide-react'

export const metadata = {
  title: 'Blog | Versenytánc',
  description: 'Tánctanácsok, verseny tippek és belső tudás',
}

export default function BlogIndex() {
  const posts = getAllBlogPosts()

  const featuredPost = posts[0]
  const otherPosts = posts.slice(1)

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/hero-dance.png"
          alt="Blog і статті"
          fill
          priority
          className="object-cover"
          style={{ position: 'absolute' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 " />
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-white">
            Blog
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Tánctanácsok, verseny tippek és belső tudás a tánc világából
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden hover:shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left - Content */}
                <div className="p-8 sm:p-10 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 mb-4 w-fit">
                    <Tag className="w-4 h-4 text-secondary" />
                    <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-foreground/70 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:translate-x-2 transition-transform">
                    Olvass többet
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Right - Visual */}
                <div className="relative aspect-square md:aspect-auto md:min-h-[20rem] overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden hover:shadow-lg flex flex-col"
              >
                {/* Card Image */}
                <div className="relative aspect-video overflow-hidden border-b border-border">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="inline-flex items-center gap-2 w-fit">
                    <Tag className="w-4 h-4 text-secondary" />
                    <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-foreground/70 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:translate-x-2 transition-transform mt-2">
                    Olvass
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
