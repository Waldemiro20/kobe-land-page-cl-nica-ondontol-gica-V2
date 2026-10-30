"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/#sobre", label: "Sobre nós" },
  { href: "/nossasEspecialidade", label: "Especialidades" },
];


function subscribe(callback: () => void) {
  window.addEventListener("hashchange", callback);
  window.addEventListener("popstate", callback);
  
  return () => {
    window.removeEventListener("hashchange", callback);
    window.removeEventListener("popstate", callback);
  };
}

function notifyHashChange() {
  setTimeout(() => window.dispatchEvent(new Event("hashchange")));
}

export default function NavBar() {
  const pathname = usePathname();
  const hash = useSyncExternalStore(subscribe, () => window.location.hash, () => "");

  const isActive = (href: string) => {
    const [path, linkHash = ""] = href.split("#");
    if (path !== pathname) return false;
    if (linkHash) return hash === `#${linkHash}`;

    return !navLinks.some((link) => link.href !== href && link.href === `${path}${hash}`);
  };

  return (
    <motion.header
      className="w-full bg-background"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Logo />

        <nav className="flex items-center gap-8">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={notifyHashChange}
                aria-current={active ? "page" : undefined}
                className={`font-medium transition-colors hover:text-accent ${active ? "text-accent underline decoration-2 underline-offset-8" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Button href="#agendar">Agendar consulta</Button>
        </nav>
      </div>
    </motion.header>
  );
}
