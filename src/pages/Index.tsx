
import MainNav from '@/components/MainNav';
import HeroSection from '@/components/HeroSection';
import ComplexSection from '@/components/ComplexSection';
import PoolSection from '@/components/PoolSection';
import ApartmentsSection from '@/components/ApartmentsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <MainNav />
      <HeroSection />
      <ComplexSection />
      <PoolSection />
      <ApartmentsSection />
    </div>
  );
};

export default Index;
