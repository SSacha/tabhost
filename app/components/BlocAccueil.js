"use client";

import Image from "next/image";

export default function BlocAccueil({titre, contenu}) {

  return (
    <div className="group relative flex width-40 h-full font-bold text-2xl px-4 py-4 mb-4 bloc-accueil justify-center items-center cursor-pointer transition-all duration-300 hover:bg-gray-100 rounded-xl">
      {/* Texte principal */}
      <span className="transition-opacity duration-300 group-hover:opacity-0">{titre}</span>

      {/* Contenu au hover */}
      <div className="absolute inset-0 flex flex-col justify-center items-start bg-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 overflow-hidden">
        {contenu}
      </div>
    </div>
  );
}