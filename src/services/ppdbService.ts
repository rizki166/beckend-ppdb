import db from "../db/index";
import { IPpdb } from "../types/app";

export const create = async (
  payload: IPpdb,
  files: { [fieldName: string]: Express.Multer.File[] }
) => {
  try {
    const ppdb = await db.ppdb.create({
      data: {
        ...payload,
      },
    });
    
    return ppdb;
  } catch (error) {
    console.error("Error during create:", error);
  }
};

export const getPpdb = async (id: number) => {
  try {
    const ppdb = await db.ppdb.findUnique({
      where: {
        id,
      },
    });
    return ppdb;
  } catch (error) {
    console.log(error);
  }
};

export const getsPpdb = async () => {
  try {
    const ppdb = await db.ppdb.findMany();
    return ppdb;
  } catch (error) {
    console.log(error);
  }
};

export const deletePpdb = async (id: number) => {
  try {
    const ppdb = await db.ppdb.delete({
      where: {
        id,
      },
    });
    return ppdb;
  } catch (error) {
    console.log(error);
  }
};
