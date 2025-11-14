"use server";

import { auth } from "@/auth";
import { prisma } from "@/prisma";
import { TagSchemaInput } from "@/schemas/tag";
import { Tag } from "@/types/tag";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const getTagsUserAction = async (): Promise<Tag[]> => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const tags = await prisma.tag.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
    select: {
      name: true,
      id: true,
    },
  });

  return tags;
};

export const createTagUserAction = async (data: TagSchemaInput) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  try {
    const newTag = await prisma.tag.create({
      data: {
        name: data.name,
        userId: session.user.id,
      },
    });

    revalidatePath("/dashboard");

    return newTag;
  } catch (error) {
    throw new Error("Error al crear la etiqueta.");
  }
};
