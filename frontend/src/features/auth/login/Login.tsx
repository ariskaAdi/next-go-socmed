"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

// import { Eye, EyeOff } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import InputForm from "@/components/molecules/InputForm";

export default function Login() {
  const formAction = (formData: FormData) => {
    const user = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    console.log(user);
  };
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-blue-200"></div>

      <div className="relative z-10 w-full max-w-md">
        <Card className="w-full max-w-md shadow-lg p-4">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" action={formAction}>
              {/* Email */}
              <InputForm
                id="email"
                name="email"
                placeholder="Enter your email"
                type="email">
                Email
              </InputForm>
              {/* Password */}
              <InputForm
                id="password"
                name="password"
                placeholder="Enter your password"
                type="password">
                Password
              </InputForm>
              {/* Submit */}
              <Button type="submit" className="w-full cursor-pointer">
                Login
              </Button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-2 my-4">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="text-sm text-gray-500">OR</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* <LoginGoogle /> */}
          </CardContent>

          <CardFooter className="text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/register"
              className="text-blue-500 hover:underline ml-1">
              Sign up
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
