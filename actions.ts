"use server";

import { prisma } from "@/lib/db";
import requireUser from "@/lib/requireUser";
import { candidateSchema, companySchema } from "@/lib/zodSchema";
import { redirect } from "next/navigation";
import { z } from "zod";

export const createCandidate = async (
  data: z.infer<typeof candidateSchema>
) => {
  const user = await requireUser();
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
