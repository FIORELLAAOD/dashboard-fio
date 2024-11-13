
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { auth } from '@clerk/nextjs/server';

const f = createUploadthing();

const handleAuth = () => {
  const { userId } = auth();
  console.log("UserId:", userId);  // Log para verificar
  if (!userId) throw new Error("Unauthorized");
  return { userId };
};

export const ourFileRouter = {
  profileImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {
      console.log("Upload complete");  // Log para confirmar que se completa
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
