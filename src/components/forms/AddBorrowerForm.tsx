import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  User,
  PhoneIcon,
  MailIcon,
  UserIcon,
  LockIcon,
  UserPlusIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { BorrowerRegisterForm } from "@/types";
import InputError from "@/components/ui/input-error";
import { useBorrowerRegister } from "@/api/auth/useBorrowerRegister";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const DEFAULT_PASSWORD = "12345678";

export function AddBorrowerForm() {
  const { mutate, error, isPending, isSuccess } = useBorrowerRegister();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [form, setForm] = useState<BorrowerRegisterForm>({
    name: "",
    phone: "",
    email: "",
    password: DEFAULT_PASSWORD,
    password_confirmation: DEFAULT_PASSWORD,
  });
  const serverErrors = (error as Partial<BorrowerRegisterForm>) || {
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  };

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
  }

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newName = e.target.value;
    const emailTemplate = `${newName
      .toLowerCase()
      .replace(/\s+/g, ".")
      .replace(/[^a-z0-9.]/g, "")}@example.com`;
    const generatedEmail = newName ? emailTemplate : "";

    setForm((prevForm) => ({
      ...prevForm,
      name: newName,
      email: generatedEmail,
    }));
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newPassword = e.target.value;

    setForm((prevForm) => ({
      ...prevForm,
      password: newPassword,
      password_confirmation: newPassword,
    }));
  }

  function onAddBorrower(e: React.FormEvent) {
    e.preventDefault();

    mutate(form);
  }

  useEffect(() => {
    if (isSuccess) {
      setIsDialogOpen(false);
      setForm({
        name: "",
        phone: "",
        email: "",
        password: DEFAULT_PASSWORD,
        password_confirmation: DEFAULT_PASSWORD,
      });
    }
  }, [isSuccess]);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTitle />
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-white">
          <UserPlusIcon className="h-4 w-4" />
          Add Borrower
        </Button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex items-center font-semibold gap-2">
          <User className="size-5" />
          Add New Borrower
        </div>

        <form onSubmit={onAddBorrower} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-3 size-4 mt-1 text-muted-foreground" />
              <Input
                id="name"
                name="name"
                placeholder="Enter borrower name"
                className="pl-10"
                value={form.name}
                onChange={handleNameChange}
                disabled={isPending}
                invalid={!!serverErrors?.name}
                required
              />
            </div>
            <InputError>{serverErrors?.name}</InputError>
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Email *</Label>
            <div className="relative">
              <MailIcon className="absolute left-3 top-3 size-4 mt-1 text-muted-foreground" />
              <Input
                id="email"
                name="email"
                placeholder="example@gmail.com"
                className="pl-10"
                value={form.email}
                onChange={handleOnChange}
                disabled={isPending}
                invalid={!!serverErrors?.email}
                required
              />
            </div>
            <InputError>{serverErrors?.email}</InputError>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">
              Password
              <span className="font-normal italic text-xs text-neutral-500 ml-auto pe-2">
                default password: {DEFAULT_PASSWORD}
              </span>
            </Label>
            <div className="relative">
              <LockIcon className="absolute left-3 top-3 size-4 mt-1 text-muted-foreground" />
              <Input
                id="password"
                name="password"
                value={form.password}
                onChange={handlePasswordChange}
                placeholder="Enter borrower password"
                className="pl-10 pr-12"
                disabled={isPending}
                invalid={!!serverErrors?.password}
                required
              />
            </div>
            <InputError>{serverErrors?.password}</InputError>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Contact Number</Label>
            <div className="relative">
              <PhoneIcon className="absolute left-3 top-3 size-4 mt-1 text-muted-foreground" />
              <Input
                id="phone"
                name="phone"
                type="number"
                inputMode="tel"
                placeholder="Enter contact number (optional)"
                className="pl-10"
                value={form.phone}
                onChange={handleOnChange}
                disabled={isPending}
                invalid={!!serverErrors?.phone}
                minLength={11}
                maxLength={11}
              />
            </div>
            <InputError>{serverErrors?.phone}</InputError>
          </div>

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Adding..." : "Add Borrower"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
