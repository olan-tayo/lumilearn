"use client";

import Image from "next/image";
import notification from "../../public/assets/icons/notification.svg";
import ArrowDown from "../../public/assets/icons/arrow-down.svg";

const Nav = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}) => {
  return (
    <div className="">
      <div className="h-[65px] bg-white flex fixed lg:sticky z-90 top-0 md:left-0 w-full pl-3 lg:pl-0 justify-between lg:justify-end items-center">
        {/* -------HAMBURGER ICON------ */}
        <div className="block lg:hidden">
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-3 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="24"
              height="24"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </div>
        </div>

        {/* -------USER's DETAILS------ */}
        <div className=" flex justify-end items-center gap-2 px-6 cursor-pointer">
          {/* -------NOTIFICATION------ */}
          <div className="">
            <Image
              src={notification}
              alt="notification"
              width={24}
              height={24}
            />
          </div>

          {/* -------INITIALS------ */}
          <div className="flex justify-center items-center bg-avatar w-9 h-9 rounded-full">
            <p className="text-lg font-[inter] tracking-[0.2px] text-white">
              O
            </p>
          </div>

          {/* -------ARROWS------ */}
          <div className="flex gap-2 items-start">
            <div className="hidden md:block">
              <p className="font-medium text-sm text-text-primary">
                Oluwatobiloba. D
              </p>
              <div className="bg-pending-background-badge px-2 py-0.5 rounded-[19px] w-fit">
                <p className="font-medium text-[11px] tracking-[-0.2px] text-pending-badge">
                  Pending
                </p>
              </div>
            </div>
            <div className="pt-1">
              <Image src={ArrowDown} alt="arrow down" width={14} height={14} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
