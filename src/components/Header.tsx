import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Travar scroll quando menu mobile estiver aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMobileMenuOpen]);

  // Detecta scroll para aplicar efeito no header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      } animate-fade-in`}
    >
      <div className="container mx-auto flex justify-center items-center px-4 relative">
        {/* Logo centralizado */}
        <div className="flex items-center">
          <img
            alt="Lansar Apps"
            src="/lovable-uploads/c98d9550-4f29-4c96-ae4c-f2114af17894.png"
            className="h-[100px] w-[250px] object-contain"
          />
        </div>

        {/* Botão de menu mobile */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden absolute right-4 z-[70] text-gray-400 hover:text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Overlay escurecido atrás do menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Menu lateral mobile */}
      <div
        className={`md:hidden fixed top-0 right-0 w-[75%] max-w-sm h-full bg-white z-[70] shadow-xl transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col pt-20 pb-6 px-6 overflow-y-auto`}
      >
        {/* Botão de fechar dentro do menu */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Fechar menu"
        >
          <X className="h-6 w-6" />
        </Button>

        {/* Links do menu */}
        <div className="flex flex-col space-y-6">
          <a
            href="#problems"
            className="text-gray-700 py-2 text-lg font-medium hover:text-lansar border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Problemas
          </a>
          <a
            href="#agents"
            className="text-gray-700 py-2 text-lg font-medium hover:text-lansar border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Agentes IA
          </a>
          <a
            href="#diagnosis"
            className="text-gray-700 py-2 text-lg font-medium hover:text-lansar border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Diagnóstico
          </a>
          <a
            href="#why-us"
            className="text-gray-700 py-2 text-lg font-medium hover:text-lansar border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Por que nós
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
