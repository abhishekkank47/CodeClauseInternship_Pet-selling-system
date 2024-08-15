import express from "express";
import { configDotenv } from "dotenv";
import {DBconnection} from "./database/Database.js";


configDotenv();
DBconnection();

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("<h1>Backend</h1>");
});

app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
