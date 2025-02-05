import { auth, signOut } from "@/auth";
import ThemeToggle from "@/components/general/ThemeToggle";
import UserDropdown from "@/components/general/UserDropdown";
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

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-5">
        <ThemeToggle />
        <Link className={buttonVariants()} href="/post-job">
          Post Job
        </Link>
        {session?.user ? (
          <UserDropdown
            name={session.user.name as string}
            image={session.user.image as string}
            email={session.user.email as string}
          />
        ) : (
          <Link className={buttonVariants()} href="/login">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
