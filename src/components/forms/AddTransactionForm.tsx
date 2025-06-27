import type React from "react";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, PackageIcon } from "lucide-react";
import type { TransactionForm, TransactionFormErrors } from "@/types";
import { useGetBorrowers } from "@/api/borrower/useGetBorrowers";
import DatePicker from "@/components/ui/date-picker";
import TransactionFormItems from "@/components/transactions/TransactionFormItemFields";
import InputError from "@/components/ui/input-error";
import { useAddTransaction } from "@/api/store/useAddTransaction";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function AddTransactionForm() {
  const { data: borrowersData, isLoading: borrowersDataIsLoading } =
    useGetBorrowers();
  const { mutate, error, isPending, isSuccess } = useAddTransaction();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [form, setForm] = useState<TransactionForm>({
    borrower_id: undefined,
    due_date: undefined,
    items: [{ name: "", price: 0, quantity: 1 }],
  });
  const serverErrors = (error as TransactionFormErrors) || {
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  };

  const onAddTransaction = (e: React.FormEvent) => {
    e.preventDefault();

    mutate(form);
  };

  const addItem = () => {
    setForm({
      ...form,
      items: [...form.items, { name: "", price: 0, quantity: 1 }],
    });
  };

  const totalAmount = form.items.reduce((sum, item) => {
    const totalPrice = item.price * item.quantity;
    if (isNaN(totalPrice)) return sum; // Handle NaN case

    return sum + totalPrice;
  }, 0);

  useEffect(() => {
    if (isSuccess) {
      setIsDialogOpen(false);
      setForm({
        borrower_id: undefined,
        due_date: undefined,
        items: [{ name: "", price: 0, quantity: 1 }],
      });
    }
  }, [isSuccess]);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTitle />
      <DialogTrigger asChild>
        <Button className="bg-primary-600 hover:bg-primary-700">
          <Plus className="h-4 w-4" />
          New Transaction
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <div className="flex items-center font-semibold gap-2">
          <PackageIcon className="size-5" />
          Add New Transaction
        </div>

        <form
          onSubmit={onAddTransaction}
          className="space-y-6 overflow-y-auto max-h-[40rem]"
        >
          <div className="space-y-2">
            <Label htmlFor="borrower">Select Borrower *</Label>
            <Select
              value={form.borrower_id?.toString()}
              onValueChange={(value) =>
                setForm({
                  ...form,
                  borrower_id: Number.parseInt(value),
                })
              }
              disabled={borrowersDataIsLoading || isPending}
              required
            >
              <SelectTrigger
                className="w-full !h-12"
                invalid={!!serverErrors?.borrower_id}
              >
                <SelectValue
                  placeholder="Choose a borrower"
                  className="text-black"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Borrower</SelectLabel>
                  {borrowersData?.map((borrower) => (
                    <SelectItem
                      key={borrower.id}
                      value={borrower.id.toString()}
                    >
                      {borrower.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <InputError>{serverErrors?.borrower_id}</InputError>
          </div>

          <div className="space-y-4">
            <Label>Items *</Label>

            <TransactionFormItems form={form} setForm={setForm} />

            <div className="flex justify-between items-center">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addItem}
                disabled={isPending}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Item
              </Button>

              <div className="text-right">
                <p className="text-lg font-semibold">
                  Total: ₱{totalAmount.toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="due-date">Payment Due Date</Label>
            <DatePicker
              value={form.due_date}
              onSelect={(date) => setForm({ ...form, due_date: date })}
              invalid={!!serverErrors?.due_date}
              className="w-full h-12"
            />
            <InputError>{serverErrors?.due_date}</InputError>
          </div>

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Creating..." : "Create Transaction"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
