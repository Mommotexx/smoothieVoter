import Navbar from "@/components/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex w-full flex-col items-center md:w-4/5">
        {children}
      </main>
    </>
  );
};

export default Layout;
