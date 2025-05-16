
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Cpu } from "lucide-react";

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
          ? "bg-gray-900/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <Cpu className="h-6 w-6 text-lansar mr-2" />
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lansar to-blue-400">Teste Apps</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#problems" className="text-white hover:text-lansar-light transition-colors border-b border-transparent hover:border-lansar-light pb-1">
            Problemas
          </a>
          <a href="#agents" className="text-white hover:text-lansar-light transition-colors border-b border-transparent hover:border-lansar-light pb-1">
            Agentes IA
          </a>
          <a href="#diagnosis" className="text-white hover:text-lansar-light transition-colors border-b border-transparent hover:border-lansar-light pb-1">
            Diagnóstico
          </a>
          <a href="#why-us" className="text-white hover:text-lansar-light transition-colors border-b border-transparent hover:border-lansar-light pb-1">
            Por que nós
          </a>
          <Button className="cta-button hover:shadow-lg hover:shadow-lansar/20 transform hover:translate-y-[-2px] transition-all duration-300">
            Solicitar Diagnóstico
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:text-lansar-light hover:bg-lansar/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu />
        </Button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md border-t border-lansar/20 shadow-lg transition-transform duration-300 transform ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
          <a
            href="#problems"
            className="text-blue-100 py-2 hover:text-lansar-light border-l-2 border-lansar/30 pl-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Problemas
          </a>
          <a
            href="#agents"
            className="text-blue-100 py-2 hover:text-lansar-light border-l-2 border-lansar/30 pl-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Agentes IA
          </a>
          <a
            href="#diagnosis"
            className="text-blue-100 py-2 hover:text-lansar-light border-l-2 border-lansar/30 pl-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Diagnóstico
          </a>
          <a
            href="#why-us"
            className="text-blue-100 py-2 hover:text-lansar-light border-l-2 border-lansar/30 pl-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Por que nós
          </a>
          <Button className="cta-button w-full">
            Solicitar Diagnóstico
          </Button>
        </div>
      </div>
      
      {/* Tech decoration */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lansar/50 to-transparent"></div>
      )}
    </header>
  );
};

export default Header;
