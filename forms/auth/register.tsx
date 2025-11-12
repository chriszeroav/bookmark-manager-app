"use client";

import { FC } from "react";
import { registerSchema, RegisterSchemaInput } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";

import { Input } from "@/components/shadcn/input";
import { Button } from "@/components/shadcn/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/form";
import Link from "next/link";
import { toast } from "sonner";
import { registerAction } from "@/actions/auth";
import { useRouter } from "next/navigation";

interface RegisterProps {}

export const Register: FC<RegisterProps> = () => {
  const form = useForm<RegisterSchemaInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  function onSubmit(data: RegisterSchemaInput) {
    toast.promise(registerAction(data), {
      loading: "Creando tu cuenta...",
      success: () => {
        router.push("/login");
        return "Redirigiendo al inicio de sesión...";
      },
      error: (err) => err.message,
    });
  }

  return (
    <Card className="w-full max-w-md">
      <div className="px-8">
        <img src="/logo-light-theme.svg" alt="Login Image" />
      </div>
      <CardHeader>
        <CardTitle className="text-preset-1">Crea tu cuenta</CardTitle>
        <CardDescription className="text-preset-4--medium">
          Únete a nosotros y comienza a guardar tus enlaces favoritos:
          organizados, buscables y siempre al alcance.
        </CardDescription>
      </CardHeader>
      <CardContent>
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
                    <Input placeholder="Juan Pérez" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-preset-4">Correo</FormLabel>
                  <FormControl>
                    <Input placeholder="correo@ejemplo.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-preset-4">Contraseña</FormLabel>
                  <FormControl>
                    <Input placeholder="********" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button size="lg" type="submit" className="text-preset-3">
              Crear cuenta
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="justify-center">
        <p className="text-preset-4--medium text-app-neutral-800">
          ¿Ya tienes una cuenta?{" "}
          <Link className="text-preset-4 text-app-neutral-900" href="/login">
            Iniciar sesión
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};
