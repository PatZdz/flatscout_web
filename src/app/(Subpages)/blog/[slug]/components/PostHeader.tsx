import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type PostHeaderProps = {
  title: string;
  date: string;
  author: string;
  imageUrl?: string;
};

const PostHeader: React.FC<PostHeaderProps> = ({ title, date, author, imageUrl }) => {
  return (
    <>
      <Link 
        href="/blog" 
        className="inline-flex items-center text-[var(--button-primary)] hover:text-[var(--button-hover)] mb-8 font-medium"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4 mr-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M10 19l-7-7m0 0l7-7m-7 7h18" 
          />
        </svg>
        Powrót do bloga
      </Link>
      
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
          {title}
        </h1>
        <div className="flex items-center text-[var(--text-light-gray)] mb-6">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{author}</span>
        </div>
        
        <div className="relative w-full h-64 md:h-96 bg-gray-200 rounded-lg mb-8 overflow-hidden">
          {imageUrl ? (
            <Image 
              src={imageUrl} 
              alt={title} 
              fill 
              style={{ objectFit: 'cover' }} 
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-400">Zdjęcie artykułu</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PostHeader;