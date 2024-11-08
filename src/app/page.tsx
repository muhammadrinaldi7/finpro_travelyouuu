import { Header } from "@/components/header/Index";
import AboutSection from "./pages/LandingPage/AboutSection";
import HeroSection from "./pages/LandingPage/HeroSection";
import ProductPage from "./pages/LandingPage/ProductSection";


export default function Home() {
  return (
    <>
    <Header/>
    <HeroSection />
    <AboutSection />
    <ProductPage />
    </>
  );
}
