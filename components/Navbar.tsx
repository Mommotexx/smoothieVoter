import { SignedIn, SignedOut, UserProfile } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between py-3 md:px-6">
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
        <UserProfile />
      </SignedIn>
    </nav>
  );
};

export default Navbar;
