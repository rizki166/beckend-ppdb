-- CreateTable
CREATE TABLE "Ppdb" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "nisn" TEXT NOT NULL,
    "ttl" TEXT NOT NULL,
    "nik" TEXT NOT NULL,
    "noKK" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "namaAyah" TEXT NOT NULL,
    "tahunLahirAyah" INTEGER NOT NULL,
    "pendidikanAyah" TEXT NOT NULL,
    "pekerjaanAyah" TEXT NOT NULL,
    "namaIbu" TEXT NOT NULL,
    "tahunLahirIbu" INTEGER NOT NULL,
    "pendidikanIbu" TEXT NOT NULL,
    "pekerjaanIbu" TEXT NOT NULL,
    "alamatOrtu" TEXT NOT NULL,
    "noTelp" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ppdb_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ppdb_nisn_key" ON "Ppdb"("nisn");

-- CreateIndex
CREATE UNIQUE INDEX "Ppdb_nik_key" ON "Ppdb"("nik");

-- CreateIndex
CREATE INDEX "Ppdb_nisn_idx" ON "Ppdb"("nisn");

-- CreateIndex
CREATE INDEX "Ppdb_nik_idx" ON "Ppdb"("nik");
