import { carService } from "@/services/carService";
import { sampleCars } from "@/data/sampleCars";

const addSampleCars = async () => {
  try {
    console.log("Iniciando adição de carros de exemplo...");
    
    for (const car of sampleCars) {
      try {
        const result = await carService.addCar(car);
        console.log(`Carro adicionado com sucesso: ${result.name}`);
      } catch (error) {
        console.error(`Erro ao adicionar carro ${car.name}:`, error);
      }
    }
    
    console.log("Processo de adição de carros concluído!");
  } catch (error) {
    console.error("Erro durante o processo de adição de carros:", error);
  }
};

// Executar o script
addSampleCars(); 