
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
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <Cpu className="h-6 w-6 text-lansar mr-2" />
          <span className="text-2xl font-bold text-lansar">Teste Apps</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#problems" className="text-gray-700 hover:text-lansar transition-colors border-b border-transparent hover:border-lansar pb-1">
            Problemas
          </a>
          <a href="#agents" className="text-gray-700 hover:text-lansar transition-colors border-b border-transparent hover:border-lansar pb-1">
            Agentes IA
          </a>
          <a href="#diagnosis" className="text-gray-700 hover:text-lansar transition-colors border-b border-transparent hover:border-lansar pb-1">
            Diagnóstico
          </a>
          <a href="#why-us" className="text-gray-700 hover:text-lansar transition-colors border-b border-transparent hover:border-lansar pb-1">
            Por que nós
          </a>
          <Button className="bg-lansar hover:bg-lansar-dark text-white font-medium py-2 px-4 rounded-lg transition-all duration-300">
            Solicitar Diagnóstico
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-gray-700 hover:text-lansar hover:bg-lansar/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu />
        </Button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg transition-transform duration-300 transform ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
          <a
            href="#problems"
            className="text-gray-700 py-2 hover:text-lansar border-l-2 border-lansar/30 pl-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Problemas
          </a>
          <a
            href="#agents"
            className="text-gray-700 py-2 hover:text-lansar border-l-2 border-lansar/30 pl-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Agentes IA
          </a>
          <a
            href="#diagnosis"
            className="text-gray-700 py-2 hover:text-lansar border-l-2 border-lansar/30 pl-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Diagnóstico
          </a>
          <a
            href="#why-us"
            className="text-gray-700 py-2 hover:text-lansar border-l-2 border-lansar/30 pl-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Por que nós
          </a>
          <Button className="bg-lansar hover:bg-lansar-dark text-white w-full">
            Solicitar Diagnóstico
          </Button>
        </div>
      </div>
      
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"></div>
      )}
    </header>
  );
};

export default Header;
