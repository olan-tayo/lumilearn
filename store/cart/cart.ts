import { TCart } from "@/types/cart";
import { TCheckoutDetails, TCoursesResponse } from "@/types/courses";
import { CardType } from "@/utils/detectCardType";
import toast from "react-hot-toast";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  cart: [],
  loading: false,
  error: null,
  cardType: null,
  checkoutDetails: {
    name: "",
    number: "",
    expiryDate: "",
    ccv: "",
    billingAddress: "",
    saveCard: false,
  },
};

export const useCartStore = create(
  persist(
    (set) => ({
      ...initialState,

      addToCart: (course: TCoursesResponse) => {
        set((state: TCart) => ({
          ...initialState,
          cart: [...state.cart, course],
        }));
        toast.success(`Course(${course.title}) added to cart`, {
          position: "top-right",
          style: {
            backgroundColor: "#1C9647",
            color: "#fff",
            fontWeight: "medium",
            fontSize: "14px",
          },
        });
      },

      removeFromCart: (course: TCoursesResponse) => {
        set((state: TCart) => ({
          ...initialState,
          cart: state.cart.filter(
            (item: TCoursesResponse) => item.slug !== course.slug
          ),
        }));
        toast.success(`Course(${course.title}) removed from cart`, {
          position: "top-right",
          style: {
            backgroundColor: "#1C9647",
            color: "#fff",
            fontWeight: "medium",
            fontSize: "14px",
          },
        });
      },

      handleCheckout: (data: TCheckoutDetails) => {
        set((state: TCart) => ({
          ...state,
          checkoutDetails: data,
        }));
      },

      getCardType: (data: CardType | null) => {
        set((state: TCart) => ({
          ...state,
          cardType: data,
        }));
      },
    }),
    {
      name: "cart",
    }
  )
);
