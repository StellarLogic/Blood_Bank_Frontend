import { cva } from "class-variance-authority";
import React from "react";

const button = cva(
  "px-4 md:px-8 border-2 rounded-lg py-2 md:py-3 font-medium text-md md:text-xl xs:flex-1 transition-all duration-300",
  {
    variants: {
      intent: {
        primary: "bg-primary-500 text-white border-primary-500",
        danger: "bg-danger-500 text-white border-danger-500",
        white: "bg-white border-white text-text-500",
        ghost: "text-primary-500 border-none",
        active: "border-white bg-white text-primary-500",
      },
      size: {
        fit: "w-fit",
        half: "w-1/2",
        full: "w-full",
      },
      rounded: {
        none: "rounded-none",
        xs: "rounded-xs",
        sm: "rounded-sm",
        md: "rounded-md",
        left: "rounded-none rounded-tl-3xl",
        right: "rounded-none rounded-tr-3xl",
      },
    },

    defaultVariants: {
      intent: "primary",
      rounded: "none",
    },
  }
);

type Props = {
  children?: React.ReactNode;
  intent?: "primary" | "danger" | "white" | "ghost" | "active";
  rounded?: "none" | "xs" | "sm" | "md" | "left" | "right";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const HeaderButton = ({ children, intent, rounded, onClick }: Props) => {
  return (
    <button className={button({ intent, rounded })} onClick={onClick}>
      {children}
    </button>
  );
};

export default HeaderButton;
