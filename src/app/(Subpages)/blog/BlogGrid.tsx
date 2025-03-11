import React from 'react';
import BlogCard from './BlogCard';

// Import fallbackPosts from the same source used by article pages
import fallbackPosts from './[slug]/data/fallbackPosts';

// Use a subset of the data for the blog grid preview
const previewPosts = [
  {
    id: 1,
    title: 'Jak przygotować mieszkanie do sprzedaży?',
    excerpt: 'Poznaj sprawdzone sposoby na przygotowanie mieszkania, które przyciągną potencjalnych kupujących i zwiększą wartość nieruchomości.',
    date: '15 maja 2023',
    imageUrl: '/images/blog/przygotowanie-mieszkania.webp',
    slug: 'jak-przygotowac-mieszkanie-do-sprzedazy',
    author: 'Anna Kowalska'
  },
  {
    id: 2,
    title: 'Rynek nieruchomości w Polsce - trendy 2023',
    excerpt: 'Analiza aktualnych trendów na rynku nieruchomości w Polsce. Sprawdź, jakie zmiany czekają nas w najbliższych miesiącach.',
    date: '3 czerwca 2023',
    imageUrl: '/images/blog/trendy-rynkowe.webp',
    slug: 'rynek-nieruchomosci-w-polsce-trendy-2023',
    author: 'Piotr Nowak'
  },
  {
    id: 3,
    title: 'Kredyt hipoteczny czy gotówka - co się bardziej opłaca?',
    excerpt: 'Porównanie zakupu nieruchomości za gotówkę i na kredyt. Dowiedz się, które rozwiązanie będzie lepsze w Twojej sytuacji.',
    date: '22 lipca 2023',
    imageUrl: '/images/blog/kredyt-vs-gotowka.webp',
    slug: 'kredyt-hipoteczny-czy-gotowka-co-sie-bardziej-oplaca',
    author: 'Marta Wiśniewska'
  },
  {
    id: 4,
    title: 'Jak negocjować cenę nieruchomości?',
    excerpt: 'Skuteczne strategie negocjacyjne, które pomogą Ci uzyskać lepszą cenę przy zakupie lub sprzedaży nieruchomości.',
    date: '10 sierpnia 2023',
    imageUrl: '/images/blog/negocjacje-ceny.webp',
    slug: 'jak-negocjowac-cene-nieruchomosci',
    author: 'Tomasz Kowalczyk'
  },
  {
    id: 5,
    title: 'Inwestowanie w nieruchomości na wynajem - od czego zacząć?',
    excerpt: 'Kompleksowy przewodnik dla początkujących inwestorów. Poznaj podstawy inwestowania w nieruchomości na wynajem.',
    date: '5 września 2023',
    imageUrl: '/images/blog/inwestowanie-wynajem.webp',
    slug: 'inwestowanie-w-nieruchomosci-na-wynajem-od-czego-zaczac',
    author: 'Karolina Lewandowska'
  },
  {
    id: 6,
    title: 'Renta dożywotnia - dla kogo i na jakich zasadach?',
    excerpt: 'Wyjaśniamy, czym jest renta dożywotnia, kto może z niej skorzystać i jakie są jej zalety oraz potencjalne wady.',
    date: '18 października 2023',
    imageUrl: '/images/blog/renta-dozywocia.webp',
    slug: 'renta-dozywocia-dla-kogo-i-na-jakich-zasadach',
    author: 'Jan Zieliński'
  },
];

const BlogGrid = () => {
  // Use the fallbackPosts data from the article pages
  const posts = fallbackPosts;
  
  return (
    <section className="py-16 bg-[var(--background-base)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        {/* Pagination component could be added here */}
        <div className="mt-12 flex justify-center">
          <button className="mx-1 px-4 py-2 rounded-md bg-[var(--background-secondary)] text-[var(--text-gray)] hover:bg-[var(--button-primary)] hover:text-white transition-colors">
            1
          </button>
          <button className="mx-1 px-4 py-2 rounded-md bg-[var(--background-secondary)] text-[var(--text-gray)] hover:bg-[var(--button-primary)] hover:text-white transition-colors">
            2
          </button>
          <button className="mx-1 px-4 py-2 rounded-md bg-[var(--background-secondary)] text-[var(--text-gray)] hover:bg-[var(--button-primary)] hover:text-white transition-colors">
            3
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;