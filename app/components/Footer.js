import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex space-x-4">
          <Link href="/" className="hover:text-blue-600">Accueil</Link>
          <Link href="/quoi-faire" className="hover:text-blue-600">Quoi faire à Bordeaux ?</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </div>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-5 h-5 hover:text-pink-500" />
        </a>
        <p className="text-sm text-gray-500">© 2025 Tab&Host</p>
      </div>
    </footer>
  );
}