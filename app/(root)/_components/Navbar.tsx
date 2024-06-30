"use client";

import ModeToggle from "@/components/shared/modeToggle";
import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="backdrop-blur-sm z-50 fixed inset-0 border-b bg-background h-[10vh]">
      <div className="container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"}>
          <h1 className="text-3xl md:text-4xl">Diyorbek</h1>
        </Link>

        {/* NavLinks */}
        <nav className="gap-2 hidden md:flex">
          {navLinks.map((nav) => (
            <Link
              href={nav.route}
              key={nav.name}
              className={`hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded transition-colors ${
                pathname === nav.route && "text-blue-400 bg-blue-400/20"
              }`}
            >
              {nav.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ModeToggle />
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
