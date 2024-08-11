import { Router } from "express";
import {
  createPpdb,
  deletePpdb,
  getAllPpdb,
  getPpdb,
} from "../controllers/ppdbController";

const ppdbRouter = Router();

ppdbRouter.post("/ppdb", createPpdb);
ppdbRouter.get("/ppdb/:id", getPpdb);
ppdbRouter.get("/ppdb", getAllPpdb);
ppdbRouter.delete("/ppdb/:id", deletePpdb);
export default ppdbRouter;
