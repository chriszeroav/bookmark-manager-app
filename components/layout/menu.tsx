import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import { ArchiveIcon, HomeLineIcon } from "@/components/icons";
import { buttonVariants } from "@/components/shadcn/button";
import { AddTag } from "@/components/layout/add-tag";
import { Tags } from "@/components/layout/tags";

interface MenuProps {
  className?: string;
}

export const Menu: FC<MenuProps> = async ({ className }) => {
  return (
    <aside
      className={cn(
        "flex flex-col gap-4 w-[296px]",
        "border-r border-app-neutral-300 dark:border-app-neutral-dark-500",
        "bg-app-neutral-0 dark:bg-app-neutral-dark-800",
        className
      )}
    >
      <header className="px-5 pt-5 pb-2.5">
        <img
          className="block dark:hidden"
          src="/logo-light-theme.svg"
          alt="Logo"
        />
        <img
          className="hidden dark:block"
          src="/logo-dark-theme.svg"
          alt="Logo"
        />
      </header>

      <div className="flex flex-col gap-4 px-4 pb-5">
        {/* LINKS */}
        <section className="flex flex-col gap-1">
          <Link
            href="/dashboard"
            className={buttonVariants({
              variant: "ghost",
              className: "justify-start",
            })}
          >
            <HomeLineIcon className="size-5" />
            <span className="text-preset-3">Inicio</span>
          </Link>
          <Link
            href="/dashboard/archivados"
            className={buttonVariants({
              variant: "ghost",
              className: "justify-start",
            })}
          >
            <ArchiveIcon className="size-5" />
            <span className="text-preset-3">Archivados</span>
          </Link>
        </section>

        {/* TAGS */}
        <section className="flex flex-col gap-3">
          <header className="flex items-center justify-between px-3 pb-1">
            <p className="text-preset-4--medium text-app-neutral-800 dark:text-app-neutral-dark-100">
              Etiquetas
            </p>
            <AddTag />
          </header>
          <Tags />
        </section>
      </div>
    </aside>
  );
};
