import { cva } from "class-variance-authority";
import { FormikValues, useFormikContext } from "formik";
import { ChangeEvent } from "react";

const input = cva("px-4 border rounded-md  py-2", {
  variants: {
    intent: {
      default: "border-text-light-500",
      primary: "border-primary-500",
      ghost: "border-none",
    },
    width: {
      full: "w-full",
    },
    rounded: {
      none: "rounded-none",
      xs: "rounded-xs",
      sm: "rounded-sm",
      md: "rounded-md",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    intent: "default",
  },
});

const labelCva = cva("flex flex-col", {
  variants: {
    intent: {},
    width: {
      full: "w-full",
    },
  },
  defaultVariants: {},
});

interface Props {
  type?: "text" | "number" | "email" | "password";
  label: string;
  name: string;
  placeholder: string;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  intent?: "default" | "primary" | "ghost";
  width?: "full";
  labelWidth?: "full";
  rounded?: "none" | "xs" | "sm" | "md" | "full";
}
const Input = ({
  type = "text",
  placeholder,
  name,
  label,
  intent = "primary",
  width,
  labelWidth,
  rounded,
}: Props) => {
  const { values, errors, touched, handleBlur, handleChange } =
    useFormikContext<FormikValues>();

  return (
    <label htmlFor={name} className={labelCva({ width: labelWidth })}>
      <span>{label}</span>
      <input
        className={input({ intent, width, rounded })}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={values[name]}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors[name] && touched[name] ? (
        <p className="text-xs text-red-500">{String(errors[name])}</p>
      ) : null}
    </label>
  );
};

export default Input;
