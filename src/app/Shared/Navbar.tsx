'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;
      
      // Zawsze pokazuj navbar na górze strony
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else {
        // Ukryj przy scrollowaniu w dół, pokaż przy scrollowaniu w górę
        setIsVisible(currentScrollY < lastScrollY);
      }
      
      // Zamknij menu mobilne przy scrollowaniu
      if (isMenuOpen && Math.abs(currentScrollY - lastScrollY) > 10) {
        setIsMenuOpen(false);
      }
      
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY, isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm py-4 px-4 md:px-8 lg:px-12 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-48">
            <Image 
              src="/vectors/flatscout_logo.svg" 
              alt="Towarzystwo Mieszkaniowe" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/o-nas" className="text-[var(--text-gray)] hover:text-[var(--button-primary)] transition-colors font-medium">
            O Nas
          </Link>
          <Link href="/uslugi" className="text-[var(--text-gray)] hover:text-[var(--button-primary)] transition-colors font-medium">
            Usługi
          </Link>
          <Link href="/renta-dozywotnia" className="text-[var(--text-gray)] hover:text-[var(--button-primary)] transition-colors font-medium">
            Renta Dożywotnia
          </Link>
          <Link href="/wycena" className="text-[var(--text-gray)] hover:text-[var(--button-primary)] transition-colors font-medium">
            Wycena
          </Link>
          <Link href="/blog" className="text-[var(--text-gray)] hover:text-[var(--button-primary)] transition-colors font-medium">
            Blog
          </Link>
          <Link href="/faq" className="text-[var(--text-gray)] hover:text-[var(--button-primary)] transition-colors font-medium">
            FAQ
          </Link>
          <Link href="/kontakt" className="text-[var(--text-gray)] hover:text-[var(--button-primary)] transition-colors font-medium">
            Kontakt
          </Link>
        </div>

        {/* Phone Number */}
        <div className="hidden md:flex items-center">
          <a 
            href="tel:+48530190880" 
            className="flex items-center text-[var(--button-primary)] font-semibold hover:text-[var(--button-hover)] transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
              />
            </svg>
            +48 530 190 880
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden flex items-center" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-[var(--text-gray)]" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute left-0 right-0 bg-white shadow-md transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen py-4' : 'max-h-0'}`}
      >
        <div className="flex flex-col space-y-4 px-6 items-center text-center">
          <Link 
            href="/o-nas" 
            className="text-[var(--text-gray)] hover:text-[var(--button-primary)] py-2 transition-colors font-medium w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            O Nas
          </Link>
          <Link 
            href="/uslugi" 
            className="text-[var(--text-gray)] hover:text-[var(--button-primary)] py-2 transition-colors font-medium w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            Usługi
          </Link>
          <Link 
            href="/renta-dozywotnia" 
            className="text-[var(--text-gray)] hover:text-[var(--button-primary)] py-2 transition-colors font-medium w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            Renta Dożywotnia
          </Link>
          <Link 
            href="/wycena" 
            className="text-[var(--text-gray)] hover:text-[var(--button-primary)] py-2 transition-colors font-medium w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            Wycena
          </Link>
          <Link 
            href="/blog" 
            className="text-[var(--text-gray)] hover:text-[var(--button-primary)] py-2 transition-colors font-medium w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link 
            href="/faq" 
            className="text-[var(--text-gray)] hover:text-[var(--button-primary)] py-2 transition-colors font-medium w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </Link>
          <Link 
            href="/kontakt" 
            className="text-[var(--text-gray)] hover:text-[var(--button-primary)] py-2 transition-colors font-medium w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            Kontakt
          </Link>
          <a 
            href="tel:+48530190880" 
            className="flex items-center justify-center text-[var(--button-primary)] font-semibold py-2 w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
              />
            </svg>
            +48 530 190 880
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;