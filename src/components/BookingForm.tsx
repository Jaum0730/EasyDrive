import { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { MapPin, Calendar as CalendarIcon, Clock, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const cities = [
  "São Paulo",
  "Rio de Janeiro",
  "Belo Horizonte",
  "Brasília",
  "Salvador",
  "Fortaleza",
  "Curitiba",
  "Recife",
  "Porto Alegre",
  "Manaus",
  "Belém",
  "Goiânia",
  "Guarulhos",
  "Campinas",
  "São Luís",
  "Maceió",
  "Natal",
  "João Pessoa",
  "Florianópolis",
  "Vitória"
];

const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
  "20:00", "20:30", "21:00"
];

export const BookingForm = () => {
  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: undefined as Date | undefined,
    dropoffDate: undefined as Date | undefined,
    pickupTime: "",
    dropoffTime: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking form submitted:", {
      ...formData,
      pickupDate: formData.pickupDate?.toISOString(),
      dropoffDate: formData.dropoffDate?.toISOString()
    });
    // Handle form submission logic here
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-xl border-0 bg-white">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold text-gray-900">
              Alugue Seu Carro Perfeito
            </CardTitle>
            <p className="text-gray-600 mt-2">Encontre e reserve seu veículo ideal em poucos cliques</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Pickup Location */}
                <div className="space-y-2">
                  <Label className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-brand-blue" />
                    <span>Local de Retirada</span>
                  </Label>
                  <Select value={formData.pickupLocation} onValueChange={(value) => setFormData({...formData, pickupLocation: value})}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Selecione a cidade de retirada" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Dropoff Location */}
                <div className="space-y-2">
                  <Label className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-brand-orange" />
                    <span>Local de Devolução</span>
                  </Label>
                  <Select value={formData.dropoffLocation} onValueChange={(value) => setFormData({...formData, dropoffLocation: value})}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Selecione a cidade de devolução" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Pickup Date */}
                <div className="space-y-2">
                  <Label className="flex items-center space-x-2">
                    <CalendarIcon className="h-4 w-4 text-brand-blue" />
                    <span>Data de Retirada</span>
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "h-12 w-full justify-start text-left font-normal",
                          !formData.pickupDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.pickupDate ? format(formData.pickupDate, "PPP", { locale: ptBR }) : <span>Selecione uma data</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={formData.pickupDate}
                        onSelect={(date) => setFormData({...formData, pickupDate: date})}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className="pointer-events-auto"
                        locale={ptBR}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Dropoff Date */}
                <div className="space-y-2">
                  <Label className="flex items-center space-x-2">
                    <CalendarIcon className="h-4 w-4 text-brand-orange" />
                    <span>Data de Devolução</span>
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "h-12 w-full justify-start text-left font-normal",
                          !formData.dropoffDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.dropoffDate ? format(formData.dropoffDate, "PPP", { locale: ptBR }) : <span>Selecione uma data</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={formData.dropoffDate}
                        onSelect={(date) => setFormData({...formData, dropoffDate: date})}
                        disabled={(date) => date < (formData.pickupDate || new Date())}
                        initialFocus
                        className="pointer-events-auto"
                        locale={ptBR}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Pickup Time */}
                <div className="space-y-2">
                  <Label className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-brand-blue" />
                    <span>Horário de Retirada</span>
                  </Label>
                  <Select value={formData.pickupTime} onValueChange={(value) => setFormData({...formData, pickupTime: value})}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Selecione o horário de retirada" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Dropoff Time */}
                <div className="space-y-2">
                  <Label className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-brand-orange" />
                    <span>Horário de Devolução</span>
                  </Label>
                  <Select value={formData.dropoffTime} onValueChange={(value) => setFormData({...formData, dropoffTime: value})}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Selecione o horário de devolução" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-brand-blue hover:bg-blue-700 text-white h-14 text-lg font-semibold"
              >
                <Search className="mr-2 h-5 w-5" />
                Buscar Carros Disponíveis
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
