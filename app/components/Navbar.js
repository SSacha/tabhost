"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Instagram } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 fds-small">
      <div className="max-w-6xl mx-perso px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          {/* Tab&Host */}
          <Image src={'/tab&host-logo.png'} alt={'tabhost'} width={125} height={50} />
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="">Accueil</Link>
          <Link href="/quoi-faire" className="">Quoi faire à Bordeaux ?</Link>
          <Link href="/temoignages" className="">Témoignages</Link>
          <Link href="/contact" className="">Contact</Link>
          <a className="" href="https://www.instagram.com/tabandhost" target="_blank" rel="noopener noreferrer">
            <Instagram className="flex justify-center items-center mb-1 w-5 h-5 hover:text-pink-500" />
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
          <Link href="/temoignages" onClick={() => setOpen(false)} className="">Témoignages</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <a href="https://www.instagram.com/tabandhost" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-5 h-5 inline mr-2" /> Instagram
          </a>
        </nav>
      )}
    </header>
  );
}