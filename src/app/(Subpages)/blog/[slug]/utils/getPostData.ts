import fallbackPosts from '../data/fallbackPosts';

// Funkcja do pobierania posta na podstawie sluga
export function getPostBySlug(slug: string) {
  // Znajdź post w statycznych danych
  const post = fallbackPosts.find(post => post.slug === slug);
  return post || null;
}