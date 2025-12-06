import React from "react";
import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadCrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

const BreadCrumb = ({ items, className }: BreadCrumbProps) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center  text-sm ${className}`}
    >
      {items?.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={index} className="flex items-center gap-1">
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="text-secondary-text hover:text-primary transition-colors text-sm "
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={`${
                  isLast
                    ? "text-text-primary font-normal"
                    : "text-secondary-text text-sm"
                }`}
              >
                {item.label}
              </span>
            )}
            {!isLast && <p className="text-text-primary pr-1">/</p>}
          </div>
        );
      })}
    </nav>
  );
};

export default BreadCrumb;
