'use client';

import { useState } from 'react';

interface FormProps {
  onSubmit?: (formData: FormData) => void;
}

export interface FormData {
  imie: string;
  nazwisko: string;
  email: string;
  rodzajNieruchomosci: string;
  telefon: string;
  lokalizacja: string;
  metraz: string;
  dodatkoweInfo: string;
  zgodaMarketing: boolean;
}

const Form = ({ onSubmit }: FormProps) => {
  const [formData, setFormData] = useState<FormData>({
    imie: '',
    nazwisko: '',
    email: '',
    rodzajNieruchomosci: 'Mieszkanie',
    telefon: '',
    lokalizacja: '',
    metraz: '',
    dodatkoweInfo: '',
    zgodaMarketing: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formularz wysłany:', formData);
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className="w-full bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6 md:p-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">Wypełnij formularz kontaktowy</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="imie"
              placeholder="Imię"
              value={formData.imie}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="nazwisko"
              placeholder="Nazwisko"
              value={formData.nazwisko}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>
        </div>
        
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          required
        />
        
        <div>
          <label htmlFor="rodzajNieruchomosci" className="block text-sm font-medium text-gray-700 mb-1">
            Rodzaj nieruchomości
          </label>
          <select
            id="rodzajNieruchomosci"
            name="rodzajNieruchomosci"
            value={formData.rodzajNieruchomosci}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          >
            <option value="Mieszkanie">Mieszkanie</option>
            <option value="Dom">Dom</option>
            <option value="Działka">Działka</option>
            <option value="Lokal użytkowy">Lokal użytkowy</option>
            <option value="Inne">Inne</option>
          </select>
        </div>
        
        <input
          type="tel"
          name="telefon"
          placeholder="Telefon"
          value={formData.telefon}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          required
        />
        
        <input
          type="text"
          name="lokalizacja"
          placeholder="Lokalizacja"
          value={formData.lokalizacja}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          required
        />
        
        <input
          type="text"
          name="metraz"
          placeholder="Metraż"
          value={formData.metraz}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          required
        />
        
        <textarea
          name="dodatkoweInfo"
          placeholder="Dodatkowe informacje np. stan nieruchomości, piętro, oczekiwana cena..."
          value={formData.dodatkoweInfo}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
        />
        
        <div className="flex items-start">
          <input
            type="checkbox"
            id="zgodaMarketing"
            name="zgodaMarketing"
            checked={formData.zgodaMarketing}
            onChange={handleCheckboxChange}
            className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            required
          />
          <label htmlFor="zgodaMarketing" className="ml-2 block text-sm text-gray-700">
            Wyrażam zgodę na przetwarzanie moich danych osobowych oraz otrzymywanie e-maili marketingowych.
            <a href="/polityka-prywatnosci" className="text-green-600 hover:text-green-800 ml-1">Zobacz Politykę Prywatności więcej informacji.</a>
          </label>
        </div>
        
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
        >
          Wyślij
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Form;