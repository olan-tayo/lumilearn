"use client";

import CardComponent from "@/components/Cards";
import SearchComponent from "@/components/Search";
import { useCartStore } from "@/store/cart/cart";
import { TCart } from "@/types/cart";
import { TCoursesResponse } from "@/types/courses";
import EmptyCourse from "./EmptyCourse";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export const CoursesComponent = ({
  coursesData,
}: {
  coursesData: TCoursesResponse[];
}) => {
  const { addToCart, cart } = useCartStore() as TCart;
  const [searchValue, setSearchValue] = useState("");
  const [courses, setCourses] = useState<TCoursesResponse[]>(coursesData);

  const isCourseIncart = (course: TCoursesResponse) => {
    return cart.some((item: TCoursesResponse) => item?.slug === course?.slug);
  };

  const debouncedSearch = useDebouncedCallback((value: string) => {
    if (value.trim() === "") {
      setCourses(coursesData);
      return;
    }

    setCourses(
      coursesData.filter((course) =>
        course.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  }, 500);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    debouncedSearch(value);
  };

  return (
    <>
      {courses?.length < 1 ? (
        <EmptyCourse />
      ) : (
        <>
          <div className="mt-6 my-4">
            <SearchComponent value={searchValue} onChange={handleSearch} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3.5">
            <>
              {courses?.map((course: TCoursesResponse, index: number) => {
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
