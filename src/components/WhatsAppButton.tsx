
import React from "react";
import { Whatsapp } from "lucide-react";

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "+5548988731733";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <Whatsapp className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
