import { Response, Request } from "express";
import * as ppdbService from "../services/ppdbService";

export const createPpdb = async (req: Request, res: Response) => {
  try {
    const { body } = req;

    const ppdb = await ppdbService.create(body);

    res.json({
      status: true,
      message: "Create Success",
      data: ppdb,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getPpdb = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const ppdb = await ppdbService.getPpdb(+id);
    res.json({
      status: true,
      message: "Get Success",
      data: ppdb,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getAllPpdb = async (req: Request, res: Response) => {
  try {
    const ppdb = await ppdbService.getsPpdb();
    res.json({
      status: true,
      message: "Get Success",
      data: ppdb,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deletePpdb = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const ppdb = await ppdbService.deletePpdb(+id);
    res.json({
      status: true,
      message: "Delete Success",
      data: ppdb,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: false,
      message: "Internal Server Error",
    });
  }
};
