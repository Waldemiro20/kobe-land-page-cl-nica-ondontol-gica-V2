"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

// Desliga as animações de movimento para quem ativou "reduzir movimento" no sistema
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
