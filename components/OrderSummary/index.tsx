"use client";

import { PrimaryButton } from "../Buttons";
import { useCartStore } from "@/store/cart/cart";
import { TCart } from "@/types/cart";
import { TCoursesResponse } from "@/types/courses";
import { usePathname, useRouter } from "next/navigation";

const OrderSummary = ({
  isFormValid,
  selectedPaymentMethod,
}: {
  isFormValid?: boolean;
  selectedPaymentMethod?: string | null;
}) => {
  const router = useRouter();
  const location = usePathname();
  const { cart, handleOpenModal } = useCartStore() as TCart;

  const isCheckout = location === "/cart/checkout";
  const isCardPaymentSelected =
    selectedPaymentMethod === "Credit/Debit card payment";
  const isBankTransferSelected = selectedPaymentMethod === "Bank Transfers";

  const handleButtonClick = () => {
    if (!isCheckout) {
      router.push("/cart/checkout");
      return;
    }

    if (isBankTransferSelected) {
      handleOpenModal(true);
    }
  };

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
        type={isCheckout ? "submit" : "button"}
        form={isCheckout ? "card-payment-form" : ""}
        disabled={
          isCheckout
            ? isCardPaymentSelected
              ? !isFormValid
              : !selectedPaymentMethod
            : false
        }
        onClick={isCardPaymentSelected ? undefined : handleButtonClick}
        icon={!isCheckout}
      >
        {isCheckout
          ? `Pay ₦${totalPrice.toLocaleString()}`
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
