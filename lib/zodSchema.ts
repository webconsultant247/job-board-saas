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

export const candidateSchema = z.object({
  name: z.string().min(2, "Candidate name is required"),
  about: z
    .string()
    .min(10, "Please provide a brief description about your company"),
  resume: z.string().min(1, "Please upload a resume"),
});

export const jobSchema = z.object({
  title: z.string().min(2, "Job title is required"),
  employmentType: z.string().min(1, "Employment type is required"),
  location: z.string().min(1, "Location is required"),
  salaryFrom: z.number().min(1, "Salary from is required"),
  salaryTo: z.number().min(1, "Salary to is required"),
  description: z.string().min(1, "Job description is required"),
  listingDuration: z.number().min(1, "Listing duration is required"),
  benefits: z.array(z.string()).min(1, "Please provide at least one benefit"),
  companyName: z.string().min(1, "Company name is required"),
  companyLocation: z.string().min(1, "Company location is required"),
  companyAbout: z.string().min(1, "Company about is required"),
  companyLogo: z.string().min(1, "Company logo is required"),
  companyWebsite: z.string().url("Please provide a valid company website URL"),
  companyXAccount: z.string().optional(),
});
