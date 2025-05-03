import { Note } from "@/generated/prisma";
import { prisma } from "@/utils/prisma/client";

async function create(note: Note) {
  const result = await prisma.note.create({
    data: note
  });

  return result;
}

export const noteController = {
  create: create
}