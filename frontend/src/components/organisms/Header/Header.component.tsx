"use client";

import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Properties", href: "/#properties" },
  { label: "Destination", href: "/#destination" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8 flex justify-between items-center transition-all duration-300 ${
        isScrolled ? "bg-black shadow-sm" : "bg-white"
      }`}>
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 shrink-0">
          <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
            <span className="text-white text-sm font-bold">OL</span>
          </div>
          <span className="text-2xl font-bold text-gray-500 hover:text-black transition-colors">
            Shop
          </span>
        </Link>

        {/* Navigation */}
        {isMobile ? (
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetHeader>
                <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-4 p-2 font-bold">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-500 hover:text-black transition-colors">
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 border-t pt-4">{/* <AuthHeader /> */}</div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center gap-6">
            <nav className="flex gap-6">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-black">
                  {link.label}
                </Link>
              ))}
            </nav>
            {/* <AuthHeader /> */}
          </div>
        )}
      </div>
    </header>
  );
}
