import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import Specialties from "@/components/section/Specialties";

export const metadata: Metadata = {
  title: "Nossas especialidades",
};

export default function Page() {
  return (
    <div>
      <NavBar />
      <Specialties />
      <Footer />
    </div>
  )
}
