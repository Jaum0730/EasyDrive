
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, User, Phone, Mail, MapPin, Car } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const RentVehicle = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    licenseNumber: "",
    paymentMethod: "credit-card",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePaymentMethodChange = (method: string) => {
    setFormData({
      ...formData,
      paymentMethod: method
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados do aluguel:", formData);
    alert("Aluguel confirmado! Obrigado por escolher a DriveEasy.");
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      
      <div className="pt-16">
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Alugar Veículo
              </h1>
              <p className="text-xl text-gray-600">
                Complete os dados para finalizar o seu aluguel
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Dados Pessoais */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-brand-blue" />
                    <span>Dados Pessoais</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="licenseNumber">Número da CNH</Label>
                    <Input
                      id="licenseNumber"
                      name="licenseNumber"
                      type="text"
                      placeholder="12345678901"
                      value={formData.licenseNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">Endereço</Label>
                    <Input
                      id="address"
                      name="address"
                      type="text"
                      placeholder="Rua, número, bairro, cidade"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Método de Pagamento */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="h-5 w-5 text-brand-blue" />
                    <span>Método de Pagamento</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button
                      type="button"
                      onClick={() => handlePaymentMethodChange("credit-card")}
                      className={`p-4 border-2 rounded-lg text-center transition-colors ${
                        formData.paymentMethod === "credit-card"
                          ? "border-brand-blue bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <CreditCard className="h-6 w-6 mx-auto mb-2" />
                      <span>Cartão de Crédito</span>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => handlePaymentMethodChange("debit-card")}
                      className={`p-4 border-2 rounded-lg text-center transition-colors ${
                        formData.paymentMethod === "debit-card"
                          ? "border-brand-blue bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <CreditCard className="h-6 w-6 mx-auto mb-2" />
                      <span>Cartão de Débito</span>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => handlePaymentMethodChange("pix")}
                      className={`p-4 border-2 rounded-lg text-center transition-colors ${
                        formData.paymentMethod === "pix"
                          ? "border-brand-blue bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <span className="text-2xl block mb-1">💳</span>
                      <span>PIX</span>
                    </button>
                  </div>

                  {(formData.paymentMethod === "credit-card" || formData.paymentMethod === "debit-card") && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="cardNumber">Número do Cartão</Label>
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="cardName">Nome no Cartão</Label>
                        <Input
                          id="cardName"
                          name="cardName"
                          type="text"
                          placeholder="Nome conforme no cartão"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="expiryDate">Validade</Label>
                        <Input
                          id="expiryDate"
                          name="expiryDate"
                          type="text"
                          placeholder="MM/AA"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          name="cvv"
                          type="text"
                          placeholder="123"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  )}

                  {formData.paymentMethod === "pix" && (
                    <div className="text-center p-6 bg-gray-50 rounded-lg">
                      <p className="text-gray-600 mb-4">
                        Após confirmar o aluguel, você receberá o código PIX para pagamento
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-brand-blue hover:bg-blue-700 text-white h-14 text-lg font-semibold"
              >
                <Car className="mr-2 h-5 w-5" />
                Confirmar Aluguel
              </Button>
            </form>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default RentVehicle;
