"use client";

import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function SidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex w-full gap-0.5 ">
        {/*--------- SIDEBAR ---------- */}
        <div
          className={`fixed z-100 inset-y-0 left-0 lg:static  w-[300px] min-h-screen bg-white transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <Sidebar setIsMenuOpen={setIsMenuOpen} />
        </div>

        {/*--------- CHILDREN ---------- */}
        <div className=" relative w-full">
          <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <div className="overflow-y-auto h-full lg:max-h-[90vh] mt-16 lg:mt-0">
            <div className="p-5 ">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
