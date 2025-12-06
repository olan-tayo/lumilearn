import { cardPatterns } from "./cardPatterns";

export enum CardType {
  VISA = "visa",
  MASTERCARD = "mastercard",
  VERVE = "verve",
  AMEX = "amex",
}

export const detectCardType = (number: string): CardType | null => {
  const cleaned = number.replace(/\s/g, "");
  for (const [type, pattern] of Object.entries(cardPatterns)) {
    if (pattern.test(cleaned)) {
      return type as CardType;
    }
  }
  return null;
};
