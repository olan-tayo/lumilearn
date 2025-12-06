import React from "react";
import Arrow from "../../public/assets/icons/button-arrow.svg";
import Image from "next/image";

export const PrimaryButton = ({
  children,
  disabled = false,
  onClick,
  type,
  form,
  className,
  icon = true,
}: {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  form?: string;
  icon?: boolean;
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      form={form}
      onClick={onClick}
      className={`bg-[linear-gradient(3.06deg,#1C9647_26.39%,#76F1A2_157.92%)] px-5 py-[13px] rounded-[10000px] disabled:opacity-50 outline-0 w-full text-white text-sm font-medium transition cursor-pointer disabled:cursor-not-allowed ${className}`}
    >
      <div className="flex items-center justify-center gap-1.5">
        {children}
        {icon ? <Image src={Arrow} alt="arrow" className="mr-2" /> : null}
      </div>
    </button>
  );
};

export const SecondaryButton = ({
  children,
  disabled = false,
  onClick,
  className,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`border border-primary px-2.5 py-1 rounded-[10000px] outline-0 w-fit text-primary text-sm font-medium hover:bg-primary/10 transition  ${className}`}
    >
      {children}
    </button>
  );
};
