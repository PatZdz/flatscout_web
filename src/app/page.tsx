import Navbar from './Shared/Navbar';
import Hero from './Home/Hero';
import AboutPurchase from './Home/AboutPurchase';
import OurServices from './Home/OurServices';
import PurchaseProcess from './Home/PurchaseProcess';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutPurchase />
      <OurServices />
      <PurchaseProcess />
    </main>
  );
}