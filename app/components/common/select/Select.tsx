import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Select as ShadCnSelect,
} from "@/components/ui/select";
import React from "react";

type Options = {
  value: string;
  label: string;
};

type Props = {
  placeholder: string;
  name: string;
  value: string;
  options: Options[];
  handleChange: (value: string) => void;
};

const Select = ({ placeholder, name, options, value, handleChange }: Props) => {
  return (
    <ShadCnSelect name={name} value={value} onValueChange={handleChange}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="max-h-[400px]">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </ShadCnSelect>
  );
};

export default Select;
