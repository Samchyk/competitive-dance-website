import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getBlogPost, getAllBlogPosts } from '@/lib/blog'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Tag } from 'lucide-react'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map(post => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {
      title: 'Nem Található | Versenytánc',
    }
  }

  return {
    title: `${post.title} | Versenytánc`,
    description: post.excerpt,
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const allPosts = getAllBlogPosts()
  const currentIndex = allPosts.findIndex(p => p.slug === slug)
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Article */}
      <article className="flex-1">
        {/* Header */}
        <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 " />
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Vissza a blogra
            </Link>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2">
                <Tag className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  {post.category}
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-serif font-bold text-white leading-tight">
                {post.title}
              </h1>

              <p className="text-xl text-white/80">
                {post.excerpt}
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-invert max-w-none">
            <div className="text-foreground/80 space-y-6 leading-relaxed">
              {post.content.split('\n\n').map((paragraph, index) => {
                // Handle headings
                if (paragraph.startsWith('##')) {
                  const headingText = paragraph.replace('##', '').trim()
                  return (
                    <h2 key={index} className="text-3xl font-serif font-bold text-foreground mt-8 mb-4">
                      {headingText}
                    </h2>
                  )
                }

                if (paragraph.startsWith('###')) {
                  const headingText = paragraph.replace('###', '').trim()
                  return (
                    <h3 key={index} className="text-2xl font-serif font-bold text-foreground mt-6 mb-3">
                      {headingText}
                    </h3>
                  )
                }

                // Handle lists
                if (paragraph.startsWith('1.') || paragraph.startsWith('2.') || paragraph.startsWith('3.') || paragraph.startsWith('4.') || paragraph.startsWith('5.')) {
                  const items = paragraph.split('\n').map(line => line.replace(/^\d+\.\s*/, '').trim())
                  return (
                    <ol key={index} className="list-decimal list-inside space-y-2 ml-4">
                      {items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ol>
                  )
                }

                if (paragraph.startsWith('-')) {
                  const items = paragraph.split('\n').map(line => line.replace(/^-\s*/, '').trim())
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 ml-4">
                      {items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )
                }

                // Regular paragraph
                return (
                  <p key={index} className="text-lg">
                    {paragraph}
                  </p>
                )
              })}
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5 border-t border-border">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {previousPost ? (
                <Link
                  href={`/blog/${previousPost.slug}`}
                  className="group p-6 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all"
                >
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase">Előző cikk</span>
                  </div>
                  <h3 className="font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                    {previousPost.title}
                  </h3>
                </Link>
              ) : (
                <div />
              )}

              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group p-6 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all text-right"
                >
                  <div className="flex items-center justify-end gap-2 text-primary mb-2">
                    <span className="text-xs font-semibold uppercase">Következő cikk</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                    {nextPost.title}
                  </h3>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  )
}
