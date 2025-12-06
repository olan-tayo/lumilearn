"use client";

import CardComponent from "@/components/Cards";
import SearchComponent from "@/components/Search";
import { useCartStore } from "@/store/cart/cart";
import { TCart } from "@/types/cart";
import { TCoursesResponse } from "@/types/courses";
import EmptyCourse from "./EmptyCourse";

export const CoursesComponent = ({
  coursesData,
}: {
  coursesData: TCoursesResponse[];
}) => {
  const { addToCart, cart } = useCartStore() as TCart;

  const isCourseIncart = (course: TCoursesResponse) => {
    return cart.some((item: TCoursesResponse) => item?.slug === course?.slug);
  };

  return (
    <>
      {coursesData?.length < 1 ? (
        <EmptyCourse />
      ) : (
        <>
          <div className="mt-6 my-4">
            <SearchComponent />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3.5">
            <>
              {coursesData?.map((course: TCoursesResponse, index: number) => {
                const alreadyInCart = isCourseIncart(course);

                return (
                  <CardComponent
                    coverImage={course?.cover_image_url || ""}
                    key={course.slug + index}
                    title={course?.title || "Not Available"}
                    authorName={course?.tutor?.name || "Unknown"}
                    price={course?.price?.toLocaleString() || "0"}
                    authorImg={course?.tutor?.avatar || ""}
                    ratingValue={course?.rating || 0}
                    type={course?.type || ""}
                    duration={course?.duration || 0}
                    duration_type={course?.duration_type || ""}
                    onClick={() => addToCart(course)}
                    isAlreadyInCart={alreadyInCart}
                  />
                );
              })}{" "}
            </>
          </div>
        </>
      )}
    </>
  );
};
