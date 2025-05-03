const PORT = process.env.PORT || 3000;

import express, { Request, Response } from "express";
import { notesRouter } from "./modules/notes/route";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({
    service: "try-k8s-web-server",
    status: "OK",
    meta: {
      working_dir: process.cwd(),
      pid: process.pid
    }
  });
})

app.use("/notes", notesRouter);

app.listen(PORT, () => {
  console.log(`Service is listening on port ${PORT}`);
});