"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Use icons from lucide-react

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="px-4 py-4 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
      <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/Mntdigital-w.png" alt="logo" width={100} height={80} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#Features" className="hover:text-foreground/80 text-sm">
            Features
          </Link>
          <Link href="#portfolio" className="hover:text-foreground/80 text-sm">
            Portfolio
          </Link>
          <Link href="#contact" className="hover:text-foreground/80 text-sm">
            Contact
          </Link>
          <Link
            href="#Testimonials"
            className="hover:text-foreground/80 text-sm"
          >
            Testimonials
          </Link>
          <Link href="#Pricing" className="hover:text-foreground/80 text-sm">
            Pricing
          </Link>
        </nav>

        {/* CTA Button (Always Visible) */}
        <div className="hidden md:flex">
          <div className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              <Link href="#contact">Get Started</Link>
            </span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden z-50">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden pt-4 mt-4 px-4 space-y-4 pb-6 bg-background border-t border-border animate-slide-down">
          <Link
            href="#Features"
            className="block text-sm hover:text-foreground/80"
            onClick={toggleMenu}
          >
            Features
          </Link>
          <Link
            href="#portfolio"
            className="block text-sm hover:text-foreground/80"
            onClick={toggleMenu}
          >
            Portfolio
          </Link>
          <Link
            href="#contact"
            className="block text-sm hover:text-foreground/80"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link
            href="#Testimonials"
            className="block text-sm hover:text-foreground/80"
            onClick={toggleMenu}
          >
            Testimonials
          </Link>
          <Link
            href="#Pricing"
            className="block text-sm hover:text-foreground/80"
            onClick={toggleMenu}
          >
            Pricing
          </Link>

          <div className="pt-4">
            <div className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-full">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex w-full h-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Get Started
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
