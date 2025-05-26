
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, Car, Users, Fuel, Settings } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const SearchModels = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    priceRange: "",
    fuelType: "",
    transmission: ""
  });

  const cars = [
    {
      id: 1,
      name: "Toyota Corolla",
      category: "Sedan",
      price: "R$ 120/dia",
      image: "/placeholder.svg",
      features: ["5 lugares", "Automático", "Flex", "Ar-condicionado"]
    },
    {
      id: 2,
      name: "Honda Civic",
      category: "Sedan",
      price: "R$ 140/dia",
      image: "/placeholder.svg",
      features: ["5 lugares", "Automático", "Flex", "Ar-condicionado"]
    },
    {
      id: 3,
      name: "Volkswagen Gol",
      category: "Hatch",
      price: "R$ 80/dia",
      image: "/placeholder.svg",
      features: ["5 lugares", "Manual", "Flex", "Ar-condicionado"]
    },
    {
      id: 4,
      name: "Chevrolet Tracker",
      category: "SUV",
      price: "R$ 180/dia",
      image: "/placeholder.svg",
      features: ["5 lugares", "Automático", "Flex", "4x4"]
    },
    {
      id: 5,
      name: "Renault Kwid",
      category: "Hatch",
      price: "R$ 70/dia",
      image: "/placeholder.svg",
      features: ["5 lugares", "Manual", "Flex", "Direção elétrica"]
    },
    {
      id: 6,
      name: "Ford EcoSport",
      category: "SUV",
      price: "R$ 160/dia",
      image: "/placeholder.svg",
      features: ["5 lugares", "Manual", "Flex", "4x2"]
    }
  ];

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters({
      ...filters,
      [filterType]: value
    });
  };

  const filteredCars = cars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !filters.category || car.category === filters.category;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      
      <div className="pt-16">
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Buscar Modelos
              </h1>
              <p className="text-xl text-gray-600">
                Encontre o carro perfeito para a sua viagem
              </p>
            </div>

            {/* Barra de Busca e Filtros */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Busca */}
                  <div className="space-y-2">
                    <Label htmlFor="search">Buscar por modelo ou categoria</Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="search"
                        type="text"
                        placeholder="Ex: Toyota, SUV, Sedan..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Filtros */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <Label>Categoria</Label>
                      <select
                        value={filters.category}
                        onChange={(e) => handleFilterChange("category", e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      >
                        <option value="">Todas</option>
                        <option value="Hatch">Hatch</option>
                        <option value="Sedan">Sedan</option>
                        <option value="SUV">SUV</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label>Preço</Label>
                      <select
                        value={filters.priceRange}
                        onChange={(e) => handleFilterChange("priceRange", e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      >
                        <option value="">Qualquer</option>
                        <option value="low">Até R$ 100</option>
                        <option value="medium">R$ 100 - R$ 150</option>
                        <option value="high">Acima R$ 150</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label>Combustível</Label>
                      <select
                        value={filters.fuelType}
                        onChange={(e) => handleFilterChange("fuelType", e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      >
                        <option value="">Qualquer</option>
                        <option value="flex">Flex</option>
                        <option value="gasoline">Gasolina</option>
                        <option value="diesel">Diesel</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label>Câmbio</Label>
                      <select
                        value={filters.transmission}
                        onChange={(e) => handleFilterChange("transmission", e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      >
                        <option value="">Qualquer</option>
                        <option value="manual">Manual</option>
                        <option value="automatic">Automático</option>
                      </select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Resultados */}
            <div className="mb-6">
              <p className="text-gray-600">
                {filteredCars.length} veículo(s) encontrado(s)
              </p>
            </div>

            {/* Lista de Carros */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCars.map((car) => (
                <Card key={car.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{car.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">{car.category}</p>
                      <p className="text-2xl font-bold text-brand-blue">{car.price}</p>
                    </div>

                    <div className="space-y-2 mb-6">
                      {car.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <Button className="w-full bg-brand-blue hover:bg-blue-700">
                        Ver Detalhes
                      </Button>
                      <Button variant="outline" className="w-full">
                        Alugar Agora
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredCars.length === 0 && (
              <div className="text-center py-12">
                <Car className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Nenhum veículo encontrado
                </h3>
                <p className="text-gray-600">
                  Tente ajustar os filtros de busca para encontrar mais opções
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default SearchModels;
