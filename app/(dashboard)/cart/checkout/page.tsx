"use client";

import BreadCrumb from "@/components/BreadCrumb";
import OrderSummary from "@/components/OrderSummary";
import PageHeaderComponent from "@/components/PageHeader";
import Safety from "../../../../public/assets/icons/safety.svg";
import Card from "../../../../public/assets/icons/bank_card.svg";
import Transfer from "../../../../public/assets/icons/bank_line.svg";
import Verve from "../../../../public/assets/icons/verve.svg";
import Visa from "../../../../public/assets/icons/visa.svg";
import Mastercard from "../../../../public/assets/icons/mastercard.svg";
import Image from "next/image";
import { useState } from "react";
import CardPayment from "@/containers/Checkout/CardPayment";
import { TCart } from "@/types/cart";
import { useCartStore } from "@/store/cart/cart";
import { CardType } from "@/utils/detectCardType";

const CheckoutPage = () => {
  const { cardType } = useCartStore() as TCart;
  const paymentMethods = [
    {
      id: 1,
      label: "Credit/Debit card payment",
      icon: Card,
      provider: true,
    },
    {
      id: 2,
      label: "Bank Transfers",
      icon: Transfer,
    },
  ];
  const [isFormValid, setIsFormValid] = useState(false);

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(null);

  return (
    <div>
      <BreadCrumb
        className="mb-4"
        items={[
          { label: "Cart", href: "/cart" },
          { label: "Checkout", href: "/cart/checkout" },
        ]}
      />
      <PageHeaderComponent title="Checkout" />

      <div className="bg-white mt-6 my-4 rounded-xl px-4 md:px-6 py-5">
        <div className="flex flex-col md:flex-row gap-15">
          <div className="grid grid-cols-1 gap-3.5 w-full md:w-[65%]">
            <div className="">
              <h4 className="font-semibold text-xl lg:text-2xl text-text-primary">
                Payment Method
              </h4>
            </div>

            {/*------- Security-------- */}
            <div className="bg-[#F0F5FF] rounded-sm px-3 md:px-8 py-4 flex items-start gap-1.5">
              <Image
                src={Safety}
                alt="Safety"
                width={24}
                height={24}
                className="h-5"
              />
              <p className="text-secondary-text text-sm">
                Payments are encrypted so that your credit card and payment
                details stay safe.
              </p>
            </div>

            {/*------------ Payment Options ---------------*/}
            <div className="mt-4 space-y-4">
              {paymentMethods.map((payment) => {
                return (
                  <div
                    key={payment.id}
                    className="border border-border rounded-xl py-6 px-3 lg:px-6 cursor-pointer hover:border-primary transition-colors"
                  >
                    <div
                      className="flex items-center justify-between"
                      onClick={() => setSelectedPaymentMethod(payment.label)}
                    >
                      <div className="flex items-center gap-1">
                        <Image
                          src={payment.icon}
                          alt={payment.label + " Icon"}
                          width={24}
                          height={24}
                          className="h-5"
                        />
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm text-text-primary">
                            {payment.label}
                          </span>
                          {payment.provider && (
                            <>
                              {!cardType ||
                              cardType === CardType.AMEX ? null : (
                                <div className="">
                                  <Image
                                    src={
                                      cardType === CardType.VISA
                                        ? Visa
                                        : cardType === CardType.VERVE
                                        ? Verve
                                        : cardType === CardType.MASTERCARD
                                        ? Mastercard
                                        : null
                                    }
                                    alt="Card Provider Icon"
                                    width={40}
                                    height={26}
                                    className="h-5"
                                  />
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                      <div
                        className={`w-[18px] h-[18px] rounded-full border border-border flex items-center justify-center ${
                          selectedPaymentMethod === payment.label
                            ? "bg-primary"
                            : "bg-transparent"
                        }`}
                      >
                        {selectedPaymentMethod === payment.label && (
                          <div className="w-1.5 h-1.5 bg-white rounded-full" />
                        )}
                      </div>
                    </div>
                    {/*------------ Card Payment ---------------*/}
                    {selectedPaymentMethod === payment.label &&
                      selectedPaymentMethod?.includes("card") && (
                        <CardPayment
                          onValidityChange={setIsFormValid}
                          className="mt-6"
                        />
                      )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className=" w-full md:w-[35%]">
            <OrderSummary isFormValid={isFormValid} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
