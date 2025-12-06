"use client";

import Image from "next/image";
import React from "react";
import Logo from "@/public/assets/images/Logo.svg";
import DiscoverIcon from "@/public/assets/icons/discover.svg";
import DiscoverActiveIcon from "@/public/assets/icons/discover-active.svg";
import CartIcon from "@/public/assets/icons/cart.svg";
import CartActiveIcon from "@/public/assets/icons/cart-active.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useCartStore } from "@/store/cart/cart";
import { TCart } from "@/types/cart";

const Sidebar = ({
  setIsMenuOpen,
}: {
  setIsMenuOpen: (value: boolean) => void;
}) => {
  const location = usePathname();
  const { cart } = useCartStore() as TCart;

  const menuItems = [
    {
      id: 1,
      name: "Discover",
      link: ["/discover"],
      icon: DiscoverIcon,
      activeIcon: DiscoverActiveIcon,
    },
    {
      id: 2,
      name: "Cart",
      link: ["/cart", "/cart/checkout"],
      icon: CartIcon,
      activeIcon: CartActiveIcon,
    },
  ];

  return (
    <div className="py-[22px] px-5 relative w-full">
      <div className="mb-10 flex justify-between  items-center">
        <Image src={Logo} alt="Logo" width={120} height={40} />

        {/* ----CANCEL ICON */}
        <div className="block lg:hidden" onClick={() => setIsMenuOpen(false)}>
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
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </div>

      {/* ----MENU ITEMS */}
      <div className="flex flex-col gap-4">
        {menuItems.map((item) => {
          return (
            <Link
              onClick={() => setIsMenuOpen(false)}
              href={item.link[0]}
              key={item.id}
            >
              <div
                className={`${
                  item.link.find((route: string) => location.includes(route))
                    ? "bg-background-secondary text-primary font-medium"
                    : " text-secondary-text font-normal"
                } h-11 rounded-lg  flex gap-3 items-center px-3  text-sm cursor-pointer hover:bg-background-secondary transition-all`}
              >
                <Image
                  src={
                    item.link.find((route: string) => location.includes(route))
                      ? item.activeIcon
                      : item.icon
                  }
                  alt={item.name}
                  width={24}
                  height={24}
                />
                <div className="flex gap-2">
                  <p>{item.name}</p>
                  {item.name === "Cart" && (
                    <div className="bg-primary w-5 h-5 rounded-full flex justify-center items-center text-white text-xs">
                      {cart?.length || 0}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
