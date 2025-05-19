
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
  return <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="bg-gray-200 h-52 flex items-center justify-center relative group">
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>
        <div className="relative z-10">
          <Button size="icon" className="h-16 w-16 rounded-full bg-white/90 hover:bg-white text-lansar hover:text-lansar-dark transition-colors">
            <Play className="h-8 w-8" />
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
        <h2 className="text-3xl font-bold text-center mb-12">O QUE NOSSOS CLIENTES DIZEM</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <VideoCard 
              key={index} 
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
