"use server";

import { aj } from "@/lib/arcjet";
import { prisma } from "@/lib/db";
import requireUser from "@/lib/requireUser";
import { candidateSchema, companySchema, jobSchema } from "@/lib/zodSchema";
import { request } from "@arcjet/next";
import { redirect } from "next/navigation";
import { z } from "zod";

export const createCandidate = async (
  data: z.infer<typeof candidateSchema>
) => {
  const user = await requireUser();
  const req = await request();
  const decision = await aj.protect(req);
  if (decision.isDenied()) {
    throw new Error("FORBIDDEN ACTION");
  }

  const validateData = candidateSchema.parse(data);

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      onBoardingCompleted: true,
      userType: "CANDIDATE",
      Candidate: {
        create: { ...validateData },
      },
    },
  });

  return redirect("/");
};

export const createCompany = async (data: z.infer<typeof companySchema>) => {
  const user = await requireUser();

  const req = await request();
  const decision = await aj.protect(req);
  if (decision.isDenied()) {
    throw new Error("FORBIDDEN ACTION");
  }
  const validateData = companySchema.parse(data);

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      onBoardingCompleted: true,
      userType: "COMPANY",
      Company: {
        create: { ...validateData },
      },
    },
  });

  return redirect("/");
};

export const hasCompletedOnboarding = async () => {
  const sessionUser = await requireUser();
  const user = await prisma.user.findUnique({
    where: { id: sessionUser.id },
    select: { onBoardingCompleted: true },
  });
  return user?.onBoardingCompleted;
};

export const getCompany = async (userId: string) => {
  const data = await prisma.company.findUnique({
    where: {
      userId,
    },
    select: {
      id: true,
      name: true,
      location: true,
      about: true,
      logo: true,
      xAccount: true,
      website: true,
    },
  });

  if (!data) return redirect("/");

  return data;
};

export const createJob = async (data: z.infer<typeof jobSchema>) => {
  const user = await requireUser();
  const req = await request();
  const decision = await aj.protect(req);
  if (decision.isDenied()) {
    throw new Error("FORBIDDEN ACTION");
  }

  const jobData = jobSchema.parse(data);

  const company = await prisma.company.findUnique({
    where: {
      userId: user.id,
    },
    select: {
      id: true,
    },
  });

  if (!company?.id) return redirect("/");

  await prisma.job.create({
    data: {
      title: jobData.location,
      description: jobData.description,
      employmentType: jobData.employmentType,
      location: jobData.location,
      salaryFrom: jobData.salaryFrom,
      salaryTo: jobData.salaryTo,
      listingDuration: jobData.listingDuration,
      benefits: jobData.benefits,
      companyId: company.id,
    },
  });

  return redirect("/");
};
