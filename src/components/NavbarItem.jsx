"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  const getClassNames = () => {
    let classNames = "m-4 hover:text-amber-600 font-semibold p-2";
    if (genre && genre === param) {
      classNames +=
        " underline underline-offset-8 decoration-4  decoration-amber-500 rounded-lg";
    }
    return classNames;
  };
  return (
    <div>
      <Link className={getClassNames()} href={`/?genre=${param}`}>
        {title}
      </Link>
    </div>
  );
}
