import ThemeToggle from "@/components/general/ThemeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
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
        <Button>Login</Button>
      </div>
    </nav>
  );
};

export default Navbar;
