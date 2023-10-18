-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'COMPLETE', 'CANCELED');

-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'PENDING';
