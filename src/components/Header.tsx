"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md py-4 relative">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              className="dark:invert"
              src="/Elite-logo.jpg"
              alt="Project Logo"
              width={120}
              height={40}
            />
          </Link>
          <div className="hidden md:block">
            {" "}
            {/* Show CORVITA only on larger screens */}
            <h1 className="text-xl font-bold">ELITE</h1>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden block text-gray-900 hover:text-purple-800 focus:outline-none"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isNavOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links - larger screens */}
        <nav className="hidden md:flex items-center space-x-6">
          {/* Use next/link for better performance */}
          <Link
            href="/"
            className="text-gray-600 font-medium hover:text-gray-900"
          >
            Home
          </Link>
          <Link
            href="/pages"
            className="text-gray-600 font-medium hover:text-gray-900"
          >
            Pages
          </Link>
          <Link
            href="/blog"
            className="text-gray-600 font-medium hover:text-gray-900"
          >
            Blog
          </Link>
          <Link
            href="/portfolio"
            className="text-gray-600 font-medium hover:text-gray-900"
          >
            Portfolio
          </Link>
          <Link
            href="/shop"
            className="text-gray-600 font-medium hover:text-gray-900"
          >
            Shop
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 font-medium hover:text-gray-900"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-gray-900 text-white px-4 py-2 rounded-md">
            Buy Now
          </button>
          <a href="tel:+1237878222" className="text-gray-900 font-bold">
            +123 7878 222
          </a>{" "}
          {/* Simplified phone number display */}
        </div>

        {/* Mobile Navigation Links - smaller screens */}
        <nav
          className={`md:hidden absolute top-16 left-0 w-full bg-white py-4 px-6 space-y-2 transition-all duration-300 ease-in-out transform ${
            isNavOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <Link
            href="/"
            className="block text-gray-600 font-medium hover:text-gray-900"
          >
            Home
          </Link>
          {/* ... other mobile nav links ... */}
          <button className="bg-gray-900 text-white px-4 py-2 rounded-md w-full">
            Buy Now
          </button>
          <a
            href="tel:+1237878222"
            className="text-gray-900 font-bold block text-center"
          >
            +123 7878 222
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
