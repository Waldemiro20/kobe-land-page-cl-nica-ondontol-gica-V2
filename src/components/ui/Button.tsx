import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

export default function Button({ href, children, className = "", external = false }: ButtonProps) {
  return (
    <Link
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={`flex h-[51px] w-[257px] items-center justify-center gap-[10px] rounded-[50px] bg-primary px-12 py-3 font-semibold whitespace-nowrap text-white transition-opacity hover:opacity-90 ${className}`}
    >
      {children}
    </Link>
  );
}
