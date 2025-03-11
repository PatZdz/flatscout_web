import React from 'react';

const ContactCTA: React.FC = () => {
  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-xl font-bold text-[var(--text-black)] mb-6">Potrzebujesz pomocy w sprzedaży nieruchomości?</h3>
      <div className="bg-[var(--background-secondary)] p-6 rounded-lg">
        <p className="text-[var(--text-gray)] mb-4">Skontaktuj się z nami, aby uzyskać profesjonalną pomoc w sprzedaży Twojej nieruchomości.</p>
        <a
          href="/kontakt"
          className="inline-flex items-center justify-center bg-[var(--button-primary)] text-white hover:bg-[var(--button-hover)] hover:scale-105 focus:ring-2 focus:ring-[var(--button-hover)] focus:outline-none transition-all duration-300 font-bold py-3 px-6 rounded-lg"
        >
          Skontaktuj się z nami
        </a>
      </div>
    </div>
  );
};

export default ContactCTA;