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
          className={`${
            isMenuOpen
              ? "block lg:block absolute lg:relative z-90 "
              : "hidden lg:block relative"
          } w-[200px] lg:w-[300px] min-h-screen overflow-hidden bg-white`}
        >
          <Sidebar setIsMenuOpen={setIsMenuOpen} />
        </div>

        {/*--------- CHILDREN ---------- */}
        <div className=" relative w-full">
          <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <div className="overflow-y-auto h-full lg:max-h-[90vh]">
            <div className="p-5 ">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
