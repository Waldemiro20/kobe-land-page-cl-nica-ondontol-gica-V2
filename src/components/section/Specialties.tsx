import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import PhoneButton from "@/components/ui/PhoneButton";
import SpecialtyCard from "@/components/ui/SpecialtyCard";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

// Por enquanto as especialidades são placeholders
export const specialties = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: "Lorem",
}));

type SpecialtiesProps = {
  limit?: number;
  showSeeMore?: boolean;
};

export default function Specialties({ limit, showSeeMore = false }: SpecialtiesProps) {
  const items = limit ? specialties.slice(0, limit) : specialties;

  return (
    <section id="especialidades" className="w-full">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between gap-4">
          <Reveal>
            <h2 className="text-3xl font-bold">Nossas especialidades</h2>
          </Reveal>
          {showSeeMore && (
            <Reveal y={0} scale={0.8} duration={0.6} delay={0.2}>
              <Link
              href="/nossasEspecialidade"
              className="font-medium underline-offset-4 transition-opacity hover:underline hover:opacity-80"
            >
                Ver mais &rarr;
              </Link>
            </Reveal>
          )}
        </div>

        <div className="mt-8 grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((specialty, i) => (
            // Atraso escalonado por coluna para cada linha de cards entrar em cascata
            <Reveal key={specialty.id} y={50} duration={0.6} delay={0.5 + 0.15 * (i % 4)} liftOnHover>
              <SpecialtyCard name={specialty.name} />
            </Reveal>
          ))}
        </div>

        <Reveal y={20} duration={0.6} delay={0.5} className="mt-12 flex flex-col items-center justify-center gap-8 md:flex-row">
          <WhatsAppButton />
          <PhoneButton />
        </Reveal>
      </div>
    </section>
  );
}
