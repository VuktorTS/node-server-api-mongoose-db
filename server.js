import express from "express";
import morgan from "morgan";
import cors from "cors";
import contactsRouter from "./routes/contactRouter.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/contacts", contactsRouter);

app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(3000, () => {
  console.log("Start server on port 3000");
});
