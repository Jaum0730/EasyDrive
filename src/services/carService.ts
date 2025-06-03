import { db } from "@/services/firebaseconfig";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

interface Car {
  id?: number;
  name: string;
  category: string;
  features: string[];
  price: string;
  image?: string;
  images?: string[];
  description?: string;
}

export const carService = {
  // Adicionar um novo carro
  async addCar(carData: Car) {
    try {
      const carsRef = collection(db, "Cars");
      const docRef = await addDoc(carsRef, {
        ...carData,
        createdAt: new Date().toISOString()
      });
      return { id: docRef.id, ...carData };
    } catch (error) {
      console.error("Erro ao adicionar carro:", error);
      throw error;
    }
  },

  // Buscar todos os carros
  async getAllCars() {
    try {
      const carsRef = collection(db, "Cars");
      const querySnapshot = await getDocs(carsRef);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error("Erro ao buscar carros:", error);
      throw error;
    }
  },

  // Atualizar um carro existente
  async updateCar(carId: string, carData: Partial<Car>) {
    try {
      const carRef = doc(db, "Cars", carId);
      await updateDoc(carRef, {
        ...carData,
        updatedAt: new Date().toISOString()
      });
      return { id: carId, ...carData };
    } catch (error) {
      console.error("Erro ao atualizar carro:", error);
      throw error;
    }
  },

  // Deletar um carro
  async deleteCar(carId: string) {
    try {
      const carRef = doc(db, "Cars", carId);
      await deleteDoc(carRef);
      return carId;
    } catch (error) {
      console.error("Erro ao deletar carro:", error);
      throw error;
    }
  }
}; 