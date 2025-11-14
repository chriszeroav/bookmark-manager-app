import { FC } from "react";
import { Button } from "@/components/shadcn/button";
import { PlusIcon } from "@/components/icons";

interface AddBookmarkProps {}

export const AddBookmark: FC<AddBookmarkProps> = () => {
  return (
    <Button size="lg" className="gap-1 w-[200px]">
      <PlusIcon className="size-5" />
      <span className="text-preset-3">Añadir marcador</span>
    </Button>
  );
};
