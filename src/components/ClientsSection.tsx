
import React, { useEffect, useState } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

// Substituir todas as logos pelo logotipo Lansar
const clientLogos = Array(13).fill("/lovable-uploads/9510d4eb-1d86-47ee-83f4-efd07011959d.png");

const ClientsSection: React.FC = () => {
  const [api, setApi] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-scroll effect for the carousel with continuous loop
  useEffect(() => {
    if (!api) return;

    // Set up interval for automatic scrolling
    const interval = setInterval(() => {
      api.scrollNext();
    }, 2000); // Faster scrolling - change slide every 2 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="section-padding bg-white opacity-0 animate-fade-in" style={{ animationFillMode: "forwards", animationDelay: "0.3s" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-lansar/10">
            <h2 className="text-2xl font-bold mb-6 text-center">
              CLIENTES E PROJETOS
            </h2>
            <p className="text-gray-700 mb-8 text-center">
              Já ajudamos empresas de diversos setores a faturarem milhões com nossas soluções de tecnologia e inteligência artificial.
            </p>
            <div className="mt-4 py-12 px-4">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                  dragFree: true,
                }}
                setApi={setApi}
              >
                <CarouselContent>
                  {clientLogos.map((logo, index) => (
                    <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                      <div className="flex items-center justify-center h-64 sm:h-80 p-6">
                        <img 
                          src={logo} 
                          alt={`Cliente ${index + 1}`} 
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
