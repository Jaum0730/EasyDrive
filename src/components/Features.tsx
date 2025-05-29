import { Shield, Clock, MapPin, Headphones, CreditCard, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Totalmente Segurado",
    description: "Todos os nossos veículos vêm com cobertura de seguro abrangente para sua tranquilidade."
  },
  {
    icon: Clock,
    title: "Suporte 24/7",
    description: "Suporte ao cliente 24 horas por dia para ajudá-lo sempre que precisar."
  },
  {
    icon: MapPin,
    title: "Múltiplas Localizações",
    description: "Retirada e devolução em mais de 100 locais convenientes em todo o país."
  },
  {
    icon: Headphones,
    title: "Serviço Especializado",
    description: "Nossa equipe experiente garante o melhor serviço e recomendações de veículos."
  },
  {
    icon: CreditCard,
    title: "Pagamento Fácil",
    description: "Opções de pagamento seguras e flexíveis, incluindo todos os principais cartões de crédito e carteiras digitais."
  },
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Veículos bem mantidos e regularmente revisados das principais marcas automotivas."
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Por que Escolher a DriveEasy?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos comprometidos em proporcionar a melhor experiência de aluguel de carros através de nossos serviços e recursos premium
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-brand-blue/10 rounded-2xl mb-6 group-hover:bg-brand-blue/20 transition-colors">
                <feature.icon className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
