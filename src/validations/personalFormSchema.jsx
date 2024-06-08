import { z } from "zod";

export const PersonalSchema = z.object({
  fatherName: z.string().min(1, { message: "Father name is required" }),
  fatherEmail: z.string(),
  fatherMobile: z.string(),
  fatherOccupation: z.string(),
  motherName: z.string().min(1, { message: "Mother name is required" }),
  motherEmail: z.string(),
  motherMobile: z.string(),
  motherOccupation: z.string(),
});
