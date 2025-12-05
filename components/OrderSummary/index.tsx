import React from "react";
import { PrimaryButton } from "../Buttons";

const OrderSummary = () => {
  return (
    <div className="">
      <h2 className="font-semibold text-lg md:text-xl tracking-[-0.2px] text-text-primary pb-4">
        Order Summary
      </h2>

      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center w-full">
          <p className="text-sm text-text-primary tracking-[-0.2px] font-normal">
            2 courses
          </p>
          <p className="text-sm text-text-primary tracking-[-0.2px] font-normal">
            ₦5,500
          </p>
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="text-sm text-text-primary tracking-[-0.2px] font-bold">
            Total
          </p>
          <p className="text-sm text-text-primary tracking-[-0.2px] font-bold">
            ₦5,500
          </p>
        </div>
      </div>

      <PrimaryButton className="mt-6">Proceed to Checkout</PrimaryButton>
    </div>
  );
};

export default OrderSummary;
