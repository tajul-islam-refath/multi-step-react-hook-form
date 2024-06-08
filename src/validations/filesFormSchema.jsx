import { z } from "zod";

export const FilesSchema = z.object({
  profileImage: z
    .custom()
    .refine((file) => file?.type?.startsWith("image/"), {
      message: "Only image files are allowed.",
    })
    .refine((file) => !file || (!!file && file.size <= 1 * 1024 * 1024), {
      message: "The profile picture must be a maximum of 1MB.",
    }),
});
