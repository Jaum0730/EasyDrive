
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Fuel, Zap, Star } from "lucide-react";

const cars = [
  {
    id: 1,
    name: "BMW 3 Series",
    category: "Luxury",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 89,
    rating: 4.9,
    features: {
      passengers: 5,
      fuel: "Petrol",
      transmission: "Automatic"
    }
  },
  {
    id: 2,
    name: "Tesla Model 3",
    category: "Electric",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 95,
    rating: 4.8,
    features: {
      passengers: 5,
      fuel: "Electric",
      transmission: "Automatic"
    }
  },
  {
    id: 3,
    name: "Honda Civic",
    category: "Economy",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 45,
    rating: 4.7,
    features: {
      passengers: 5,
      fuel: "Petrol",
      transmission: "Manual"
    }
  },
  {
    id: 4,
    name: "Mercedes C-Class",
    category: "Luxury",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 120,
    rating: 4.9,
    features: {
      passengers: 5,
      fuel: "Petrol",
      transmission: "Automatic"
    }
  },
  {
    id: 5,
    name: "Toyota Prius",
    category: "Hybrid",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 55,
    rating: 4.6,
    features: {
      passengers: 5,
      fuel: "Hybrid",
      transmission: "Automatic"
    }
  },
  {
    id: 6,
    name: "Ford Mustang",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 150,
    rating: 4.8,
    features: {
      passengers: 4,
      fuel: "Petrol",
      transmission: "Manual"
    }
  }
];

export const FeaturedCars = () => {
  return (
    <section id="cars" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Featured Fleet
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully selected range of vehicles, from economy cars to luxury sedans and sports cars
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <Card key={car.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className={`absolute top-4 left-4 ${
                  car.category === 'Luxury' ? 'bg-purple-600' :
                  car.category === 'Electric' ? 'bg-green-600' :
                  car.category === 'Sports' ? 'bg-red-600' :
                  car.category === 'Hybrid' ? 'bg-blue-600' :
                  'bg-gray-600'
                }`}>
                  {car.category}
                </Badge>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{car.rating}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{car.name}</h3>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{car.features.passengers}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {car.features.fuel === 'Electric' ? 
                        <Zap className="h-4 w-4" /> : 
                        <Fuel className="h-4 w-4" />
                      }
                      <span>{car.features.fuel}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-brand-blue">${car.price}</span>
                    <span className="text-gray-600">/day</span>
                  </div>
                  <Button className="bg-brand-blue hover:bg-blue-700">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
            View All Cars
          </Button>
        </div>
      </div>
    </section>
  );
};
