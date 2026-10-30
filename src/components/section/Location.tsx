import Reveal from "@/components/motion/Reveal";
import { mapEmbedSrc } from "@/lib/contact";

export default function Location() {
    return (
        <section
            id="localizacao"
            className="w-full bg-[#086D87]"
        >
            <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 pt-[75px] pb-[80px] md:px-12 lg:px-20">

                {/* Título */}
                <Reveal className="w-full">
                    <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                        Localização com Google Maps
                    </h2>
                </Reveal>

                {/* Mapa do Google Maps */}
                <Reveal
                    y={50}
                    delay={0.2}
                    className="w-full max-w-[1100px]"
                >
                    <div className="h-[350px] w-full overflow-hidden rounded-[25px] bg-white shadow-[0_25px_70px_-25px_rgba(0,0,0,0.5)] md:h-[400px] lg:h-[450px] lg:rounded-[37px]">

                        <iframe
                            title="Mapa com a localização da clínica"
                            src={mapEmbedSrc}
                            className="h-full w-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        />

                    </div>
                </Reveal>

            </div>
        </section>
    );
}