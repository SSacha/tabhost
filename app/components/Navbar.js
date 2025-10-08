"use client";
import Link from "next/link";
import { useState } from "react";
import { Instagram } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Tab&Host
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-blue-600">Accueil</Link>
          <Link href="/quoi-faire" className="hover:text-blue-600">Quoi faire à Bordeaux ?</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-5 h-5 hover:text-pink-500" />
          </a>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-gray-50 border-t flex flex-col space-y-2 p-4">
          <Link href="/" onClick={() => setOpen(false)}>Accueil</Link>
          <Link href="/quoi-faire" onClick={() => setOpen(false)}>Quoi faire à Bordeaux ?</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-5 h-5 inline mr-2" /> Instagram
          </a>
        </nav>
      )}
    </header>
  );
}