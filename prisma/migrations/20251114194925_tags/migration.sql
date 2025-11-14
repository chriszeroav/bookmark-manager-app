-- CreateTable
CREATE TABLE "tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tag_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "tag_userId_idx" ON "tag"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "tag_userId_name_key" ON "tag"("userId", "name");

-- AddForeignKey
ALTER TABLE "tag" ADD CONSTRAINT "tag_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
