import React from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { auth, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default async function Auth() {
  const { userId }: { userId: string | null } = await auth();
  const isAuth = !!userId;

  return (
    <div className="flex flex-row items-center border mr-4 px-1 py-1 border-gray-300 rounded-full shadow-md hover:shadow-xl hover: cursor-pointer">
      <Popover>
        <PopoverTrigger className=" flex flex-row">
          <div className="pr-3 pl-1 relative top-2 left-1">
            <HiMiniBars3 />
          </div>
          <div className="">
            {" "}
            {isAuth ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <Avatar style={{ width: "30px", height: "30px" }}>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  style={{ width: "30px", height: "30px" }}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            )}
          </div>
        </PopoverTrigger>
        {isAuth ? (
          <PopoverContent className="w-60 mt-3 mr-14 px-0 ">
            <div className="space-y-2">
              <div className="group text-sm text-muted-foreground pt-2 pb-2 pl-3 hover:cursor-pointer transition duration-300 ease-in-out hover:bg-gray-100">
                Airbnb your home
              </div>
              <div className="group text-sm text-muted-foreground pt-2 pb-2 pl-3 hover:cursor-pointer transition duration-300 ease-in-out hover:bg-gray-100">
                Help Center
              </div>
            </div>
          </PopoverContent>
        ) : (
          <PopoverContent className="w-60 mt-3 mr-14 px-0 ">
            <div className="space-y-2">
              <div className="group text-sm text-muted-foreground pt-2 pb-2 pl-3 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-100">
                <Link href="/sign-up">Sign Up</Link>
              </div>
              <div className="group text-sm text-muted-foreground pt-2 pb-2 pl-3 hover:cursor-pointer trasnsition duration-300 ease-in-out hover:bg-gray-100">
                <Link href="/sign-in">Log In</Link>
              </div>
              <Separator />
              <div className="group text-sm text-muted-foreground pt-2 pb-2 pl-3 hover:cursor-pointer transition duration-300 ease-in-out hover:bg-gray-100">
                Airbnb your home
              </div>
              <div className="group text-sm text-muted-foreground pt-2 pb-2 pl-3 hover:cursor-pointer transition duration-300 ease-in-out hover:bg-gray-100">
                Help Center
              </div>
            </div>
          </PopoverContent>
        )}
      </Popover>
    </div>
  );
}
