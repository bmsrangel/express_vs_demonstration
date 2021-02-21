import express from "express";
import router from "./src/routes";

const app = express();

app.use("/api", router);

app.listen(3001, () => {
  console.log("Aplicação rodando na porta 3001");
});
