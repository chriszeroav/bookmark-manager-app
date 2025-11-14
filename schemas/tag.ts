import { z } from "zod";

export const tagSchema = z.object({
  name: z.string().min(2, "Minimo 2 caracteres"),
});

export type TagSchemaInput = z.infer<typeof tagSchema>;
