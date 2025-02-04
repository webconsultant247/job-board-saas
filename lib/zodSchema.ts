import { z } from "zod";
export const companySchema = z.object({
  name: z.string().min(2, "Company name is required"),
  location: z.string().min(1, "Location is required"),
  about: z
    .string()
    .min(10, "Please provide a brief description about your company"),
  logo: z.string().min(1, "Please upload a logo for your company"),
  website: z.string().url("Please provide a valid website URL"),
  xAccount: z.string().optional(),
});
