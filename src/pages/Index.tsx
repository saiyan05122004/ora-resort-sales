
import MainNav from '@/components/MainNav';
import HeroSection from '@/components/HeroSection';
import ComplexSection from '@/components/ComplexSection';
import PoolSection from '@/components/PoolSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <MainNav />
      <HeroSection />
      <ComplexSection />
      <PoolSection />
    </div>
  );
};

export default Index;
