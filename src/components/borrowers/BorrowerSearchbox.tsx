import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import type React from "react";
import { useSearchParams } from "react-router";

export default function BorrowerSearchbox() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    if (value) {
      searchParams.set("search", value);
    } else {
      searchParams.delete("search");
    }
    setSearchParams(searchParams);
  }

  return (
    <div className="relative w-full sm:w-auto">
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      <Input
        placeholder="Search borrowers..."
        className="pl-10 w-full sm:w-80"
        value={searchParams.get("search") || ""}
        onChange={handleSearchChange}
      />
    </div>
  );
}
