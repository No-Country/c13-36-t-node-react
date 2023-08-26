import "dotenv/config";
import express from "express";
import cors from "express";
import morgan from "morgan";
import { router } from "./routes";
import dbInit from "./db/mongo";

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api", router);

export default app;