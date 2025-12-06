import TextInput from "@/components/Input/TextInput";
import { useForm, SubmitHandler, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardPaymentValidator } from "@/validators/CardPaymentValidator";
import { useEffect } from "react";
import { useCartStore } from "@/store/cart/cart";
import { TCart } from "@/types/cart";
import { TCheckoutDetails } from "@/types/courses";
import { detectCardType } from "@/utils/detectCardType";

export type TFormInput = {
  name: string;
  number: string;
  expiryDate: string;
  ccv: string;
  billingAddress: string;
  saveCard?: boolean;
};

const CardPayment = ({
  className,
  onValidityChange,
}: {
  className?: string;
  onValidityChange?: (isValid: boolean) => void;
}) => {
  const { handleCheckout, getCardType, handleOpenModal } =
    useCartStore() as TCart;

  // ------React hook form setup------
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<TFormInput>({
    resolver: zodResolver(CardPaymentValidator),
    mode: "onChange",
  });
  const cardNumber = useWatch({
    control,
    name: "number",
    defaultValue: "",
  });

  const onSubmit: SubmitHandler<TFormInput> = (data: TCheckoutDetails) => {
    handleCheckout(data);
    handleOpenModal(true);
  };

  useEffect(() => {
    onValidityChange?.(isValid);
  }, [isValid, onValidityChange]);

  useEffect(() => {
    const cardType = detectCardType(cardNumber);
    getCardType(cardType);
  }, [cardNumber, getCardType]);

  return (
    <>
      <form
        id="card-payment-form"
        onSubmit={handleSubmit(onSubmit)}
        className={`flex flex-col gap-6 ${className}`}
      >
        {/* -------- Card Name-------- */}
        <div>
          <TextInput
            type="text"
            label="Cardholder name"
            placeholder="E.g fela anikulapo"
            {...register("name")}
            error={errors.name?.message}
          />
        </div>

        {/* -------- Card Number-------- */}
        <div>
          <TextInput
            type="text"
            label="Cardholder Number"
            placeholder="9088029229202828"
            {...register("number")}
            error={errors.number?.message}
          />
        </div>

        <div className="flex  flex-col md:flex-row gap-6 md:gap-3">
          {/* -------- Card Expiration Date-------- */}
          <div className="w-full md:w-1/2">
            <TextInput
              type="text"
              label="Expiry date"
              placeholder="04/25"
              {...register("expiryDate")}
              error={errors.expiryDate?.message}
            />
          </div>

          {/* -------- Card CCV Code-------- */}
          <div className="w-full md:w-1/2">
            <TextInput
              type="text"
              label="CVV code"
              placeholder="224"
              {...register("ccv")}
              error={errors.ccv?.message}
            />
          </div>
        </div>

        {/* -------- Card Billing Address-------- */}
        <div>
          <TextInput
            type="text"
            label="Billing address"
            placeholder="E.g Zenith international school, Lekki phase 1"
            {...register("billingAddress")}
            error={errors.billingAddress?.message}
          />
        </div>

        {/* -------- Save Card ------- */}
        <div className="flex items-center gap-2">
          <TextInput type="checkbox" {...register("saveCard")} />
          <p className="text-sm text-secondary-text tracking-[-0.2px] font-normal">
            Save card for future payments
          </p>
        </div>
      </form>
    </>
  );
};

export default CardPayment;
