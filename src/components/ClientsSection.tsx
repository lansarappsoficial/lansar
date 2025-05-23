import React, { useEffect, useState, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

// Import client logo images
const clientLogos = ["/lovable-uploads/29835fab-7c68-46a7-8ffb-090f021c0fab.png", "/lovable-uploads/614ca7c9-1668-476e-9d4f-bf81db46a045.png", "/lovable-uploads/1a14507a-39e6-46e1-bc61-997fc54b1ac9.png", "/lovable-uploads/548850a1-2c9f-4bd4-9bde-ff62f55a00ac.png", "/lovable-uploads/0004df2f-a408-4326-9298-f71ded15c8e6.png", "/lovable-uploads/db47edbd-f207-44dc-b31c-21b0992164b7.png", "/lovable-uploads/8e9e9724-0060-43ac-86d2-2bc6363cb21f.png", "/lovable-uploads/a36d55ed-95bb-4d0d-8b22-918393ce1ad5.png", "/lovable-uploads/172b1332-12b6-494e-8bc3-1a887c40755f.png", "/lovable-uploads/fb022d39-75d6-4248-9c96-363d5775ec73.png", "/lovable-uploads/3d7d31e9-868f-415e-8394-caaeadd7838d.png", "/lovable-uploads/6c8ef796-4775-49aa-bff0-ae00ec45b252.png", "/lovable-uploads/af073555-ba82-4dfc-bcbe-ba3c9726ee06.png"];
const ClientsSection: React.FC = () => {
  const [api, setApi] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Animation observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

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
  return <section ref={sectionRef} id="clients" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`bg-white p-8 rounded-2xl shadow-xl border border-lansar/10 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h2 className="text-2xl font-bold mb-6 text-center">
              CLIENTES E PROJETOS
            </h2>
            <p className="text-gray-700 mb-6 text-center">
              Já ajudamos empresas de diversos setores a faturarem milhões com nossas soluções de tecnologia e inteligência artificial.
            </p>
            <div className="mt-4 px-2 py-0">
              <Carousel opts={{
              align: "start",
              loop: true,
              dragFree: true
            }} setApi={setApi}>
                <CarouselContent>
                  {clientLogos.map((logo, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className={`flex items-center justify-center h-52 sm:h-64 p-4 transition-all duration-700 delay-${index % 5 * 100} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                        <img src={logo} alt={`Cliente ${index + 1}`} className="max-h-full max-w-full object-contain" />
                      </div>
                    </CarouselItem>)}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ClientsSection;