import { auth } from "@/auth";
import { redirect } from "next/navigation";

const requireUser = async () => {
  const session = await auth();

  if (
    !session ||
    !session.user ||
    !session.user.id ||
    !session.user.email ||
    !session.user.name
  ) {
    redirect("/login");
  }

  return {
    id: session.user.id,
    email: session.user.email,
    name: session.user.name,
    // user: session.user,
  };
};

export default requireUser;
