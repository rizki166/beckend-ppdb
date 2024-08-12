export type AuthMiddlewareData = {
  id: string;
};

export interface IPpdb {
  nama: string;
  nisn: string;
  ttl: string;
  nik: string;
  noKK: string;
  alamat: string;
  namaAyah: string;
  tahunLahirAyah: number;
  pendidikanAyah: string;
  pekerjaanAyah: string;
  namaIbu: string;
  tahunLahirIbu: number;
  pendidikanIbu: string;
  pekerjaanIbu: string;
  alamatOrtu: string;
  image: string;
  noTelp: string;
}
