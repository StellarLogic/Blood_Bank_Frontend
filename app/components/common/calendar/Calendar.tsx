import { Button } from "@/components/ui/button";
import { Calendar as ShadCnCalendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import React from "react";

type Props = {
  value: string;
  onChange: () => void;
};

const Calendar = ({ value, onChange }: Props) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"outline"}>
          {value ? format(value, "PPP") : <span>Pick a date</span>}
          <CalendarIcon className="w-4 h-4 ml-auto opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <ShadCnCalendar
          mode="single"
          selected={value}
          onSelect={onChange}
          disabled={(date) =>
            date > new Date() || date < new Date("1900-01-01")
          }
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default Calendar;
