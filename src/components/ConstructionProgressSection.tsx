
import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent 
} from '@/components/ui/tabs';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';

// Construction progress data structure - simplified to years only
const constructionProgress = {
  '2025': [
    '/lovable-uploads/3231194c-7fbf-45df-9b3e-26acec733b88.png',
    '/lovable-uploads/60915121-3220-4dfe-af22-01e78eb99c2b.png',
    '/lovable-uploads/6b135259-eb7f-4bd3-bd01-adbeb6630882.png',
    '/lovable-uploads/8e25cbd4-82d2-4e75-96eb-cff818949cec.png',
  ],
  '2026': [], // Empty array for "скоро" (coming soon)
};

const ConstructionProgressSection = () => {
  return (
    <section id="construction" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Ход Строительства
        </h2>
        
        <Tabs defaultValue="2025" className="w-full">
          <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
            {Object.keys(constructionProgress).map((year) => (
              <TabsTrigger key={year} value={year} className="text-lg">
                {year === '2026' ? 'Скоро' : year}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {Object.keys(constructionProgress).map((year) => (
            <TabsContent key={year} value={year}>
              {year === '2026' ? (
                <div className="text-center py-10">
                  <p className="text-xl text-gray-500">Фотографии будут доступны в ближайшее время</p>
                </div>
              ) : (
                <Carousel className="w-full max-w-4xl mx-auto">
                  <CarouselContent>
                    {constructionProgress[year].map((image, index) => (
                      <CarouselItem key={index} className="md:basis-1/1">
                        <Card>
                          <CardContent className="p-1">
                            <AspectRatio ratio={16 / 9} className="bg-gray-100 overflow-hidden rounded-lg">
                              <img
                                src={image}
                                alt={`Строительство ${year}, фото ${index + 1}`}
                                className="object-cover w-full h-full"
                              />
                            </AspectRatio>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex justify-center mt-4">
                    <CarouselPrevious className="relative -left-0 top-0 translate-y-0 mr-4" />
                    <CarouselNext className="relative -right-0 top-0 translate-y-0" />
                  </div>
                </Carousel>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ConstructionProgressSection;
