"use client";

import { FC, useState } from "react";
import { tagSchema, TagSchemaInput } from "@/schemas/tag";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/form";
import { Input } from "@/components/shadcn/input";
import { Button } from "@/components/shadcn/button";
import { toast } from "sonner";
import { createTagUserAction } from "@/actions/tag";

interface AddTagProps {
  closeDialog: () => void;
}

export const AddTag: FC<AddTagProps> = ({ closeDialog }) => {
  const form = useForm<TagSchemaInput>({
    resolver: zodResolver(tagSchema),
    defaultValues: {
      name: "",
    },
  });
  const [loading, setLoading] = useState(false);

  function onSubmit(data: TagSchemaInput) {
    setLoading(true);
    toast.promise(createTagUserAction(data), {
      loading: "Creando etiqueta...",
      success: () => {
        closeDialog();
        return "Etiqueta creada correctamente.";
      },
      error: (err) => err.message,
      finally: () => setLoading(false),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-preset-4">Nombre</FormLabel>
              <FormControl>
                <Input
                  placeholder="AI, Machine Learning, Tecnología"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={loading}
          size="lg"
          type="submit"
          className="text-preset-3"
        >
          {loading ? "Creando..." : "Crear"}
        </Button>
      </form>
    </Form>
  );
};
