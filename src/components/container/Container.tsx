import { cva } from "class-variance-authority";
import React from "react";

const container = cva("container mx-auto max-w-screen-xl px-3 ", {
  variants: {
    intent: {},
    height: {
      full: "h-full",
    },
  },
});

type Props = {
  children?: React.ReactNode;
  height?: "full";
};

const Container = ({ children, height }: Props) => {
  return <div className={container({ height })}>{children}</div>;
};

export default Container;
