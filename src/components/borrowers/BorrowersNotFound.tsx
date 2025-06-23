import { UsersIcon } from "lucide-react";

export default function BorrowersNotFound({ search }: { search: string }) {
  return (
    <div className="text-center py-12">
      <UsersIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        No borrowers found
      </h3>
      <p className="text-gray-500 mb-4">
        {search
          ? "Try adjusting your search terms"
          : "Get started by adding your first borrower"}
      </p>
    </div>
  );
}
