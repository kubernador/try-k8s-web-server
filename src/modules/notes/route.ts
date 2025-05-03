import express, { Request, Response } from "express";
import { noteController } from "./controller";
import { Note } from "@/generated/prisma";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  res.json({
    data: await noteController.getAll()
  })
});

router.post("/", async (req: Request, res: Response) => {
  console.log("req.body:", req.body);

  try {
    console.log(req.body);

    await noteController.create(req.body as Note);
    res.json({
      status: "OK"
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: error
    })
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // Perform your deletion logic here using the 'id'
  
    await noteController.remove(parseInt(id as string));
  
    res.send(`Deleted item with id: ${id}`);
  } catch (error) {
    console.log(req.params.id);

    res.status(500).json({
      error: error
    })
  }
});


export {
  router as notesRouter
}