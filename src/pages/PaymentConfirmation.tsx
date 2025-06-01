import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, CreditCard, ArrowLeft, Copy, RefreshCw } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import QRCode from "qrcode";

interface PaymentData {
  name: string;
  email: string;
  phone: string;
  address: string;
  licenseNumber: string;
  paymentMethod: string;
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  cardName?: string;
}

const PaymentConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");
  const [pixCode, setPixCode] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [countdown, setCountdown] = useState(900); // 15 minutos em segundos

  const paymentData = location.state?.paymentData as PaymentData;

  // Se não há dados de pagamento, redireciona para a página de aluguel
  useEffect(() => {
    if (!paymentData) {
      navigate("/rent-vehicle");
      return;
    }

    // Gera o código PIX se for o método selecionado
    if (paymentData.paymentMethod === "pix") {
      generatePixCode();
    }
  }, [paymentData, navigate]);

  // Countdown para expiração do PIX
  useEffect(() => {
    if (paymentData?.paymentMethod === "pix" && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [countdown, paymentData?.paymentMethod]);

  const generatePixCode = async () => {
    // Simula a geração de um código PIX
    const pixPayload = `00020126580014BR.GOV.BCB.PIX0136${Date.now()}5204000053039865802BR5925DriveEasy Aluguel de Veic6009SAO PAULO62140510RENT${Date.now()}6304`;
    setPixCode(pixPayload);

    try {
      const qrUrl = await QRCode.toDataURL(pixPayload, {
        width: 256,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });
      setQrCodeUrl(qrUrl);
    } catch (error) {
      console.error("Erro ao gerar QR Code:", error);
    }
  };

  const copyPixCode = () => {
    navigator.clipboard.writeText(pixCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getPaymentMethodLabel = (method: string) => {
    switch (method) {
      case "credit-card":
        return "Cartão de Crédito";
      case "debit-card":
        return "Cartão de Débito";
      case "pix":
        return "PIX";
      default:
        return method;
    }
  };

  if (!paymentData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      
      <div className="pt-16">
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Pedido Confirmado!
              </h1>
              <p className="text-xl text-gray-600">
                Seu aluguel foi processado com sucesso
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Detalhes do Pedido */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="h-5 w-5 text-brand-blue" />
                    <span>Detalhes do Pedido</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">Dados Pessoais</h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p><strong>Nome:</strong> {paymentData.name}</p>
                      <p><strong>Email:</strong> {paymentData.email}</p>
                      <p><strong>Telefone:</strong> {paymentData.phone}</p>
                      <p><strong>CNH:</strong> {paymentData.licenseNumber}</p>
                      <p><strong>Endereço:</strong> {paymentData.address}</p>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-gray-900">Pagamento</h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p><strong>Método:</strong> {getPaymentMethodLabel(paymentData.paymentMethod)}</p>
                      {paymentData.cardNumber && (
                        <p><strong>Cartão:</strong> **** **** **** {paymentData.cardNumber.slice(-4)}</p>
                      )}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-gray-900">Valor Total</h3>
                    <p className="text-2xl font-bold text-brand-blue">R$ 150,00</p>
                    <p className="text-sm text-gray-600">Taxa de processamento inclusa</p>
                  </div>
                </CardContent>
              </Card>

              {/* PIX Payment */}
              {paymentData.paymentMethod === "pix" && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Pagamento PIX</span>
                      <span className="text-lg font-mono text-red-600">
                        {formatTime(countdown)}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {qrCodeUrl && (
                      <div className="text-center">
                        <img 
                          src={qrCodeUrl} 
                          alt="QR Code PIX" 
                          className="mx-auto border-2 border-gray-200 rounded-lg"
                        />
                        <p className="text-sm text-gray-600 mt-2">
                          Escaneie o QR Code com seu app do banco
                        </p>
                      </div>
                    )}

                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Código PIX (Copia e Cola)
                        </label>
                        <div className="flex space-x-2">
                          <input
                            type="text"
                            value={pixCode}
                            readOnly
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-xs font-mono"
                          />
                          <Button
                            onClick={copyPixCode}
                            variant="outline"
                            size="sm"
                            className={copied ? "bg-green-50 border-green-300" : ""}
                          >
                            <Copy className="h-4 w-4" />
                            {copied ? "Copiado!" : "Copiar"}
                          </Button>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Como pagar:</h4>
                        <ol className="text-sm text-blue-800 space-y-1">
                          <li>1. Abra o app do seu banco</li>
                          <li>2. Acesse a área PIX</li>
                          <li>3. Escaneie o QR Code ou cole o código</li>
                          <li>4. Confirme o pagamento</li>
                        </ol>
                      </div>

                      <Button
                        onClick={generatePixCode}
                        variant="outline"
                        className="w-full"
                      >
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Gerar Novo Código
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Cartão Payment */}
              {(paymentData.paymentMethod === "credit-card" || paymentData.paymentMethod === "debit-card") && (
                <Card>
                  <CardHeader>
                    <CardTitle>Status do Pagamento</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Pagamento Aprovado!
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Seu pagamento foi processado com sucesso
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-green-800">
                        Você receberá um email de confirmação em breve com todos os detalhes do seu aluguel.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/rent-vehicle")}
                variant="outline"
                className="flex items-center"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Fazer Novo Aluguel
              </Button>
              <Button
                onClick={() => navigate("/")}
                className="bg-brand-blue hover:bg-blue-700"
              >
                Voltar ao Início
              </Button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default PaymentConfirmation;