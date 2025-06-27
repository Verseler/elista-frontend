import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Mail, Lock, User, Store, MapPin, Upload } from "lucide-react";
import type { RegisterForm } from "@/types";
import MainLayout from "@/components/layout/MainLayout";
import { Link } from "react-router";
import Container from "@/components/ui/container";
import StoreIcon from "@/components/ui/store-icon";
import { useRegister } from "@/api/auth/useRegister";
import InputError from "@/components/ui/input-error";
import InputPassword from "@/components/ui/input-password";
import { Separator } from "@/components/ui/separator";
import GuestHeader from "@/components/headers/GuestHeader";

export default function RegisterPage() {
  const { mutate, error, isPending } = useRegister();

  const [currentStep, setCurrentStep] = useState(1);
  const serverErrors = (error as Partial<
    Omit<RegisterForm, "store_image"> & {
      store_image: string;
    }
  >) || {
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
    store_name: "",
    store_image: "",
    store_location: "",
  };

  const [form, setForm] = useState<RegisterForm>({
    // Store Owner Info
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",

    // Store Info
    store_name: "",
    store_image: undefined,
    store_location: "",
  });
  const [storeImagePreview, setStoreImagePreview] = useState<string>("");

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
  }

  const onRegister = (e: React.FormEvent) => {
    e.preventDefault();

    mutate(form);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setForm({ ...form, store_image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setStoreImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const nextStep = () => {
    if (currentStep === 1) {
      if (
        !form.name ||
        !form.email ||
        !form.password ||
        !form.password_confirmation
      ) {
        alert("Please fill in all required fields");
        return;
      }
      if (form.password !== form.password_confirmation) {
        alert("Passwords don't match");
        return;
      }
    }
    setCurrentStep(2);
  };

  const prevStep = () => {
    setCurrentStep(1);
  };

  return (
    <MainLayout>
      <GuestHeader />

      <Container className="w-full mt-14 max-w-2xl">
        <Card className="border-0">
          <CardHeader className="text-center pb-8">
            <StoreIcon />
            <CardTitle className="text-2xl font-bold text-gray-900">
              {currentStep === 1 ? "Create Your Account" : "Setup Your Store"}
            </CardTitle>
            <CardDescription className="text-gray-600">
              {currentStep === 1
                ? "Let's start by creating your store owner account"
                : "Now let's setup your store information"}
            </CardDescription>

            {/* Progress Indicator */}
            <div className="flex items-center justify-center mt-6">
              <div className="flex items-center space-x-4">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    currentStep >= 1
                      ? "bg-primary-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  1
                </div>
                <div
                  className={`w-16 h-1 ${
                    currentStep >= 2 ? "bg-primary-600" : "bg-gray-200"
                  }`}
                />
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    currentStep >= 2
                      ? "bg-primary-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  2
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={onRegister} className="space-y-6">
              {currentStep === 1 && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          id="name"
                          name="name"
                          placeholder="Enter your full name"
                          className="pl-10 h-12"
                          value={form.name}
                          onChange={handleOnChange}
                          invalid={!!serverErrors?.name}
                          disabled={isPending}
                          required
                        />
                      </div>
                      <InputError>{serverErrors?.name}</InputError>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="09XX XXX XXXX (optional)"
                        className="h-12"
                        value={form.phone}
                        onChange={handleOnChange}
                        invalid={!!serverErrors?.phone}
                        disabled={isPending}
                      />
                      <InputError>{serverErrors?.phone}</InputError>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10 h-12"
                        value={form.email}
                        onChange={handleOnChange}
                        invalid={!!serverErrors?.email}
                        disabled={isPending}
                        required
                      />
                    </div>
                    <InputError>{serverErrors?.email}</InputError>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="password">Password *</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <InputPassword
                          id="password"
                          name="password"
                          value={form.password}
                          onChange={handleOnChange}
                          invalid={!!serverErrors?.password}
                          disabled={isPending}
                          placeholder="Create a password"
                          className="pl-10 pr-12 h-12"
                          required
                        />
                      </div>
                      <InputError>{serverErrors?.password}</InputError>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password_confirmation">
                        Confirm Password *
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <InputPassword
                          id="password_confirmation"
                          name="password_confirmation"
                          value={form.password_confirmation}
                          onChange={handleOnChange}
                          invalid={!!serverErrors?.password_confirmation}
                          disabled={isPending}
                          placeholder="Enter your password"
                          className="pl-10 pr-12"
                          required
                        />
                      </div>
                      <InputError>
                        {serverErrors?.password_confirmation}
                      </InputError>
                    </div>
                  </div>

                  <Button
                    type="button"
                    onClick={nextStep}
                    className="w-full h-12 bg-primary-600 hover:bg-primary-700 text-white font-semibold"
                  >
                    Continue to Store Setup
                  </Button>
                </>
              )}

              {currentStep === 2 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="store_name">Store Name *</Label>
                    <div className="relative">
                      <Store className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        id="store_name"
                        name="store_name"
                        type="text"
                        placeholder="Enter your store name"
                        className="pl-10 h-12"
                        value={form.store_name}
                        onChange={handleOnChange}
                        invalid={!!serverErrors?.store_name}
                        disabled={isPending}
                        required
                      />
                    </div>
                    <InputError>{serverErrors?.store_name}</InputError>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="store_location">Store Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        id="store_location"
                        name="store_location"
                        type="text"
                        placeholder="Enter your store address (optional)"
                        className="pl-10 h-12"
                        value={form.store_location}
                        onChange={handleOnChange}
                        invalid={!!serverErrors?.store_location}
                        disabled={isPending}
                      />
                    </div>
                  </div>

                  {/* TODO */}
                  <div className="space-y-2">
                    <Label htmlFor="storeImage">Store Photo</Label>
                    <div className="flex items-center gap-4">
                      <label
                        htmlFor="store-image-upload"
                        className="flex items-center gap-2 cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-primary-400 transition-colors flex-1"
                      >
                        <Upload className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-600">
                          Upload store photo{" "}
                          <span className="text-sm text-gray-500">
                            (optional)
                          </span>
                        </span>
                      </label>
                      <input
                        id="store-image-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                      />
                      {storeImagePreview && (
                        <img
                          src={storeImagePreview || "/placeholder.svg"}
                          alt="Store preview"
                          className="h-16 w-16 object-cover rounded-lg border"
                        />
                      )}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      className="flex-1 h-12"
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 h-12 bg-primary-600 hover:bg-primary-700 text-white font-semibold"
                      disabled={isPending}
                    >
                      {isPending
                        ? "Creating Account..."
                        : "Create Store Account"}
                    </Button>
                  </div>
                </>
              )}
            </form>

            <Separator />

            <div className="text-center">
              <p className="text-gray-600 text-sm">
                Already have an account?{" "}
                <Button
                  variant="link"
                  className="text-primary-600 hover:text-primary-700 p-0 font-semibold"
                >
                  <Link to="/login">Sign in here</Link>
                </Button>
              </p>
            </div>
          </CardContent>
        </Card>
      </Container>
    </MainLayout>
  );
}
