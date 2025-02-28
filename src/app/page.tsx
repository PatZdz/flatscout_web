import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import Hero from './Home/Hero';
import AboutPurchase from './Home/AboutPurchase';
import OurServices from './Home/OurServices';
import PurchaseProcess from './Home/PurchaseProcess';
import WhyUs from './Home/WhyUs';
import PurchaseTypes from './Home/PurchaseTypes';
import TimeFrame from './Home/TimeFrame';
import CashOffer from './Home/CashOffer';
import Testimonials from './Home/Testimonials';
import PropertyProblems from './Home/PropertyProblems';
import DebtPurchase from './Home/DebtPurchase';
import SharesPurchase from './Home/SharesPurchase';
import ContactForm from './Home/ContactForm';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutPurchase />
      <OurServices />
      <PurchaseProcess />
      <WhyUs />
      <PurchaseTypes />
      <TimeFrame />
      <CashOffer />
      <Testimonials />
      <PropertyProblems />
      <DebtPurchase />
      <SharesPurchase />
      <ContactForm />
      <Footer />
    </main>
  );
}