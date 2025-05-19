
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <span className="text-2xl font-bold gradient-text">Teste Apps</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#problems" className="text-gray-700 hover:text-lansar transition-colors">
            Problemas
          </a>
          <a href="#agents" className="text-gray-700 hover:text-lansar transition-colors">
            Agentes IA
          </a>
          <a href="#diagnosis" className="text-gray-700 hover:text-lansar transition-colors">
            Diagnóstico
          </a>
          <a href="#why-us" className="text-gray-700 hover:text-lansar transition-colors">
            Por que nós
          </a>
          <Button className="cta-button">
            Solicitar Diagnóstico
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 w-[75%] max-w-sm h-full bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col pt-20 pb-6 px-6 overflow-y-auto`}
      >
        {/* Close button inside mobile menu */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-5 right-5"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Fechar menu"
        >
          <X />
        </Button>
        
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
          {/* Removed the "Solicitar Diagnóstico" button from mobile menu */}
        </div>
      </div>
    </header>
  );
};

export default Header;
