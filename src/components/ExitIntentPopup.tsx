import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";

const ExitIntentPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!hasShown) {
        e.preventDefault();
        setIsOpen(true);
        setHasShown(true);
        return "";
      }
    };

    const handlePopState = () => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
        // Push the current state back to prevent actual navigation
        window.history.pushState(null, "", window.location.href);
      }
    };

    // Add event listeners
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', handlePopState);
    
    // Push initial state to enable popstate detection
    window.history.pushState(null, "", window.location.href);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [hasShown]);

  const handleWhatsAppClick = () => {
    const phoneNumber = "5548887317333";
    const message = "Olá! Gostaria de agendar um diagnóstico gratuito para saber onde implementar IA na minha empresa..";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogOverlay />
      <DialogContent className="max-w-md mx-auto bg-white rounded-lg shadow-xl border-0">        
        <div className="text-center p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Prefere falar no WhatsApp?
            </h3>
            <p className="text-gray-600">Clique aqui 👇</p>
          </div>
          
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <FaWhatsapp className="w-6 h-6" />
            Falar no WhatsApp
          </button>
          
          <p className="text-xs text-gray-500 mt-3">
            Resposta rápida!
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;