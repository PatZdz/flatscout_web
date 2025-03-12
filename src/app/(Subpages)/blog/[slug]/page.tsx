import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import PostHeader from './components/PostHeader'
import SocialShare from './components/SocialShare'
import ContactCTA from './components/ContactCTA'
import { getPostBySlug } from './utils/getPostData'

// Usuń/zakomentuj dotychczasowe PageProps:
// interface PageProps {
//   params: { slug: string }
//   searchParams: Record<string, string | string[] | undefined>
// }

export async function generateMetadata({
  params,
  searchParams
}: {
  params: { slug: string }
  searchParams: Record<string, string | string[] | undefined>
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Artykuł nie znaleziony - FlatScout',
      description: 'Przepraszamy, nie znaleźliśmy szukanego artykułu'
    }
  }

  return {
    title: `${post.title} - Blog`,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, '')
  }
}

export default async function BlogPostPage({
  params,
  searchParams
}: {
  params: { slug: string }
  searchParams: Record<string, string | string[] | undefined>
}) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[var(--background-base)]">
      <article className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <PostHeader
            title={post.title}
            date={post.date}
            author={post.author}
            imageUrl={post.imageUrl}
          />

          <div
            className="prose prose-lg max-w-none
              prose-headings:font-bold
              prose-h1:text-4xl prose-h1:mb-8 
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-base prose-p:leading-relaxed prose-p:mb-6
              prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
              prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
              prose-li:my-2
              prose-img:rounded-lg prose-img:my-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <SocialShare />
          <ContactCTA />
        </div>
      </article>
    </main>
  )
}