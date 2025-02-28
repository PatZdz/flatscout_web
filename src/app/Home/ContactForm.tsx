'use client';

import Form, { FormData } from '../Shared/Form';
import Link from 'next/link';

interface ContactFormProps {
  onSubmit?: (formData: FormData) => void;
}

const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const handleFormSubmit = (formData: FormData) => {
    console.log('Formularz kontaktowy wysłany:', formData);
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background-secondary)]" id="kontakt">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Skontaktuj się z nami
          </h2>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-6"></div>
          <p className="text-[var(--text-gray)] max-w-3xl mx-auto">
            Wypełnij formularz, a nasz ekspert skontaktuje się z Tobą w ciągu 24 godzin, aby omówić szczegóły Twojej nieruchomości.
          </p>
        </header>

        {/* Formularz kontaktowy */}
        <div className="max-w-[500px] mx-auto mb-16">
          <Form onSubmit={handleFormSubmit} />
        </div>
        
        {/* Sekcja województw */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-[var(--text-black)] mb-8">
            Działamy w każdym województwie
          </h3>
          <div className="w-16 h-1 bg-[var(--button-primary)] mx-auto mb-10"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-2 text-xs opacity-80">
            <Link href="/" className="flex items-center hover:text-[var(--button-primary)] transition-colors">
              <span className="w-1.5 h-1.5 bg-[var(--button-primary)] rounded-full mr-1.5"></span>
              <span className="text-[var(--text-gray)]">Skup nieruchomości Wielkopolskie</span>
            </Link>
            <Link href="/" className="flex items-center hover:text-[var(--button-primary)] transition-colors">
              <span className="w-1.5 h-1.5 bg-[var(--button-primary)] rounded-full mr-1.5"></span>
              <span className="text-[var(--text-gray)]">Skup nieruchomości Dolnośląskie</span>
            </Link>
            <Link href="/" className="flex items-center hover:text-[var(--button-primary)] transition-colors">
              <span className="w-1.5 h-1.5 bg-[var(--button-primary)] rounded-full mr-1.5"></span>
              <span className="text-[var(--text-gray)]">Skup nieruchomości Pomorskie</span>
            </Link>
            <Link href="/" className="flex items-center hover:text-[var(--button-primary)] transition-colors">
              <span className="w-1.5 h-1.5 bg-[var(--button-primary)] rounded-full mr-1.5"></span>
              <span className="text-[var(--text-gray)]">Skup nieruchomości Śląskie</span>
            </Link>
            <Link href="/" className="flex items-center hover:text-[var(--button-primary)] transition-colors">
              <span className="w-1.5 h-1.5 bg-[var(--button-primary)] rounded-full mr-1.5"></span>
              <span className="text-[var(--text-gray)]">Skup nieruchomości Pomorskie</span>
            </Link>
            <Link href="/" className="flex items-center hover:text-[var(--button-primary)] transition-colors">
              <span className="w-1.5 h-1.5 bg-[var(--button-primary)] rounded-full mr-1.5"></span>
              <span className="text-[var(--text-gray)]">Skup nieruchomości Świętokrzyskie</span>
            </Link>
            <Link href="/" className="flex items-center hover:text-[var(--button-primary)] transition-colors">
              <span className="w-1.5 h-1.5 bg-[var(--button-primary)] rounded-full mr-1.5"></span>
              <span className="text-[var(--text-gray)]">Skup nieruchomości Mazowieckie</span>
            </Link>
            <Link href="/" className="flex items-center hover:text-[var(--button-primary)] transition-colors">
              <span className="w-1.5 h-1.5 bg-[var(--button-primary)] rounded-full mr-1.5"></span>
              <span className="text-[var(--text-gray)]">Skup nieruchomości Podlaskie</span>
            </Link>
            <Link href="/" className="flex items-center hover:text-[var(--button-primary)] transition-colors">
              <span className="w-1.5 h-1.5 bg-[var(--button-primary)] rounded-full mr-1.5"></span>
              <span className="text-[var(--text-gray)]">Skup nieruchomości Małopolskie</span>
            </Link>
            <Link href="/" className="flex items-center hover:text-[var(--button-primary)] transition-colors">
              <span className="w-1.5 h-1.5 bg-[var(--button-primary)] rounded-full mr-1.5"></span>
              <span className="text-[var(--text-gray)]">Skup nieruchomości Warmińsko-mazurskie</span>
            </Link>
            <Link href="/" className="flex items-center hover:text-[var(--button-primary)] transition-colors">
              <span className="w-1.5 h-1.5 bg-[var(--button-primary)] rounded-full mr-1.5"></span>
              <span className="text-[var(--text-gray)]">Skup nieruchomości Lubuskie</span>
            </Link>
            <Link href="/" className="flex items-center hover:text-[var(--button-primary)] transition-colors">
              <span className="w-1.5 h-1.5 bg-[var(--button-primary)] rounded-full mr-1.5"></span>
              <span className="text-[var(--text-gray)]">Skup nieruchomości Opolskie</span>
            </Link>
            <Link href="/" className="flex items-center hover:text-[var(--button-primary)] transition-colors">
              <span className="w-1.5 h-1.5 bg-[var(--button-primary)] rounded-full mr-1.5"></span>
              <span className="text-[var(--text-gray)]">Skup nieruchomości Łódzkie</span>
            </Link>
            <Link href="/" className="flex items-center hover:text-[var(--button-primary)] transition-colors">
              <span className="w-1.5 h-1.5 bg-[var(--button-primary)] rounded-full mr-1.5"></span>
              <span className="text-[var(--text-gray)]">Skup nieruchomości Zachodniopomorskie</span>
            </Link>
            <Link href="/" className="flex items-center hover:text-[var(--button-primary)] transition-colors">
              <span className="w-1.5 h-1.5 bg-[var(--button-primary)] rounded-full mr-1.5"></span>
              <span className="text-[var(--text-gray)]">Skup nieruchomości Lubelskie</span>
            </Link>
            <Link href="/" className="flex items-center hover:text-[var(--button-primary)] transition-colors">
              <span className="w-1.5 h-1.5 bg-[var(--button-primary)] rounded-full mr-1.5"></span>
              <span className="text-[var(--text-gray)]">Skup nieruchomości Podkarpackie</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;