
import React from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import ArrowRight from "./ArrowRight";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const VideoCard: React.FC<{
  quote: string;
  author: string;
  position: string;
}> = ({
  quote,
  author,
  position
}) => {
  return <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="bg-gray-200 h-52 flex items-center justify-center relative group">
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>
        <div className="relative z-10">
          <Button size="icon" className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-white/90 hover:bg-white text-lansar hover:text-lansar-dark transition-colors">
            <Play className="h-7 w-7 sm:h-8 sm:w-8" />
          </Button>
        </div>
      </div>
      <div className="p-6">
        <p className="text-lg font-medium mb-4">{quote}</p>
        <p className="text-gray-800 font-semibold">{author}</p>
        <p className="text-gray-500">{position}</p>
      </div>
    </div>;
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [{
    quote: '🎥 "Conseguimos triplicar a produtividade do nosso time comercial sem contratar ninguém."',
    author: "Fernando Oliveira",
    position: "Diretor de Vendas - SaaS B2B"
  }, {
    quote: '🎥 "Em uma semana, tínhamos agentes de IA prospectando novos clientes enquanto dormíamos."',
    author: "Laura Matos",
    position: "Cofundadora - Agência Digital"
  }];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">O que nossos clientes dizem</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja como a Lansar Apps está transformando empresas com automação inteligente
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 p-2">
                  <VideoCard 
                    quote={testimonial.quote}
                    author={testimonial.author}
                    position={testimonial.position}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="relative static mx-2" />
              <CarouselNext className="relative static mx-2" />
            </div>
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <Button variant="default" className="bg-lansar hover:bg-lansar-dark">
            Conheça todos os casos de sucesso <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
