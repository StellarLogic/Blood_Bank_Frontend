import { cva } from "class-variance-authority";
import React from "react";

const button = cva("px-4 py-2 rounded-md text-sm font-medium", {
  variants: {
    intent: {
      primary:
        "bg-red-200 border-2 border-red-200 text-red-500 hover:bg-transparent hover:border-red-500",
    },
  },
  compoundVariants: [],
  defaultVariants: {},
});

type Props = {
  intent: "primary";
};

const Button = ({ intent }: Props) => {
  return <button className={button({ intent })}>Button</button>;
};
