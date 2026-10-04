import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-10 w-10 fill-current">
        <path d="M9 2h6v7h7v6h-7v7H9v-7H2V9h7z" />
      </svg>
      <div className="flex flex-col leading-tight">
        <span className="text-xl font-bold">Sua Clínica</span>
        <span className="text-sm opacity-80">Saúde em dia</span>
      </div>
    </Link>
  );
}
