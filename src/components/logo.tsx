import clsx from "clsx";
import { ComponentPropsWithRef } from "react";

export function Logo({
  className,
  width = 432,
  height = 432,
  ...props
}: ComponentPropsWithRef<"svg">) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 432 432"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx("aspect-square", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M300.527 286.209L377.884 208.853C420.06 166.676 420.06 98.2944 377.884 56.1178C335.707 13.9412 267.325 13.9412 225.149 56.1178L147.792 133.474L300.527 286.209Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M62.8677 371.136C20.6911 328.959 20.6911 260.577 62.8677 218.401L133.473 147.795L286.208 300.53L215.603 371.136C173.426 413.312 105.044 413.312 62.8677 371.136Z"
        fill="#7A56D5"
      />
      <path
        d="M124.875 401.625L408.375 118.125V199.125L205.875 401.625H124.875Z"
        fill="black"
        fillOpacity="0.1"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M210.83 41.7989L48.5488 204.08C-1.53595 254.165 -1.53596 335.368 48.5488 385.453C98.6335 435.538 179.837 435.538 229.922 385.453L392.203 223.172C442.287 173.087 442.287 91.8836 392.203 41.7989C342.118 -8.28584 260.915 -8.28583 210.83 41.7989ZM62.8677 371.134C20.6911 328.957 20.6911 260.575 62.8677 218.399L133.473 147.793L286.208 300.528L215.603 371.134C173.426 413.311 105.044 413.311 62.8677 371.134ZM300.527 286.209L377.884 208.853C420.06 166.676 420.06 98.2944 377.884 56.1178C335.707 13.9412 267.325 13.9412 225.149 56.1178L147.792 133.474L300.527 286.209Z"
        fill="#361B45"
      />
      <path
        d="M54 263.25C54 255.794 60.0442 249.75 67.5 249.75C74.9558 249.75 81 255.794 81 263.25C81 270.706 74.9558 276.75 67.5 276.75C60.0442 276.75 54 270.706 54 263.25Z"
        fill="#F3ABFC"
      />
      <path
        d="M87.75 357.75C87.75 350.294 93.7942 344.25 101.25 344.25C108.706 344.25 114.75 350.294 114.75 357.75C114.75 365.206 108.706 371.25 101.25 371.25C93.7942 371.25 87.75 365.206 87.75 357.75Z"
        fill="#F3ABFC"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M67.6379 284.407C74.5948 287.089 78.0607 294.902 75.3792 301.859C73.9383 305.597 73.8744 309.726 75.1988 313.507C76.5232 317.288 79.1495 320.474 82.608 322.496C89.0446 326.259 91.2119 334.528 87.4489 340.964C83.6858 347.401 75.4174 349.568 68.9809 345.805C59.9888 340.548 53.1603 332.263 49.7169 322.433C46.2734 312.602 46.4397 301.867 50.1859 292.148C52.8674 285.191 60.681 281.725 67.6379 284.407Z"
        fill="#F3ABFC"
      />
      <circle cx="276.75" cy="87.75" r="27" fill="#361B45" />
      <circle cx="344.25" cy="155.25" r="27" fill="#361B45" />
    </svg>
  );
}

export function LogoText({ className }: { className?: string }) {
  return (
    <span
      className={clsx([
        "text-5xl font-black text-white logo-text-border tracking-wide",
        className,
      ])}
    >
      PIMP FUN
    </span>
  );
}
