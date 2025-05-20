
import React from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import ArrowRight from "./ArrowRight";

const VideoCard: React.FC<{
  quote: string;
  author: string;
  position: string;
}> = ({
  quote,
  author,
  position
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-500 hover:scale-105">
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
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [{
    quote: '🎥 "Conseguimos triplicar a produtividade do nosso time comercial sem contratar ninguém."',
    author: "Fernando Oliveira",
    position: "Diretor de Vendas - Lansar Apps"
  }, {
    quote: '🎥 "Em uma semana, tínhamos agentes de IA prospectando novos clientes enquanto dormíamos."',
    author: "Laura Matos",
    position: "Cofundadora - Lansar Apps"
  }];
  
  return (
    <section className="py-16 px-4 md:px-8 opacity-0" style={{ animationFillMode: "forwards", animationDelay: "0.4s" }}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">O que nossos clientes dizem</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.3 + 0.5}s`, animationFillMode: "forwards" }}
            >
              <VideoCard 
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
