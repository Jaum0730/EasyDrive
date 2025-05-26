
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BookingForm } from "@/components/BookingForm";
import { FeaturedCars } from "@/components/FeaturedCars";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <Hero />
      <BookingForm />
      <FeaturedCars />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
