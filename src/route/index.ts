import { Router } from "express";
import userRouter from "./userRouter";
import ppdbRouter from "./ppdbRouter";
const router = Router();
router.use("/", userRouter);
router.use("/", ppdbRouter);

export default router;
