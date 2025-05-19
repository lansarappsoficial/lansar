
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const BeneficiariesSection: React.FC = () => {
  const beneficiaries = [
    "Infoprodutores e lançadores digitais",
    "Prestadores de serviço de todos os portes",
    "Empresas de tecnologia e software",
    "Indústrias e fabricantes",
    "E-commerce e varejo digital",
    "Agências de marketing e consultorias",
    "Atacadistas e distribuidores",
    "E muitos outros segmentos que buscam escalar vendas com automação inteligente"
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="section-title animate-fade-in">
            QUEM PODE SE <span className="gradient-text">BENEFICIAR</span>
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {beneficiaries.map((beneficiary, index) => (
            <Card 
              key={index} 
              className="border border-lansar/10 shadow-md hover:shadow-lg hover:border-lansar/20 transition-all animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <p className="text-gray-700">{beneficiary}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeneficiariesSection;
