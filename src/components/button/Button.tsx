import { cva } from "class-variance-authority";
import { forwardRef } from "react";

const button = cva(
  "px-6 border-2 rounded-md py-2 font-medium transition-all duration-300",
  {
    variants: {
      intent: {
        primary:
          "bg-primary-500 text-white border-primary-500 hover:bg-transparent hover:text-primary-500 ",
        danger:
          "bg-danger-500 text-white border-danger-500 hover:bg-transparent hover:text-danger-500 ",
        white:
          "bg-white border-white text-text-500 hover:bg-transparent hover:text-white",
        ghost: "text-primary-500 border-none",
      },
      width: {
        fit: "w-fit",
        half: "w-1/2",
        full: "w-full",
      },
      size: {
        small: "p-0",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

type ButtonProps = React.ComponentPropsWithRef<"button">;

type Props = ButtonProps & {
  children: React.ReactNode;
  width?: "full" | "half" | "fit";
  size?: "small";
  intent?: "primary" | "danger" | "white" | "ghost";
  onClick?: () => void;
};

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, intent, width, size, onClick, ...props }: Props, ref) => {
    return (
      <button
        className={button({ intent, width, size })}
        onClick={onClick}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
