"use client";

import Image from "next/image";

export default function Separator() {

  return (
    <div className="flex flex-row w-full justify-center items-center separator my-4">
      <Image src={'/tab&host-logo.png'} alt={'tabhost'} width={150} height={50} />
    </div>
  )
}