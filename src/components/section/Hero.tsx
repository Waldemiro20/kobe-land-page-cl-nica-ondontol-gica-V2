import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";


export default function Hero() {


    return (
        <section className="relative w-full aspect-[2019/779]">
            <Image
                src="/images/imageHero.png"
                alt="Image Hero"
                fill
                priority
                sizes="100vw"
                className="object-contain object-bottom"
            />
            
            <Reveal className="absolute left-[8.5%] top-[58%]" delay={0.3}>
                <Button href="#agendar">Agendar consulta</Button>
            </Reveal>
        </section>
    )
}
