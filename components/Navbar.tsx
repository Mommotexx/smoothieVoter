import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { NAV_BAR_LINKS } from "@/app/constants/navbar";

const Navbar = () => {
  return (
    <nav className="mb-5 flex flex-row items-center justify-between border-b py-3 md:px-6">
      <Link href="/">
        <Image
          src={"/assets/images/smoothie.svg"}
          alt="smoothie logo"
          width={50}
          height={50}
        />
      </Link>
      <SignedOut>
        <Button>
          <Link href={"/sign-in"}>Log In</Link>
        </Button>
      </SignedOut>
      <SignedIn>
        <div className="flex items-center gap-6">
          <ul className="flex gap-6">
            {NAV_BAR_LINKS.map((link) => (
              <li key={link.name}>
                <Link className="hover:text-gray-400" href={link.path}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <UserButton afterSignOutUrl="/" />
        </div>
      </SignedIn>
    </nav>
  );
};

export default Navbar;
