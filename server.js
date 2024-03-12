import express from "express";
import morgan from "morgan";

const app = express();
app.use(morgan("dev"));
app.use("/", (req, res, next) => {
  res.status(200).json({ message: "ok" });
});
app.listen(3000, () => {
  console.log("Start server on port 3000");
});
