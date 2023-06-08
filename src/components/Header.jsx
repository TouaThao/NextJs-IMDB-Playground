import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

const menuItems = [
  {
    title: "HOME",
    address: "/",
    Icon: AiFillHome,
  },
  {
    title: "ABOUT",
    address: "/about",
    Icon: BsFillInfoCircleFill,
  },
];

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            title={item.title}
            address={item.address}
            Icon={item.Icon}
          />
        ))}
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
              IMDB
            </span>
            <span className="text-x1 hidden sm:inline">PlayGround</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
