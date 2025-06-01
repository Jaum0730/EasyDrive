/*import { storage } from "@/services/firebaseconfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Array de URLs de imagens de exemplo para cada carro
const carImages = {
  "bmw-3-series": [
    "https://images.unsplash.com/photo-1555215695-3004980ad54e",
    "https://images.unsplash.com/photo-1555215695-3004980ad54e",
    "https://images.unsplash.com/photo-1555215695-3004980ad54e"
  ],
  "tesla-model-3": [
    "https://images.unsplash.com/photo-1560958089-b8a1929cea89",
    "https://images.unsplash.com/photo-1560958089-b8a1929cea89",
    "https://images.unsplash.com/photo-1560958089-b8a1929cea89"
  ],
  // Adicione mais carros conforme necessário
};

const uploadImages = async () => {
  try {
    // Para cada carro no objeto carImages
    for (const [carId, images] of Object.entries(carImages)) {
      const uploadedUrls = [];
      
      // Upload de cada imagem
      for (const imageUrl of images) {
        try {
          // Buscar a imagem
          const response = await fetch(imageUrl);
          const blob = await response.blob();
          
          // Criar nome único para o arquivo
          const fileName = `${carId}-${Date.now()}.jpg`;
          const storageRef = ref(storage, `cars/${carId}/${fileName}`);
          
          // Upload para o Firebase Storage
          await uploadBytes(storageRef, blob);
          
          // Obter URL de download
          const downloadURL = await getDownloadURL(storageRef);
          uploadedUrls.push(downloadURL);
          
          console.log(`Imagem enviada com sucesso para ${carId}: ${downloadURL}`);
        } catch (error) {
          console.error(`Erro ao fazer upload da imagem para ${carId}:`, error);
        }
      }
      
      console.log(`Upload concluído para ${carId} com ${uploadedUrls.length} imagens`);
    }
    
    console.log("Processo de upload concluído!");
  } catch (error) {
    console.error("Erro durante o processo de upload:", error);
  }
};

// Executar o script
uploadImages(); 
*/