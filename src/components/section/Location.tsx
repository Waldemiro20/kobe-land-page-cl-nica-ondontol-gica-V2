import Reveal from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";
import { directionsHref, mapEmbedSrc } from "@/lib/contact";

export default function Location() {
    return (
        <section id="localizacao" className="w-full">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <Reveal>
                    <h2 className="text-3xl font-bold">Nossa localização</h2>
                </Reveal>
                <Reveal delay={0.3}>
                    <p className="mt-2 opacity-80">
                        Endereço da sua clínica
                    </p>
                </Reveal>

                <Reveal y={50} delay={0.4} className="mt-8 aspect-video w-full overflow-hidden rounded-3xl">
                    <iframe
                        title="Clínica Odontológica(Nome da clínica) - Localização"
                        src={mapEmbedSrc}
                        className="h-full w-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    />
                </Reveal>

                <Reveal y={20} duration={0.6} delay={0.5} className="mt-8">
                    <Button href={directionsHref} external>
                        Venha até nós
                    </Button>
                </Reveal>
            </div>
        </section>
    );
}
