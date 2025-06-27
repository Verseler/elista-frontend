import type { TransactionForm, TransactionItemError } from "@/types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Trash2Icon } from "lucide-react";

type TransactionFormItemFieldsProps = {
  form: TransactionForm;
  setForm: React.Dispatch<React.SetStateAction<TransactionForm>>;
  errors?: TransactionItemError[];
};

export default function TransactionFormItemFields({
  form,
  setForm,
}: TransactionFormItemFieldsProps) {
  const removeItem = (index: number) => {
    setForm({
      ...form,
      items: form.items.filter((_, i) => i !== index),
    });
  };

  const updateItem = (index: number, field: string, value: string | number) => {
    const updatedItems = form.items.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setForm({ ...form, items: updatedItems });
  };

  return (
    <>
      {form.items.map((item, index) => {
        return (
          <div key={index} className="flex gap-2 items-center">
            <div className="space-y-2">
              <Label htmlFor={`item-name-${index}`}>Name</Label>
              <Input
                id={`item-name-${index}`}
                placeholder="Item name"
                value={item.name}
                onChange={(e) => updateItem(index, "name", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`item-price-${index}`}>Price</Label>
              <Input
                id={`item-price-${index}`}
                type="number"
                value={item.price}
                onChange={(e) =>
                  updateItem(index, "price", Number.parseFloat(e.target.value))
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`item-quantity-${index}`}>Quantity</Label>
              <Input
                id={`item-quantity-${index}`}
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  updateItem(
                    index,
                    "quantity",
                    Number.parseInt(e.target.value) || 1
                  )
                }
                className="w-16 text-center"
                required
              />
            </div>
            {form.items.length > 1 && (
              <Button
                type="button"
                variant="destructive"
                size="sm"
                onClick={() => removeItem(index)}
                className="mt-6"
              >
                <Trash2Icon className="size-4" />
              </Button>
            )}
          </div>
        );
      })}
    </>
  );
}
