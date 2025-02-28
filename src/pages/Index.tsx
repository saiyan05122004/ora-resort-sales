
import MainNav from '@/components/MainNav';
import HeroSection from '@/components/HeroSection';
import ComplexSection from '@/components/ComplexSection';
import PoolSection from '@/components/PoolSection';
import ApartmentsSection from '@/components/ApartmentsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <MainNav />
      <HeroSection />
      <ComplexSection />
      <PoolSection />
      <ApartmentsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
