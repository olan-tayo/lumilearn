import { cardPatterns } from "@/utils/cardPatterns";
import * as z from "zod";

export const CardPaymentValidator = z.object({
  name: z.string().min(2, "Please enter your full name"),
  number: z
    .string()
    .min(13, "Card number must be at least 13 digits")
    .max(19, "Card number must not exceed 19 digits")
    .refine(
      (val) => {
        const cleaned = val.replace(/\s/g, "");
        return Object.values(cardPatterns).some((pattern) =>
          pattern.test(cleaned)
        );
      },
      {
        message:
          "Please enter a valid card number — card type could not be detected.",
      }
    ),
  expiryDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, "Please enter a valid expiry date.")
    .refine(
      (val) => {
        const [month, year] = val.split("/");
        const expiry = new Date(2000 + parseInt(year), parseInt(month) - 1);
        return expiry > new Date();
      },
      { message: "Please enter a valid expiry date." }
    ),
  ccv: z.string().regex(/^[0-9]{3,4}$/, "Please enter a valid CVV."),
  billingAddress: z.string().min(9, "Please enter your billing address."),
  saveCard: z.boolean().optional().default(false),
});
