import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import { ArchiveIcon, HomeLineIcon } from "@/components/icons";
import { buttonVariants } from "@/components/shadcn/button";

interface MenuProps {
  className?: string;
}

export const Menu: FC<MenuProps> = ({ className }) => {
  return (
    <aside
      className={cn(
        "flex flex-col gap-4 w-[296px]",
        "border-r border-app-neutral-300",
        "bg-app-neutral-0",
        className
      )}
    >
      <header className="px-5 pt-5 pb-2.5">
        <img src="/logo-light-theme.svg" alt="Logo" />
      </header>

      <div className="flex flex-col gap-4 px-4 pb-5">
        {/* LINKS */}
        <section className="flex flex-col gap-1">
          <Link
            href="/dashboard"
            className={buttonVariants({
              variant: "nav",
              className: "justify-start",
            })}
          >
            <HomeLineIcon className="size-5" />
            <span className="text-preset-3">Inicio</span>
          </Link>
          <Link
            href="/dashboard/archivados"
            className={buttonVariants({
              variant: "nav",
              className: "justify-start",
            })}
          >
            <ArchiveIcon className="size-5" />
            <span className="text-preset-3">Archivados</span>
          </Link>
        </section>

        {/* TAGS */}
        <section></section>
      </div>
    </aside>
  );
};
