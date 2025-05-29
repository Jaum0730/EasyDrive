import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600">Confiado por mais de 50 mil clientes</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Aluguel de Carros 
              <span className="text-brand-blue"> Premium</span> 
              <br />Simplificado
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Descubra a liberdade da estrada com nossa frota premium. De carros econômicos a luxuosos, 
              encontre o carro perfeito para sua jornada com preços e serviço imbatíveis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-brand-blue hover:bg-blue-700 text-white px-8 py-6 text-lg">
                Alugue Seu Carro Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                Ver Frota
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-brand-blue">500+</div>
                <div className="text-gray-600">Carros Premium</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-blue">50k+</div>
                <div className="text-gray-600">Clientes Satisfeitos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-blue">24/7</div>
                <div className="text-gray-600">Suporte</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-slide-up lg:animate-fade-in">
            <div className="relative bg-gradient-to-br from-brand-blue/10 to-brand-orange/10 rounded-3xl p-8">
              <img 
                src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Premium Car" 
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-brand-orange text-white px-6 py-3 rounded-full shadow-lg">
                <span className="font-semibold">A partir de R$29/dia</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-brand-blue/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-brand-orange/5 to-transparent rounded-full blur-3xl"></div>
    </section>
  );
};
