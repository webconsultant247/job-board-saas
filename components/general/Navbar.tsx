import { auth, signOut } from "@/auth";
import ThemeToggle from "@/components/general/ThemeToggle";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
  const session = await auth();

  return (
    <nav className="flex items-center justify-between py-5">
      <Link href="/" className="flex gap-2 items-center">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <h1 className="font-bold text-2xl">
          Job
          <span className="text-primary">Board</span>
        </h1>
      </Link>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        {session?.user ? (
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            <Button>Log Out</Button>
          </form>
        ) : (
          <Link
            href="/login"
            className={buttonVariants({ variant: "default" })}
          >
            Log In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
