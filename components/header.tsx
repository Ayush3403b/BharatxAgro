"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
const pathname = usePathname();

const [scrolled, setScrolled] = useState(false);
const [mobileOpen, setMobileOpen] = useState(false);

useEffect(() => {
const handleScroll = () => {
setScrolled(window.scrollY > 40);
};


window.addEventListener("scroll", handleScroll);

return () =>
  window.removeEventListener("scroll", handleScroll);

}, []);

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/pages/products" },
  { name: "About", href: "/pages/about" },
  { name: "Infrastructure", href: "/pages/infrastructure" },
  { name: "Contact", href: "/pages/contact" },
];

return (
<header
className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
> <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

    {/* Logo */}
    <Link href="/">
      <div className="group cursor-pointer">
        <Image
          src="/logo2.png"
          alt="BharatXAgro Logo"
          width={220}
          height={70}
          className={`w-auto transition-all duration-300 ${
            scrolled ? "h-12" : "h-14"
          }`}
          priority
        />
      </div>
    </Link>

    {/* Desktop Menu */}
    <nav className="hidden items-center gap-10 md:flex">

      {navItems.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`group relative text-sm font-medium transition-all duration-300 ${
              active
                ? "text-[#d8b15a]"
                : scrolled
                ? "text-[#123524]"
                : "text-white"
            }`}
          >
            {item.name}

            <span
              className={`absolute -bottom-2 left-0 h-[2px] bg-[#d8b15a] transition-all duration-300 ${
                active
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
        );
      })}
    </nav>

    {/* CTA */}
    <div className="hidden md:block">
      <Link href="/pages/inquiry">
        <button className="rounded-full bg-[#d8b15a] px-6 py-3 font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          Inquiry
        </button>
      </Link>
    </div>

    {/* Mobile Button */}
    <button
      className={`md:hidden ${
        scrolled
          ? "text-[#123524]"
          : "text-white"
      }`}
      onClick={() =>
        setMobileOpen(!mobileOpen)
      }
    >
      {mobileOpen ? (
        <X size={28} />
      ) : (
        <Menu size={28} />
      )}
    </button>
  </div>

  {/* Mobile Menu */}
  <div
    className={`overflow-hidden transition-all duration-500 md:hidden ${
      mobileOpen
        ? "max-h-[400px]"
        : "max-h-0"
    }`}
  >
    <div className="bg-white/95 backdrop-blur-xl border-t border-black/5">

      <nav className="flex flex-col p-6">

        {navItems.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() =>
                setMobileOpen(false)
              }
              className={`rounded-xl px-4 py-4 transition-all duration-300 ${
                active
                  ? "bg-[#123524] text-white"
                  : "text-[#123524] hover:bg-[#123524]/5"
              }`}
            >
              {item.name}
            </Link>
          );
        })}

        <Link href="/pages/inquiry">
          <button className="mt-4 rounded-full bg-[#d8b15a] py-3 font-medium text-black">
            Inquiry
          </button>
        </Link>

      </nav>
    </div>
  </div>
</header>

);
}
