import express, { Request, Response } from "express";
import { noteController } from "./controller";
import { Note } from "@/generated/prisma";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {

  try {
    await noteController.create(req.body as Note);
    res.json({
      status: "OK"
    });
  } catch (error) {
    res.status(500).json({
      error: error
    })
  }
})

export {
  router as notesRouter
}