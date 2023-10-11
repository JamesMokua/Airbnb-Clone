import React from "react";
import Image from "next/image";
import { TbWorld } from "react-icons/tb";
import Search from "./Search";
import Auth from "./Auth";

const Navbar = () => {
  return (
    <div className="fixed w-full flex flex-row justify-between px-10 pt-5  items-center pb-3 bg-white shadow-sm border-b-[1px]">
      <div className="logo hover:cursor-pointer">
        <Image
          src="/images/logo/logo.png"
          width="100"
          height="100"
          alt="logo"
          priority={true}
        />
      </div>
      <Search />
      <div className="flex flex-row items-center">
        <div className="pr-6   text-sm hover:cursor-pointer">
          Airbnb your home
        </div>
        <div className="pr-3 hover:cursor-pointer">
          <TbWorld />
        </div>
       <Auth/>
      </div>
    </div>
  );
};

export default Navbar;
