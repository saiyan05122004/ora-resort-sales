
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';

// Construction progress data structure - simplified to years only
const constructionProgress = {
  '2025': ['/lovable-uploads/33d4e6e3-f0a1-46c5-b9f2-1ad1b7d4c9ec.png'],
  '2026': [] // Empty array for "скоро" (coming soon)
};

const ConstructionProgressSection = () => {
  return <section id="construction" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Ход Строительства
        </h2>
        
        <Tabs defaultValue="2025" className="w-full">
          <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
            {Object.keys(constructionProgress).map(year => <TabsTrigger key={year} value={year} className="text-lg">
                {year === '2026' ? 'Скоро' : year}
              </TabsTrigger>)}
          </TabsList>
          
          {Object.keys(constructionProgress).map(year => <TabsContent key={year} value={year}>
              {year === '2026' ? <div className="text-center py-10">
                  <p className="text-xl text-gray-500">Скоро...</p>
                </div> : <div className="w-full max-w-4xl mx-auto">
                  <Card>
                    <CardContent className="p-1">
                      <AspectRatio ratio={16 / 9} className="bg-gray-100 overflow-hidden rounded-lg">
                        <img 
                          src={constructionProgress[year][0]} 
                          alt={`Строительство ${year}`} 
                          className="object-cover w-full h-full" 
                          onError={(e) => console.error("Ошибка загрузки изображения:", e)}
                        />
                      </AspectRatio>
                    </CardContent>
                  </Card>
                </div>}
            </TabsContent>)}
        </Tabs>
      </div>
    </section>;
};

export default ConstructionProgressSection;
