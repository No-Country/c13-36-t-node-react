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

const PORT = process.env.PORT || 3001;

app.use("/api", router);

dbInit().then();
app.listen(PORT, () => console.log(`Server listening at ${PORT}`));
