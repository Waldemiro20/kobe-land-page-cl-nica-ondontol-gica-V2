
import Reveal from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";
import { directionsHref, mapEmbedSrc } from "@/lib/contact";

export default function Location() {
    return (
        <section id="localizacao" className="w-full">
            <div className="mx-auto max-w-7xl px-6 py-16">
                {/* Título */}
                <Reveal>
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                        Nossa localização
                    </h2>
                </Reveal>

                {/* Descrição */}
                <Reveal delay={0.3}>
                    <p className="mt-2 max-w-xl text-base leading-7 opacity-70">
                        Encontre nossa clínica e veja como chegar facilmente.
                    </p>
                </Reveal>

                {/* Mapa */}
                <Reveal
                    y={50}
                    delay={0.4}
                    className="mt-8"
                >
                    <div className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-2 shadow-[0_25px_70px_-25px_rgba(0,0,0,0.35)] dark:border-white/10 dark:bg-white/5">
                        {/* Borda interna */}
                        <div className="pointer-events-none absolute inset-0 z-10 rounded-[2rem] ring-1 ring-inset ring-white/30" />

                        {/* Área do mapa */}
                        <div className="aspect-[16/8] overflow-hidden rounded-[1.5rem]">
                            <iframe
                                title="Clínica Odontológica - Localização"
                                src={mapEmbedSrc}
                                className="h-full w-full border-0 transition-transform duration-700 group-hover:scale-[1.01]"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </Reveal>

                {/* Botão */}
                <Reveal
                    y={20}
                    duration={0.6}
                    delay={0.5}
                    className="mt-8"
                >
                    <Button href={directionsHref} external>
                        Venha até nós
                    </Button>
                </Reveal>
            </div>
        </section>
    );
}

