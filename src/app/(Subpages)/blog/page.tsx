import React from 'react';
import BlogGrid from './BlogGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Artykuły i porady dotyczące rynku nieruchomości w Polsce',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[var(--background-base)]">
      <section className="w-full py-16 bg-[var(--background-secondary)]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-black)] mb-4 text-center">
            Blog FlatScout
          </h1>
          <p className="text-lg text-[var(--text-gray)] max-w-3xl mx-auto text-center mb-8">
            Najnowsze artykuły, porady i informacje dotyczące rynku nieruchomości w Polsce
          </p>
        </div>
      </section>
      
      <BlogGrid />
    </main>
  );
}