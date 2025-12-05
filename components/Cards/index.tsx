"use client";

import CardImg from "../../public/assets/images/card.jpg";
import laptop from "../../public/assets/icons/laptop_line.svg";
import user from "../../public/assets/icons/user_1_line.svg";
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
  position = "horizontal",
}: {
  title: string;
  authorName: string;
  price: string;
  authorImg: StaticImageData;
  ratingValue: number;
  position?: "horizontal" | "vertical";
}) => {
  return (
    <div className="flex justify-between  items-start">
      <div
        className={`w-fit ${
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
            src={CardImg}
            alt="Card Image"
            className={`${
              position === "horizontal"
                ? "w-full h-[145px] rounded-t-lg"
                : "w-[139px] h-[81px] rounded-lg"
            }    object-cover`}
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
          <h3 className="font-medium text-[15px] md:text-base text-text">
            {title}
          </h3>
          <div className="flex gap-1.5 items-center h-full">
            <Image
              src={authorImg}
              alt="Author Image"
              className="rounded-full object-cover w-4 h-4"
            />

            <p className="text-xs text-secondary-text font-normal">
              {" "}
              {authorName}
            </p>
          </div>

          <div className="flex items-center gap-1">
            <p className="text-xs text-text-primary">{ratingValue}</p>
            <StarRating
              dimension={5}
              initialRating={ratingValue}
              color="#ED9D2C"
              isReadOnly={true}
            />
          </div>

          <p className="text-[15px] md:text-base font-semibold text-text-primary">
            ₦{price}
          </p>

          <div className="flex flex-col md:flex-row gap-2 items-start md:items-center">
            <div className="flex gap-1 items-center">
              <Image src={laptop} alt="Laptop Icon" width="12" height="12" />
              <p className="text-xs font-normal text-text-secondary tracking-[-0.2px]">
                Live
              </p>
              <div className="bg-text-secondary w-[1.5px] h-3" />
            </div>

            <div className="flex gap-1 items-center">
              <Image
                src={timeline}
                alt="Timeline Icon"
                width="12"
                height="12"
              />
              <p className="text-xs font-normal text-text-secondary tracking-[-0.2px]">
                4 wks
              </p>
              <div className="bg-text-secondary w-[1.5px] h-3" />
            </div>

            <div className="flex gap-1 items-center">
              <Image src={user} alt="Timeline Icon" width="12" height="12" />
              <p className="text-xs font-normal text-text-secondary tracking-[-0.2px]">
                Grade 4 & 3 others
              </p>
            </div>
          </div>

          {position === "horizontal" && (
            <SecondaryButton>Add to cart</SecondaryButton>
          )}
        </div>
      </div>

      {position === "vertical" && (
        <Image
          src={Delete}
          alt="Delete Icon"
          className="cursor-pointer"
          width={24}
          height={24}
        />
      )}
    </div>
  );
};

export default CardComponent;
