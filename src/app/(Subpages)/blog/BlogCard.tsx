import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  excerpt?: string;
  content?: string;
  date: string;
  imageUrl: string;
  slug: string;
  author: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 max-w-sm mx-auto h-full flex flex-col">
      <div className="relative h-48 w-full">
        {post.imageUrl ? (
          <Image 
            src={post.imageUrl} 
            alt={post.title} 
            fill 
            style={{ objectFit: 'cover' }} 
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">Zdjęcie artykułu</span>
          </div>
        )}
      </div>
      
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <span className="text-sm text-[var(--text-light-gray)] block mb-2">{post.date}</span>
          <h3 className="text-xl font-bold text-[var(--text-black)] mb-3 hover:text-[var(--button-primary)] transition-colors">
            <Link href={`/blog/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          </h3>
          <p className="text-[var(--text-gray)] mb-4">
            {post.excerpt || (post.content && post.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...')}
          </p>
        </div>
        <Link 
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-[var(--button-primary)] hover:text-[var(--button-hover)] font-medium transition-colors mt-auto"
        >
          Czytaj więcej
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;