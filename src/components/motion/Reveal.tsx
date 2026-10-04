"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  scale?: number;
  ease?: "easeOut" | "easeInOut" | "backOut";
  // Levanta o elemento no hover, como os cards do teclat.com.br
  liftOnHover?: boolean;
};

// Animação de entrada ao rolar, baseada no teclat.com.br:
// o elemento aparece uma única vez quando chega a 100px de entrar na tela
export default function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.8,
  x = 0,
  y = 30,
  scale = 1,
  ease,
  liftOnHover = false,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y, scale }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      whileHover={liftOnHover ? { y: -8 } : undefined}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
