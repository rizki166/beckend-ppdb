import { Router } from "express";
import {
  getUser,
  getUsers,
  login,
  register,
} from "../controllers/userControllers";

const userRouter = Router();

userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.post("/user", getUser);
userRouter.post("/users", getUsers);
export default userRouter;
