import { PageHeader } from "@/components/headers/PageHeader";
import { Plus, UserPlusIcon } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import Container from "@/components/ui/container";
import MainHeader from "@/components/headers/MainHeader";
import { StatsCards } from "@/components/statsCard/StatsCards";
import Borrowers from "@/components/borrowers/Borrowers";
import { Button } from "@/components/ui/button";
import { AddBorrowerForm } from "@/components/forms/AddBorrowerForm";
import { AddTransactionForm } from "@/components/forms/AddTransactionForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function StoreOwnerDashboardPage() {
  return (
    <MainLayout>
      <MainHeader>
        <Avatar className="size-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </MainHeader>

      <Container className="py-8">
        <PageHeader
          title="Store Dashboard"
          description="Manage your borrowers and track transactions"
        >
          <Dialog>
            <DialogTitle />
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="bg-white">
                <UserPlusIcon className="h-4 w-4" />
                Add Borrower
              </Button>
            </DialogTrigger>
            <DialogContent>
              <AddBorrowerForm />
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTitle />
            <DialogTrigger asChild>
              <Button size="sm" className="bg-primary-600 hover:bg-primary-700">
                <Plus className="h-4 w-4" />
                New Transaction
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <AddTransactionForm />
            </DialogContent>
          </Dialog>
        </PageHeader>

        <StatsCards />

        <Borrowers />
      </Container>
    </MainLayout>
  );
}
