import { Request, Response } from "express";
import * as userService from "../services/userService";

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const token = await userService.login(username, password);
    res.json({
      status: true,
      message: "Login Success",
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await userService.register(username, password);
    res.json({
      status: true,
      message: "Register Success",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userService.getUser(Number(id));
    res.json({
      status: true,
      message: "Get User Success",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getUsers();
    res.json({
      status: true,
      message: "Get Users Success",
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};
