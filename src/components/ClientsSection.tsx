
import React from "react";

const ClientsSection: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-lansar/10 animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-center">
              CLIENTES E PROJETOS
            </h2>
            <p className="text-gray-700 mb-4 text-center">
              Já ajudamos empresas de diversos setores a faturarem milhões com nossas soluções de tecnologia e inteligência artificial.
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <p className="text-center text-gray-500">
                [Espaço para logos de clientes]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
