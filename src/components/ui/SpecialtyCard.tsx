import type { ReactNode } from "react";

type SpecialtyCardProps = {
  name: string;
  icon?: ReactNode;
};

function ToothIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-12 w-12 fill-none stroke-current" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5.5C10.5 4 8.5 3.5 7 3.5 4.5 3.5 3 5.5 3 8c0 2.5 1 4 1.5 6 .5 2.5 1 6.5 3 6.5 1.5 0 1.8-2 2.2-3.8.3-1.4.8-2.2 2.3-2.2s2 .8 2.3 2.2c.4 1.8.7 3.8 2.2 3.8 2 0 2.5-4 3-6.5.5-2 1.5-3.5 1.5-6 0-2.5-1.5-4.5-4-4.5-1.5 0-3.5.5-5 2Z" />
    </svg>
  );
}

export default function SpecialtyCard({ name, icon = <ToothIcon /> }: SpecialtyCardProps) {
  return (
    <article className="flex h-[340px] w-[240px] flex-col items-center justify-center gap-[90px] rounded-[37px] border border-brand bg-background pt-[89px] pr-[30px] pb-[89px] pl-[29px] text-center text-brand opacity-100 transition-colors hover:bg-[#E2E6F0]">
      {icon}
      <h3 className="text-xl font-semibold">{name}</h3>
    </article>
  );
}
