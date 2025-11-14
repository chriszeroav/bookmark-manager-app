"use client";

import { FC, useState } from "react";
import { Button } from "@/components/shadcn/button";
import { EllipsisIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn/dialog";
import { AddTag as AddTagForm } from "@/forms/tag/add-tag";
import { PlusIcon } from "../icons";

interface AddTagProps {}

export const AddTag: FC<AddTagProps> = () => {
  const [open, setOpen] = useState(false);

  const closeDialog = () => setOpen(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="mini" variant="ghost">
          <PlusIcon className="size-5" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Añadir etiqueta</DialogTitle>
          <DialogDescription>
            Aquí puedes añadir una nueva etiqueta a tu proyecto.
          </DialogDescription>
        </DialogHeader>
        <AddTagForm closeDialog={closeDialog} />
      </DialogContent>
    </Dialog>
  );
};
