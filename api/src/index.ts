import express from "express";
import mongoose from "mongoose";
import { router } from "./router";
import path from "node:path";

mongoose
  .connect("mongodb://127.0.0.1:27017")
  .then(() => {
    const app = express();
    const port = 3002;

    app.use(
      "/uploads",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
    app.use(express.json());
    app.use(router);

    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  })
  .catch((e) => console.log("Não foi possível conectar", e));
