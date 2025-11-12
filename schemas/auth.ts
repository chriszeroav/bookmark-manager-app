import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Email inválido"),
  password: z.string().min(6, "Minimo 6 caracteres"),
});

export type LoginSchemaInput = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  name: z.string().min(2, "Minimo 2 caracteres"),
  email: z.email("Email inválido"),
  password: z.string().min(6, "Minimo 6 caracteres"),
});

export type RegisterSchemaInput = z.infer<typeof registerSchema>;
