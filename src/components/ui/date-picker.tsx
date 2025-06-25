import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

type DatePickerProps = {
  value?: Date | undefined;
  invalid?: boolean;
  className?: string;
  onSelect?: (date: Date | undefined) => void;
};

export default function DatePicker({
  className,
  invalid,
  value,
  onSelect,
}: DatePickerProps) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          id="date"
          className={cn(
            "w-48 justify-between font-normal",
            className,
            invalid && "!border-red-500"
          )}
        >
          {value ? value.toLocaleDateString() : "Select date"}
          <ChevronDownIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto overflow-hidden p-0" align="start">
        <Calendar
          mode="single"
          selected={value}
          captionLayout="dropdown"
          onSelect={(date) => {
            setOpen(false);
            onSelect?.(date);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
