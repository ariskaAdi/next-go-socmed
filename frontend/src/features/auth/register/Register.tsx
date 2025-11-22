"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Eye, EyeOff } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import InputForm from "@/components/molecules/InputForm";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-blue-200"></div>

      <div className="relative z-10 w-full max-w-md">
        <Card className="w-full max-w-md shadow-lg p-4">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Register
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              {/* Name */}
              <InputForm
                id="name"
                name="name"
                placeholder="Enter your name"
                type="text">
                Email
              </InputForm>
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
                Register
              </Button>
            </form>
          </CardContent>

          <CardFooter className="text-center text-sm text-gray-600">
            Already have an account?
            <Link
              href="/auth/login"
              className="text-blue-500 hover:underline ml-1">
              Sign in
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
