import { hasCompletedOnboarding } from "@/actions";
import OnboardingForm from "@/components/forms/onboarding/OnboardingForm";
import { redirect } from "next/navigation";

const OnboardingPage = async () => {
  const hasOnboarded = await hasCompletedOnboarding();
  if (hasOnboarded) {
    return redirect("/");
  }

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center py-10">
      <OnboardingForm />
    </div>
  );
};

export default OnboardingPage;
