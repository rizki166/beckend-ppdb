import db from "../db/index";
import { IPpdb } from "../types/app";

export const create = async (payload: IPpdb, files: Express.Multer.File) => {
  try {
    console.log("files", files);

    if (files) {
      payload.image = files.filename as string;
    }
    console.log("payload ", payload.pekerjaanAyah);
    console.log("payload ", payload.pekerjaanIbu);
    console.log("payload ", payload.image);
    console.log("payload ", payload);

    const ppdb = await db.ppdb.create({
      data: {
        nama: payload.nama,
        nisn: payload.nisn,
        ttl: payload.ttl,
        nik: payload.nik,
        noKK: payload.noKK,
        alamat: payload.alamat,
        namaAyah: payload.namaAyah,
        tahunLahirAyah: Number(payload.tahunLahirAyah),
        pendidikanAyah: payload.pendidikanAyah,
        pekerjaanAyah: payload.pekerjaanAyah,
        namaIbu: payload.namaIbu,
        tahunLahirIbu: Number(payload.tahunLahirIbu),
        pendidikanIbu: payload.pendidikanIbu,
        pekerjaanIbu: payload.pekerjaanIbu,
        alamatOrtu: payload.alamatOrtu,
        image: payload.image,
        noTelp: payload.noTelp,
      },
    });
    console.log(ppdb, "ppob ser");
    return ppdb;
  } catch (error) {
    console.error("Error during create:", error);
  }
};

export const getPpdb = async (id: number) => {
  try {
    const ppdb = await db.ppdb.findUnique({
      where: { id },
    });
    return ppdb;
  } catch (error) {
    console.error("Error fetching PPDB:", error);
  }
};

export const getsPpdb = async () => {
  try {
    const ppdb = await db.ppdb.findMany();
    return ppdb;
  } catch (error) {
    console.error("Error fetching all PPDB:", error);
  }
};

export const deletePpdb = async (id: number) => {
  try {
    const ppdb = await db.ppdb.delete({
      where: { id },
    });
    return ppdb;
  } catch (error) {
    console.error("Error deleting PPDB:", error);
  }
};
