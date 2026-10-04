import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import PhoneButton from "@/components/ui/PhoneButton";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { directionsHref, mapEmbedSrc } from "@/lib/contact";

const footerLinks = [
  { href: "/nossasEspecialidade", label: "Especialidades" },
  { href: "/#sobre", label: "Sobre nós" },
  { href: "/#localizacao", label: "Localização" },
];

export default function Footer() {
  return (
    <footer className="mt-auto w-full bg-black/20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-12 md:grid-cols-3">
        <Reveal className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Localização</h2>
          <div className="aspect-video w-full overflow-hidden rounded-[17px]">
            <iframe
              title="Mapa da clínica no rodapé"
              src={mapEmbedSrc}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href={directionsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm opacity-80 underline-offset-4 hover:underline"
          >
            Abrir no Google Maps
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <nav className="flex flex-col items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="opacity-80 transition-colors hover:text-accent hover:opacity-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </Reveal>

        <Reveal delay={0.2} className="flex flex-col items-center gap-6">
          <WhatsAppButton />
          <PhoneButton />
        </Reveal>
      </div>

      <p className="border-t border-foreground/10 py-4 text-center text-sm opacity-60">
        © {new Date().getFullYear()} Sua Clínica. Todos os direitos reservados.
      </p>
    </footer>
  );
}
