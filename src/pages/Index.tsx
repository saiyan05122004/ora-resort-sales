
import MainNav from '@/components/MainNav';
import HeroSection from '@/components/HeroSection';
import ComplexSection from '@/components/ComplexSection';
import SeaSection from '@/components/SeaSection';
import PoolSection from '@/components/PoolSection';
import ApartmentsSection from '@/components/ApartmentsSection';
import ConstructionProgressSection from '@/components/ConstructionProgressSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <MainNav />
      <HeroSection />
      <ComplexSection />
      <SeaSection />
      <PoolSection />
      <ApartmentsSection />
      <ConstructionProgressSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
