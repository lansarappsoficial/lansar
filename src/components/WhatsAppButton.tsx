
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5548887317333";
    const message = "Olá! Tenho interesse no diagnóstico gratuito para entender melhor como implementar IA na minha empresa e gostaria de mais informações..";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 z-50"
      aria-label="Converse conosco no WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
    </button>
  );
};

export default WhatsAppButton;
