import Navbar from "@/components/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="flex w-full md:w-4/5 flex-col mx-auto">{children}</main>
    </>
  );
};

export default Layout;
