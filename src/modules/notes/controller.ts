import { Note } from "@/generated/prisma";
import { prisma } from "@/utils/prisma/client";

async function create(note: Note) {
  console.log("note:", note)
  const result = await prisma.note.create({
    data: note
  });

  return result;
}

async function getAll() {
  const result = await prisma.note.findMany();

  return result;
}

async function remove(id: number) {
  const result = await prisma.note.delete({
    where: {
      id
    }
  });

  return result; 
}

export const noteController = {
  create,
  getAll,
  remove
}