import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function InputPassword({
  className,
  invalid,
  ...props
}: React.ComponentProps<"input"> & {
  invalid?: boolean;
}) {
  const [showPassword, setShowPassword] = useState(false);

  function togglePassword() {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }

  return (
    <>
      <Input
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        className={className}
        invalid={invalid}
        {...props}
      />
      <Button
        variant="ghost"
        type="button"
        className="absolute right-3 size-0 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        onClick={togglePassword}
      >
        {showPassword ? (
          <EyeOffIcon className="size-4" />
        ) : (
          <EyeIcon className="size-4" />
        )}
      </Button>
    </>
  );
}
