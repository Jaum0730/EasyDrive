
import { Shield, Clock, MapPin, Headphones, CreditCard, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Fully Insured",
    description: "All our vehicles come with comprehensive insurance coverage for your peace of mind."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support to assist you whenever you need help."
  },
  {
    icon: MapPin,
    title: "Multiple Locations",
    description: "Pick up and drop off at over 100+ convenient locations nationwide."
  },
  {
    icon: Headphones,
    title: "Expert Service",
    description: "Our experienced team ensures you get the best service and vehicle recommendations."
  },
  {
    icon: CreditCard,
    title: "Easy Payment",
    description: "Secure and flexible payment options including all major credit cards and digital wallets."
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Well-maintained, regularly serviced vehicles from top automotive brands."
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose DriveEasy?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing you with the best car rental experience through our premium services and features
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
