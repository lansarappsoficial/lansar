
import React from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import ArrowRight from "./ArrowRight";

const VideoCard: React.FC<{
  quote: string;
  author: string;
  position: string;
}> = ({ quote, author, position }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl shadow-lg overflow-hidden border border-blue-500/20 backdrop-blur-md hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-2px]">
      <div className="bg-gray-800 h-52 flex items-center justify-center relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-lansar/20 to-blue-500/20 group-hover:from-lansar/30 group-hover:to-blue-500/30 transition-all duration-300"></div>
        <div className="relative z-10">
          <Button 
            size="icon" 
            className="h-16 w-16 rounded-full bg-white/90 hover:bg-white text-lansar hover:text-lansar-dark transition-colors shadow-lg shadow-black/30"
          >
            <Play className="h-8 w-8" />
          </Button>
        </div>
        
        {/* Tech decoration */}
        <div className="absolute bottom-2 right-2 w-12 h-12 rounded-full bg-lansar/30 filter blur-xl"></div>
        <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-blue-500/30 filter blur-xl"></div>
      </div>
      <div className="p-6">
        <p className="text-lg font-medium mb-4 text-blue-100">{quote}</p>
        <p className="text-white font-semibold">{author}</p>
        <p className="text-blue-200/60">{position}</p>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: '🎥 "Conseguimos triplicar a produtividade do nosso time comercial sem contratar ninguém."',
      author: "Fernando Oliveira",
      position: "Diretor de Vendas - SaaS B2B"
    },
    {
      quote: '🎥 "Em uma semana, tínhamos agentes de IA prospectando novos clientes enquanto dormíamos."',
      author: "Laura Matos",
      position: "Cofundadora - Agência Digital"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-blue-900/10 to-gray-900 text-white relative overflow-hidden">
      {/* Tech background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MjY2ZjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHptMC0zMGMwLTIuMi0xLjgtNC00LTRzLTQgMS44LTQgNCAxLjggNCA0IDQgNC0xLjggNC00em0wIDYwYzAtMi4yLTEuOC00LTQtNHMtNCAxLjgtNCA0IDEuOCA0IDQgNCA0LTEuOCA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center text-transparent bg-clip-text bg-gradient-to-r from-lansar-light to-blue-400">
            Empresas como a sua já estão vendendo <span className="gradient-text">mais com menos esforço</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <VideoCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="link" className="text-lansar hover:text-lansar-light text-lg font-medium bg-black/30 backdrop-blur-sm px-6 py-3 rounded-lg border border-lansar/20 shadow-lg hover:shadow-lansar/20 transition-all duration-300">
              Assista os vídeos <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Tech decoration elements */}
      <div className="absolute top-1/4 left-0 w-40 h-40 bg-lansar/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-60 h-60 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      
      {/* Circuit lines */}
      <div className="absolute top-0 left-1/3 w-px h-20 bg-gradient-to-b from-transparent via-lansar/30 to-transparent"></div>
      <div className="absolute bottom-0 right-1/4 w-px h-32 bg-gradient-to-t from-transparent via-blue-500/30 to-transparent"></div>
    </section>
  );
};

export default TestimonialsSection;
