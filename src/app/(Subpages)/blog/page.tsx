import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Update the type definition for the params
type Props = {
  params: {
    slug: string;
  };
};

// Use the correct type for generateMetadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Your metadata generation logic here
  return {
    title: `${params.slug} - Blog | FlatScout`,
    description: 'Blog post details',
  };
}

// Use the correct type for the page component
export default async function BlogPostPage({ params }: Props) {
  const { slug } = params;
  
  // If slug doesn't exist, return 404
  if (!slug) {
    notFound();
  }
  
  // Your page rendering logic here
  return (
    <main className="min-h-screen bg-[var(--background-base)]">
      <article className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-black)] mb-8">
          {slug}
        </h1>
        {/* Your blog post content here */}
      </article>
    </main>
  );
}