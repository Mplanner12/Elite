import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full bg-white flex flex-col justify-start items-center antialiased">
      <Header />
      <Services />
      <AboutSection />
      <Footer />
    </main>
  );
}
