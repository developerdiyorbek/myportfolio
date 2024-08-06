"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const HamburgerMenu = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="flex md:hidden">
        <Button
          size={"icon"}
          variant={"ghost"}
          onClick={() => setIsOpen(true)}
          aria-label="hamburgermenu"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetTitle></SheetTitle>
        <SheetDescription></SheetDescription>
        <Link href={"/"} aria-label="to-main-page">
          <h1 className="text-3xl md:text-4xl">Diyorbek</h1>
        </Link>
        <Separator className="my-3" />
        <div className="flex flex-col space-y-2">
          {navLinks.map((nav) => (
            <Link
              href={nav.route}
              key={nav.name}
              className={`hover:bg-blue-400/20 py-[6px] px-3 cursor-pointer rounded transition-colors flex items-center gap-2 ${
                pathname === nav.route && "text-blue-400 bg-blue-400/20"
              }`}
            >
              <nav.icon className="w-5 h-5" />
              {nav.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default HamburgerMenu;
