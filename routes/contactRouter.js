import express from "express";
import { getAll } from "../controllers/contactsControllers.js";

const contactsRouter = express.Router();

contactsRouter.get("/", getAll);

export default contactsRouter;
