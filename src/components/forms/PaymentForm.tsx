import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CreditCardIcon, DollarSignIcon } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import type { PaymentForm } from "@/types/index";
import { Separator } from "@/components/ui/separator";
import { usePayment } from "@/api/store/usePayment";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PaymentFormProps {
  totalOutstanding: number;
  hasBalance?: boolean;
  borrowerId: number;
}

export function PaymentForm({
  totalOutstanding,
  hasBalance = false,
  borrowerId,
}: PaymentFormProps) {
  const { mutate, isPending, isSuccess } = usePayment(borrowerId);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [form, setForm] = useState<PaymentForm>({
    user_id: borrowerId,
    amount: 0,
    notes: "",
  });

  const handlePaymentRecord = (e: React.FormEvent) => {
    e.preventDefault();

    mutate(form);
  };

  // Close dialog when payment is successfully recorded the payment
  useEffect(() => {
    if (isSuccess) {
      setIsDialogOpen(false);
      setForm({
        user_id: borrowerId,
        amount: 0,
        notes: "",
      });
    }
  }, [isSuccess]);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTitle className="hidden" />
      <DialogDescription className="hidden" />
      {hasBalance && (
        <DialogTrigger asChild>
          <Button>
            <CreditCardIcon />
            Record Payment
          </Button>
        </DialogTrigger>
      )}
      <DialogContent>
        <div className="flex items-center font-semibold gap-2">
          <DollarSignIcon className="size-5" />
          Record Payment
        </div>

        <Separator />

        <div className="flex justify-between mb-5 text-lg font-bold">
          <span>Remaining Balance:</span>
          <span className="text-primary-600">
            {formatCurrency(totalOutstanding)}
          </span>
        </div>

        <form onSubmit={handlePaymentRecord} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="amount">Payment Amount *</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                ₱
              </span>
              <Input
                id="amount"
                type="number"
                step="0.01"
                min="0.01"
                max={totalOutstanding}
                placeholder="0.00"
                className="pl-8"
                value={form.amount}
                onChange={(e) =>
                  setForm({
                    ...form,
                    amount: Number.parseFloat(e.target.value) || 0,
                  })
                }
                disabled={isPending}
                required
              />
            </div>
            <p className="text-xs text-gray-500">
              Maximum: {formatCurrency(totalOutstanding)}
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">
              Notes
              <span className="italic font-normal text-neutral-600">
                (Optional)
              </span>
            </Label>
            <Textarea
              id="notes"
              placeholder="Add any notes about this payment..."
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              rows={3}
              disabled={isPending}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isPending}
            className="bg-primary-600 w-full hover:bg-primary-700"
          >
            {isPending ? "Recording..." : "Record Payment"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
