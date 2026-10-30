import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import About from "@/components/section/About";
import Hero from "@/components/section/Hero";
import Location from "@/components/section/Location";
import Specialties from "@/components/section/Specialties";

export default function Page() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Location />
      <Specialties limit={8} showSeeMore />
      <About />
      <Footer />
    </div>
  )
}
