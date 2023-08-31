import express from "express";
import cors from "cors";
import morgan from "morgan";
import { router } from "./routes";
import fileUpload from "express-fileupload";

const app = express();

/* MIDDLEWARES */
app.use(morgan("dev"));
const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./upload",
  })
);

app.use(router);

export default app;
