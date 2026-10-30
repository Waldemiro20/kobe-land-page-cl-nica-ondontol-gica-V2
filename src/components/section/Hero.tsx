import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";


export default function Hero() {


    return (
        <section className="relative w-full aspect-[2048/768]">
            <Image
                src="/images/hero-clinica.png"
                alt="Médico de jaleco no consultório da clínica"
                fill
                priority
                sizes="100vw"
                className="object-cover"
            />

            {/* Mesma posição e proporção do texto que vinha na imagem antiga.
                Tamanhos em vw para manter as medidas do layout (1440px) em qualquer largura */}
            <div className="absolute top-1/2 left-[8.5%] flex -translate-y-1/2 flex-col">
                <Reveal delay={0.1}>
                    <h1 className="text-[4.6vw] leading-[1.15] font-semibold text-primary">
                        Seu sorriso
                        <br />
                        em boas mãos
                    </h1>
                </Reveal>

                <Reveal delay={0.2} className="mt-[1.5vw]">
                    <p className="w-[47.15vw] font-display text-[1.667vw] leading-none font-normal text-[#342C49] opacity-100">
                        Atendimento humanitário, profissionais especializados e estrutura feita para você e sua família
                    </p>
                </Reveal>

                <Reveal delay={0.3} className="mt-[2vw]">
                    <Button href="#agendar">Agendar consulta</Button>
                </Reveal>
            </div>
        </section>
    )
}
