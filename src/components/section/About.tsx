import Image from "next/image";
import Reveal from "@/components/motion/Reveal";

export default function About() {
    return (
        <section id="sobre" className="w-full">
            <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-12 px-6 py-16 opacity-100 lg:min-h-[410px] lg:flex-row lg:gap-[137px] lg:pr-0 lg:pl-[89px]">
                <Reveal x={-100} y={0} duration={1} ease="easeOut" className="flex w-full flex-col gap-[36px] opacity-100 lg:min-h-[235px] lg:w-[485px] lg:shrink-0">
                    <h2 className="text-center text-3xl font-bold">Sobre nós</h2>
                    <p className="text-center font-display text-[20px] leading-tight font-normal opacity-80">
                        Lorem ipsum dolor sit amet. Et facilis unde eos debitis suscipit qui molestias
                        sunt aut quos officiis ut sapiente praesentium. Qui commodi veritatis vel delectus
                        fugit eum fugiat sunt ad nostrum nihil id fuga asperiores ab sunt fugit est
                        voluptas perferendis.
                    </p>
                </Reveal>

                <Reveal x={50} y={0} delay={0.2} className="relative aspect-[729/410] w-full max-w-[729px] overflow-hidden rounded-[37px] opacity-100 lg:min-w-0 lg:flex-1">
                    <Image
                        src="/images/Image-sobre-nos.png"
                        alt="Corredor da clínica com leitos e portas azuis"
                        fill
                        sizes="(min-width: 1024px) 729px, 100vw"
                        className="object-cover"
                    />
                </Reveal>
            </div>
        </section>
    );
}
