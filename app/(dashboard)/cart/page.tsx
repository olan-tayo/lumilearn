"use client";
import CardComponent from "@/components/Cards";
import PageHeaderComponent from "@/components/PageHeader";
import OrderSummary from "@/components/OrderSummary";
import { useCartStore } from "@/store/cart/cart";
import { TCart } from "@/types/cart";
import { TCoursesResponse } from "@/types/courses";
import EmptyCart from "@/containers/Cart/EmptyCart";

const CartPage = () => {
  const { cart, removeFromCart } = useCartStore() as TCart;
  return (
    <div>
      <PageHeaderComponent
        title="Cart"
        description="Access courses and tutors you have liked"
      />

      <div className="bg-white mt-6 my-4 rounded-xl px-4 md:px-6 py-5">
        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <h2 className="font-semibold text-lg md:text-xl lg:text-2xl text-text-primary pb-5">
              {cart?.length || "0"} Courses in cart
            </h2>
            <div className="flex flex-col md:flex-row gap-15">
              <div className="grid grid-cols-1 gap-3.5 w-full md:w-[65%]">
                <div className="">
                  {cart?.map((course: TCoursesResponse, index: number) => {
                    return (
                      <div key={course.slug + index}>
                        <CardComponent
                          coverImage={course?.cover_image_url || ""}
                          title={course?.title || "Not Available"}
                          authorName={course?.tutor?.name || "Unknown"}
                          price={course?.price?.toLocaleString() || "0"}
                          authorImg={course?.tutor?.avatar || ""}
                          ratingValue={course?.rating || 0}
                          type={course?.type || ""}
                          duration={course?.duration || 0}
                          duration_type={course?.duration_type || ""}
                          onDeleteCourse={() => removeFromCart(course)}
                          position="vertical"
                        />
                        {cart?.length === index + 1 ? null : (
                          <div className="border-[0.5px] border-border mb-4" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className=" w-full md:w-[35%]">
                <OrderSummary />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
