import React, { useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

declare global {
  interface Window {
    Calendly: any;
  }
}

const CalendlyModal: React.FC<CalendlyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen && window.Calendly) {
      // Clear any existing Calendly widgets
      const existingWidget = document.querySelector('.calendly-inline-widget');
      if (existingWidget) {
        existingWidget.innerHTML = '';
      }

      // Initialize Calendly widget
      setTimeout(() => {
        if (window.Calendly && document.querySelector('.calendly-inline-widget')) {
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/alexandrelansar/30min',
            parentElement: document.querySelector('.calendly-inline-widget'),
            prefill: {},
            utm: {}
          });
        }
      }, 100);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full h-[80vh] p-0 overflow-hidden">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle className="text-xl font-semibold text-center">
            Agende seu Diagnóstico Gratuito
          </DialogTitle>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>
        <div className="flex-1 p-4 pt-2">
          <div
            className="calendly-inline-widget w-full h-full"
            style={{ minHeight: '600px' }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalendlyModal;