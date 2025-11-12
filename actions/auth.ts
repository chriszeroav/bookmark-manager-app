"use server";

import { auth } from "@/auth";
import { LoginSchemaInput, RegisterSchemaInput } from "@/schemas/auth";
import { APIError } from "better-auth";
import { headers } from "next/headers";

export const loginAction = async (values: LoginSchemaInput) => {
  try {
    await auth.api.signInEmail({
      body: {
        ...values,
      },
    });
  } catch (error) {
    if (error instanceof APIError) {
      if (error.body?.code === "INVALID_EMAIL_OR_PASSWORD") {
        throw new Error("Credenciales inválidas");
      }
      throw new Error("Error desconocido");
    }
  }
};

export const registerAction = async (values: RegisterSchemaInput) => {
  try {
    await auth.api.signUpEmail({
      body: {
        ...values,
      },
    });
  } catch (error) {
    if (error instanceof APIError) {
      console.log(error.body);
      if (error.body?.code === "USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL") {
        throw new Error("El correo electrónico ya está en uso");
      }
      throw new Error("Error desconocido");
    }
  }
};

export const logoutAction = async () => {
  await auth.api.signOut({ headers: await headers() });
};
