import { CardType } from "@/utils/detectCardType";
import { TCheckoutDetails, TCoursesResponse } from "./courses";

export type TCart = {
  cart: [];
  loading: boolean;
  error: string | null;
  cardType: CardType;
  checkoutDetails: TCheckoutDetails;
  addToCart: (course: TCoursesResponse) => void;
  removeFromCart: (course: TCoursesResponse) => void;
  handleCheckout(data: TCheckoutDetails): void;
  getCardType(data: CardType | null): void;
  resetState: () => void;
};
