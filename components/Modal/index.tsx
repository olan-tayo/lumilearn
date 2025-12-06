"use client";

import { PrimaryButton } from "../Buttons";
import Image from "next/image";
import celebration from "../../public/assets/images/congrats.svg";
import { TCart } from "@/types/cart";
import { useCartStore } from "@/store/cart/cart";
import { useRouter } from "next/navigation";

const Modal = ({ isOpen }: { isOpen: boolean }) => {
  const router = useRouter();
  const { resetState } = useCartStore() as TCart;
  return (
    <div
      className={`${
        isOpen
          ? "fixed inset-0 flex items-center justify-center z-100 opacity-[30px] bg-[#0000003D] backdrop-blur-sm "
          : "hidden"
      } `}
    >
      <div className="bg-white w-[471px] h-[461px] rounded-lg flex flex-col justify-center items-center p-6 gap-5">
        <div className="mb-2">
          <Image
            src={celebration}
            alt="celebration icon"
            width={115}
            height={115}
            className="w-[115px] h-[115px]"
          />
        </div>
        <h2 className="font-semibold text-lg md:text-xl lg:text-2xl text-text-primary">
          Payment Successful
        </h2>
        <p className="text-secondary-text text-sm md:text-base text-center max-w-[341px]">
          Payment confirmation has been sent to your email. You can view payment
          receipt in transaction history
        </p>
        <div className="px-4 w-full mt-2">
          <PrimaryButton
            onClick={() => {
              resetState();
              router.push("/discover");
            }}
            icon={false}
            className="cursor-pointer"
          >
            Proceed to dashboard
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Modal;
