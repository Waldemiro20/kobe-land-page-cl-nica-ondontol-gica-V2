import Image from "next/image";
import Reveal from "@/components/motion/Reveal";

export default function About() {
    return (
        <section id="sobre" className="w-full">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-16 lg:flex-row">
                <Reveal x={-100} y={0} duration={1} ease="easeOut" className="flex-1">
                    <h2 className="text-3xl font-bold">Sobre nós</h2>
                    <p className="mt-6 leading-relaxed opacity-80">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="mt-4 leading-relaxed opacity-80">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                    </p>
                </Reveal>

                <Reveal x={50} y={0} delay={0.2} className="relative aspect-[729/410] w-full max-w-[729px] shrink-0 overflow-hidden rounded-[37px]">
                    <Image
                        src="/images/sobre-nos.svg"
                        alt="Ilustração de um dente sorridente ao lado de uma escova de dentes"
                        fill
                        sizes="(min-width: 1024px) 729px, 100vw"
                        className="object-cover"
                    />
                </Reveal>
            </div>
        </section>
    );
}
