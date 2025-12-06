"use client";
import laptop from "../../public/assets/icons/laptop_line.svg";
import timeline from "../../public/assets/icons/time_line.svg";
import Delete from "../../public/assets/icons/delete.svg";
import Image, { StaticImageData } from "next/image";
import { StarRating } from "react-flexible-star-rating";
import { SecondaryButton } from "../Buttons";

const CardComponent = ({
  title,
  authorName,
  price,
  authorImg,
  ratingValue,
  type,
  duration,
  duration_type,
  coverImage,
  position = "horizontal",
  isAlreadyInCart,
  onClick,
  onDeleteCourse,
}: {
  title: string;
  coverImage: string | StaticImageData;
  authorName: string;
  price: string;
  authorImg: string | StaticImageData;
  ratingValue: number;
  type?: string;
  duration?: number;
  duration_type?: string;
  position?: "horizontal" | "vertical";
  isAlreadyInCart?: boolean;
  onClick?: () => void;
  onDeleteCourse?: () => void;
}) => {
  return (
    <div className="flex justify-between  items-start">
      <div
        className={`w-full ${
          position === "horizontal" ? "flex flex-col" : "flex flex-row gap-1"
        }`}
      >
        {/* ----COURSE IMAGE----- */}
        <div
          className={`${
            position === "horizontal" && "border border-border rounded-t-lg"
          } `}
        >
          <Image
            src={coverImage}
            alt="Card Image"
            className={`${
              position === "horizontal"
                ? "w-full h-[145px] rounded-t-lg"
                : "w-[139px] h-[81px] rounded-lg"
            }    object-cover`}
            width={position === "horizontal" ? 286 : 139}
            height={position === "horizontal" ? 145 : 81}
          />
        </div>

        {/* ----COURSE DETAILS----- */}
        <div
          className={`${
            position === "horizontal"
              ? "border border-border rounded-b-lg pt-3 px-4"
              : "px-2"
          }  bg-white pb-4 flex flex-col gap-3`}
        >
          <h3 className="font-medium text-base capitalize text-text">
            {title}
          </h3>

          {/* ----author image---- */}
          <div className="flex gap-1.5 items-center h-full">
            {authorImg ? (
              <Image
                src={authorImg}
                alt="Author Image"
                className="rounded-full object-cover w-4 h-4"
                width={16}
                height={16}
              />
            ) : (
              <div className="flex justify-center capitalize items-center rounded-full w-4 h-4 text-white bg-primary">
                {authorName.charAt(0).toUpperCase()}
              </div>
            )}

            {/* ----author name type---- */}

            <p className="text-xs text-secondary-text capitalize font-normal">
              {" "}
              {authorName}
            </p>
          </div>

          {/* ----course rating---- */}
          <div className="flex items-center gap-1">
            <p className="text-xs text-text-primary">{ratingValue}</p>
            <StarRating
              dimension={5}
              initialRating={ratingValue}
              color="#ED9D2C"
              isReadOnly={true}
            />
          </div>

          {/* ----course price---- */}
          <p className="text-base font-semibold text-text-primary">₦{price}</p>

          {/* ----course type---- */}
          <div className="flex  flex-wrap gap-1 items-start md:items-center">
            {type && (
              <div className="flex gap-1 items-center">
                <Image src={laptop} alt="Laptop Icon" width="12" height="12" />
                <p className="text-xs font-normal text-text-secondary capitalize tracking-[-0.2px]">
                  {type}
                </p>
                <div className="bg-text-secondary w-[1.5px] h-3 ml-0.5" />
              </div>
            )}

            {/* ----course duration---- */}
            {duration && (
              <div className="flex gap-1 items-center">
                <Image
                  src={timeline}
                  alt="Timeline Icon"
                  width="12"
                  height="12"
                />
                <p className="text-xs font-normal text-text-secondary tracking-[-0.2px]">
                  {duration} {duration_type}
                </p>
                {/* <div className="bg-text-secondary w-[1.5px] h-3" /> */}
              </div>
            )}

            {/* <div className="flex gap-1 items-center">
              <Image src={user} alt="Timeline Icon" width="12" height="12" />
              <p className="text-xs font-normal text-text-secondary tracking-[-0.2px]">
                Grade 4 & 3 others
              </p>
            </div> */}
          </div>

          {position === "horizontal" && (
            <SecondaryButton
              className={`${
                isAlreadyInCart
                  ? "opacity-50 cursor-not-allowed"
                  : " cursor-pointer"
              }`}
              onClick={isAlreadyInCart ? undefined : onClick}
            >
              {isAlreadyInCart ? "In Cart" : "Add to cart"}
            </SecondaryButton>
          )}
        </div>
      </div>

      {position === "vertical" && (
        <Image
          onClick={onDeleteCourse}
          src={Delete}
          alt="Delete Icon"
          className="cursor-pointer w-5 h-5 md:w-6 md:h-6 "
          width={24}
          height={24}
        />
      )}
    </div>
  );
};

export default CardComponent;
