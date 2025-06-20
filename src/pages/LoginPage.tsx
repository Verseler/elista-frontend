import type React from "react";
import { Link } from "react-router";
import { useState, type FormEvent } from "react";
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
import { Store, MailIcon, LockIcon } from "lucide-react";
import type { LoginForm } from "@/types/index";
import MainLayout from "@/components/layout/MainLayout";
import MainHeader from "@/components/headers/MainHeader";
import Container from "@/components/ui/container";
import InputPassword from "@/components/ui/input-password";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { useLogin } from "@/api/auth/useLogin";
import InputError from "@/components/ui/input-error";

export default function LoginPage() {
  const { mutate, error, isPending } = useLogin();
  const serverErrors = (error as Partial<LoginForm>) || {
    email: "",
    password: "",
  };
  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
  }

  async function onLogin(e: FormEvent) {
    e.preventDefault();

    mutate(form);
  }

  return (
    <MainLayout>
      <MainHeader>
        <Button variant="ghost" asChild>
          <Link to="/login">Sign In</Link>
        </Button>
        <Button className="bg-primary-600 hover:bg-primary-700" asChild>
          <Link to="/register">Get Started</Link>
        </Button>
      </MainHeader>

      <Container className="mt-14 w-full max-w-lg">
        <Card className="border-0">
          <CardHeader className="text-center pb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Store className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-gray-600">
              Sign in to your account to continue
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={onLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="pl-10"
                    onChange={handleOnChange}
                    invalid={!!serverErrors?.email}
                    disabled={isPending}
                    required
                  />
                </div>
                <InputError>{serverErrors?.email}</InputError>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <InputPassword
                    id="password"
                    name="password"
                    value={form.password}
                    onChange={handleOnChange}
                    invalid={!!serverErrors?.password}
                    disabled={isPending}
                    placeholder="Enter your password"
                    className="pl-10 pr-12"
                    required
                  />
                </div>
                <InputError>{serverErrors?.password}</InputError>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 ps-1">
                  <Checkbox id="terms" />
                  <Label
                    htmlFor="terms"
                    className="font-normal text-neutral-500"
                  >
                    Accept terms and conditions
                  </Label>
                </div>

                <Button
                  type="button"
                  variant="link"
                  className="text-primary-600 hover:text-primary-700 p-0"
                >
                  Forgot password?
                </Button>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-primary hover:bg-primary-700 font-semibold"
                disabled={isPending}
              >
                {isPending ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <Separator />

            <div className="text-center">
              <p className="text-gray-600 text-sm">
                Don't have a store account?{" "}
                <Button
                  variant="link"
                  className="text-primary-600 hover:text-primary-700 p-0 font-semibold"
                >
                  <Link to="/register">Register your store</Link>
                </Button>
              </p>
            </div>
          </CardContent>
        </Card>
      </Container>
    </MainLayout>
  );
}
