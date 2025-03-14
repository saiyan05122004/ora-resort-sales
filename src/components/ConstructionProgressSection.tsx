
import { useState } from 'react';
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

// Construction progress data structure
const constructionProgress = {
  '2023': {
    'Декабрь': [
      '/lovable-uploads/3231194c-7fbf-45df-9b3e-26acec733b88.png',
      '/lovable-uploads/60915121-3220-4dfe-af22-01e78eb99c2b.png',
    ],
    'Ноябрь': [
      '/lovable-uploads/6b135259-eb7f-4bd3-bd01-adbeb6630882.png',
      '/lovable-uploads/8e25cbd4-82d2-4e75-96eb-cff818949cec.png',
    ],
  },
  '2024': {
    'Январь': [
      '/lovable-uploads/a13a3bc7-4f7e-4e42-b016-34f478545840.png',
      '/lovable-uploads/ec0cbbbc-428b-4cb4-a521-3adbae86863d.png',
    ],
    'Февраль': [
      '/lovable-uploads/7724b3b3-63c9-46cf-886c-a8f72f3a0f61.png',
      '/lovable-uploads/3231194c-7fbf-45df-9b3e-26acec733b88.png',
    ],
  },
};

const ConstructionProgressSection = () => {
  const [selectedYear, setSelectedYear] = useState(Object.keys(constructionProgress)[0]);
  
  return (
    <section id="construction" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Ход Строительства
        </h2>
        
        <Tabs defaultValue={Object.keys(constructionProgress)[0]} onValueChange={setSelectedYear} className="w-full">
          <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
            {Object.keys(constructionProgress).map((year) => (
              <TabsTrigger key={year} value={year} className="text-lg">
                {year}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {Object.keys(constructionProgress).map((year) => (
            <TabsContent key={year} value={year}>
              <Tabs defaultValue={Object.keys(constructionProgress[year])[0]}>
                <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
                  {Object.keys(constructionProgress[year]).map((month) => (
                    <TabsTrigger key={month} value={month}>
                      {month}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {Object.keys(constructionProgress[year]).map((month) => (
                  <TabsContent key={month} value={month}>
                    <Carousel className="w-full max-w-4xl mx-auto">
                      <CarouselContent>
                        {constructionProgress[year][month].map((image, index) => (
                          <CarouselItem key={index} className="md:basis-1/1">
                            <Card>
                              <CardContent className="p-1">
                                <AspectRatio ratio={16 / 9} className="bg-gray-100 overflow-hidden rounded-lg">
                                  <img
                                    src={image}
                                    alt={`Строительство ${month} ${year}, фото ${index + 1}`}
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
                  </TabsContent>
                ))}
              </Tabs>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ConstructionProgressSection;
