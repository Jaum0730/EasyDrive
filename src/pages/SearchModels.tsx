import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Search, Filter, Car, Users, Fuel, Settings } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { db } from "@/services/firebaseconfig";
import { collection, getDocs } from "firebase/firestore";
import { useToast } from "@/hooks/use-toast";

const SearchModels = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    priceRange: "",
    fuelType: "",
    transmission: ""
  });
  const [cars, setCars] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const carsRef = collection(db, "Cars");
        const querySnapshot = await getDocs(carsRef);
        const carsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCars(carsData);
      } catch (error) {
        console.error("Erro ao buscar carros:", error);
        toast({
          title: "Erro",
          description: "Não foi possível carregar os carros. Tente novamente.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchCars();
  }, [toast]);

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
    const matchesPrice = !filters.priceRange || (() => {
      const price = parseFloat(car.price.replace(/[^0-9]/g, ''));
      switch (filters.priceRange) {
        case 'low': return price <= 100;
        case 'medium': return price > 100 && price <= 150;
        case 'high': return price > 150;
        default: return true;
      }
    })();
    const matchesFuel = !filters.fuelType || car.features.includes(filters.fuelType);
    const matchesTransmission = !filters.transmission || car.features.includes(filters.transmission);
    
    return matchesSearch && matchesCategory && matchesPrice && matchesFuel && matchesTransmission;
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white font-inter">
        <Header />
        <div className="pt-16 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <Car className="h-16 w-16 text-gray-400 mx-auto mb-4 animate-spin" />
            <p className="text-gray-600">Carregando carros...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

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
                        <option value="Flex">Flex</option>
                        <option value="Gasolina">Gasolina</option>
                        <option value="Diesel">Diesel</option>
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
                        <option value="Manual">Manual</option>
                        <option value="Automático">Automático</option>
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
                      src={car.image || "/placeholder.svg"}
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
                      {car.features.map((feature: string, index: number) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full bg-brand-blue hover:bg-blue-700">
                            Ver Detalhes
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold">{car.name}</DialogTitle>
                          </DialogHeader>
                          
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Carrossel de Imagens */}
                            <div className="space-y-4">
                              <Carousel className="w-full">
                                <CarouselContent>
                                  {(car.images || [car.image]).map((image: string, index: number) => (
                                    <CarouselItem key={index}>
                                      <div className="aspect-video">
                                        <img
                                          src={image || "/placeholder.svg"}
                                          alt={`${car.name} - Imagem ${index + 1}`}
                                          className="w-full h-full object-cover rounded-lg"
                                        />
                                      </div>
                                    </CarouselItem>
                                  ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                              </Carousel>
                            </div>

                            {/* Informações do Veículo */}
                            <div className="space-y-6">
                              <div>
                                <h3 className="text-lg font-semibold mb-2">Categoria</h3>
                                <p className="text-gray-600">{car.category}</p>
                              </div>

                              <div>
                                <h3 className="text-lg font-semibold mb-2">Preço</h3>
                                <p className="text-3xl font-bold text-brand-blue">{car.price}</p>
                              </div>

                              <div>
                                <h3 className="text-lg font-semibold mb-2">Características</h3>
                                <div className="space-y-2">
                                  {car.features.map((feature: string, index: number) => (
                                    <div key={index} className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                                      <span className="text-gray-600">{feature}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h3 className="text-lg font-semibold mb-2">Descrição</h3>
                                <p className="text-gray-600 leading-relaxed">{car.description}</p>
                              </div>

                              <Link to="/rent-vehicle" className="block">
                                <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
                                  Alugar Agora
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      
                      <Link to="/rent-vehicle">
                        <Button variant="outline" className="w-full">
                          Alugar Agora
                        </Button>
                      </Link>
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
