"use client";

import { PrimaryButton } from "../Buttons";
import { useCartStore } from "@/store/cart/cart";
import { TCart } from "@/types/cart";
import { TCoursesResponse } from "@/types/courses";
import { usePathname, useRouter } from "next/navigation";

const OrderSummary = ({ isFormValid }: { isFormValid?: boolean }) => {
  const router = useRouter();
  const location = usePathname();
  const { cart } = useCartStore() as TCart;

  const totalPrice =
    cart?.reduce(
      (total, course: TCoursesResponse) => total + (course.price || 0),
      0
    ) || 0;

  return (
    <div className="">
      <h2 className="font-semibold text-xl tracking-[-0.2px] text-text-primary pb-4">
        Order Summary
      </h2>

      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center w-full">
          <p className="text-sm text-text-primary tracking-[-0.2px] font-normal">
            {cart?.length} courses
          </p>
          <p className="text-sm text-text-primary tracking-[-0.2px] font-normal">
            ₦{totalPrice.toLocaleString()}
          </p>
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="text-sm text-text-primary tracking-[-0.2px] font-bold">
            Total
          </p>
          <p className="text-sm text-text-primary tracking-[-0.2px] font-bold">
            ₦{totalPrice.toLocaleString()}
          </p>
        </div>
      </div>

      <PrimaryButton
        className="mt-6"
        type={location == "/cart/checkout" ? "submit" : "button"}
        form={location == "/cart/checkout" ? "card-payment-form" : ""}
        disabled={location == "/cart/checkout" ? !isFormValid : false}
        onClick={
          location !== "/cart/checkout"
            ? () => router.push("/cart/checkout")
            : undefined
        }
        icon={location == "/cart/checkout" ? false : true}
      >
        {location == "/cart/checkout"
          ? `Pay ₦${totalPrice.toLocaleString()}}`
          : "Proceed to Checkout"}
      </PrimaryButton>
      <p className="text-secondary-text text-xs tracking-[-0.2px] text-center mt-[15px]">
        By clicking the pay button and completing this purchase you agree to
        Lumilearn’s <span className="text-primary">terms & condition</span> &{" "}
        <span className="text-primary">Refund Policy</span>
      </p>
    </div>
  );
};

export default OrderSummary;
