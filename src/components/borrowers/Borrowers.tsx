import { BorrowerCard } from "@/components/borrowers/BorrowerCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BorrowerSearchbox from "@/components/borrowers/BorrowerSearchbox";
import BorrowersNotFound from "@/components/borrowers/BorrowersNotFound";
import { useGetBorrowers } from "@/api/borrower/useGetBorrowers";
import { Link, useSearchParams } from "react-router";

export default function Borrowers() {
  const { data } = useGetBorrowers();
  const [searchParams, _] = useSearchParams(); 
  const search = searchParams.get("search") || "";

  const filteredBorrowers = data?.filter(
    (borrower) =>
      borrower.name.toLowerCase().includes(search.toLowerCase()) ||
      borrower.phone?.includes(search)
  );

  return (
    <Card className="relative overflow-hidden border-1 shadow-xs border-primary-100 bg-gradient-to-br from-white to-blue-50/30">
      <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <CardTitle className="text-2xl font-bold">Borrowers</CardTitle>
          <CardDescription className="text-base">
            Manage your store's borrowers and their transactions
          </CardDescription>
        </div>
        <BorrowerSearchbox />
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBorrowers?.map((borrower) => (
            <Link to={`borrowers/${borrower.id}`} key={borrower.id}>
              <BorrowerCard key={borrower.id} borrower={borrower} />
            </Link>
          ))}
        </div>

        {filteredBorrowers?.length === 0 && (
          <BorrowersNotFound search={search} />
        )}
      </CardContent>
    </Card>
  );
}
