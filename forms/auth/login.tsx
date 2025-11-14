"use client";

import { FC } from "react";
import { loginSchema, LoginSchemaInput } from "@/schemas/auth";
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
import { Separator } from "@/components/shadcn/separator";
import { authClient } from "@/auth-client";
import Link from "next/link";
import { toast } from "sonner";
import { loginAction } from "@/actions/auth";
import { useRouter } from "next/navigation";

interface LoginProps {}

export const Login: FC<LoginProps> = () => {
  const form = useForm<LoginSchemaInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  function onSubmit(data: LoginSchemaInput) {
    toast.promise(loginAction(data), {
      loading: "Iniciando sesión...",
      success: () => {
        router.push("/dashboard");
        return "Redirigiendo al panel...";
      },
      error: (err) => err.message,
    });
  }

  const handleLoginWithGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
    });
  };

  return (
    <Card className="w-full max-w-md">
      <div className="px-8">
        <img src="/logo-light-theme.svg" alt="Login Image" />
      </div>
      <CardHeader>
        <CardTitle className="text-preset-1">
          Inicia sesión en tu cuenta
        </CardTitle>
        <CardDescription className="text-preset-4--medium">
          ¡Bienvenido de nuevo! Por favor ingresa tus datos.
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
              Iniciar sesión
            </Button>

            <Separator />

            <Button
              size="lg"
              type="button"
              variant="outline"
              className="text-preset-3"
              onClick={handleLoginWithGoogle}
            >
              Iniciar sesión con Google
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="justify-center">
        <p className="text-preset-4--medium text-app-neutral-800">
          ¿No tienes una cuenta?{" "}
          <Link className="text-preset-4 text-app-neutral-900" href="/register">
            Regístrate
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};
