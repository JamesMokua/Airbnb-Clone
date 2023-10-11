import React from "react";
import Image from "next/image";
import { TbWorld } from "react-icons/tb";
import { HiMiniBars3 } from "react-icons/hi2";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="fixed w-full flex flex-row justify-between px-10 pt-5  items-center pb-3 bg-white shadow-sm border-b-[1px]">
      <div className="logo hover:cursor-pointer">
        <Image
          src="/images/logo/logo.png"
          width="100"
          height="100"
          alt="logo"
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
        <div className="flex flex-row items-center border mr-4 px-1 py-1 border-gray-300 rounded-full shadow-md hover:shadow-xl hover: cursor-pointer">
          <div className="pr-3 pl-1">
            <HiMiniBars3 />
          </div>
          <div className="">
            <Avatar style={{ width: "30px", height: "30px" }}>
              <AvatarImage
                src="https://github.com/shadcn.png"
                style={{ width: "30px", height: "30px" }}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
