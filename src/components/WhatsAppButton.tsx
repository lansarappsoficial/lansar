
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 z-50"
          aria-label="Converse conosco no WhatsApp"
        >
          <FaWhatsapp className="w-8 h-8" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-md p-0">
        <div className="h-full">
          <div className="calendly-inline-widget" data-url="https://calendly.com/lansarapps/30min" style={{minWidth: '320px', height: '100%'}}></div>
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default WhatsAppButton;
