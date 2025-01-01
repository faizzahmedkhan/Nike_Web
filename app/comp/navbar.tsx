import React from "react";
import { Input } from "../../components/ui/input";
import Link from "next/link";
import { Images } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav>
      <header className=" bg-zinc-200 ">
        <div className="flex justify-between mx-5 sm:mx-10 py-2 items-center">
          <div className="">
            <Image src={"/frame.png"} width={24} height={24} alt="logo-sm" />
          </div>
          <div className="">
            <div className="flex gap-2 sm:gap-3 text-xs md:text-base">
              <span>
                <a href="#">Find a Store</a> |
              </span>
              <span>
                <a href="/contact-us">Help</a> |
              </span>
              <span>
                <Link href={"/sign-up"}> Join Us</Link> |
              </span>
              <span>
                <Link href={"/sign-in"}>Sign In</Link>
              </span>
            </div>
          </div>
        </div>
      </header>
      <div className="mx-5 sm:mx-10 navbar  md:py-0">
        <div className="grid grid-cols-9 lg:grid-cols-12 items-center justify-between  gap-3">
          <div className="lg:col-span-2 col-span-2 nav-logo">
            <Link href={"/"}>
              <Image
                src={"/logo-nike.png"}
                width={79}
                height={79}
                alt="logo-sm"
              />
            </Link>
          </div>
          <div className="col-span-7  hidden lg:grid  ">
            <div className="nav-opt flex justify-center items-center gap-5 ms-5">
              <span>
                <Link href={"/shop"}>New & Featured</Link>
              </span>
              <span>
                <Link href={"/shop"}>Men</Link>
              </span>
              <span>
                <Link href={"/shop"}>Women</Link>
              </span>
              <span>
                <Link href={"/shop"}>Kids</Link>
              </span>
              <span>
                <Link href={"/shop"}>Sale</Link>
              </span>
              <span>
                <Link href={"/shop"}>Sneakers</Link>
              </span>
            </div>
          </div>
          <div className="col-span-5 col-start-4  lg:col-span-3">
            <div className="flex items-center justify-end gap-4">
              <div className="nav-search relative w-2/3 xl:w-2/3 hidden sm:block">
                <Input
                  className=" rounded-full bg-zinc-100 py-0 sm:py-2 ps-10"
                  placeholder="Search"
                ></Input>
                <Image
                  src={"/search-icon.png"}
                  className="top-2 left-2 absolute"
                  width={24}
                  height={24}
                  alt="logo-sm"
                />
              </div>
              <div className="heart-bag flex justify-end lg:justify-center gap-4">
                <Link href={"/cart"}>
                  <Image src={"/heart.png"} width={24} height={24} alt="" />
                </Link>
                <Link href={"/cart"}>
                  <Image src={"/bag.png"} width={24} height={24} alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Image
                  src={"/ham.png"}
                  height={22}
                  width={22}
                  alt="logo"
                  className="ms-auto"
                />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <Image
                      src={"/logo-nike.png"}
                      height={79}
                      width={79}
                      alt="logo"
                    />
                  </SheetTitle>
                </SheetHeader>
                <div className="side-content">
                  <p className=" leading-9 border-b">
                    <Link href={"/shop"}>New & Featured</Link>
                  </p>
                  <p className=" leading-9 border-b">
                    <Link href={"/shop"}>Men</Link>
                  </p>
                  <p className=" leading-9 border-b">
                    <Link href={"/shop"}>Women</Link>
                  </p>
                  <p className=" leading-9 border-b">
                    <Link href={"/shop"}>Kids</Link>
                  </p>
                  <p className=" leading-9 border-b">
                    <Link href={"/shop"}>Sale</Link>
                  </p>
                  <p className=" leading-9 border-b">
                    <Link href={"/shop"}>Sneakers</Link>
                  </p>
                  <div className="nav-search relative w-2/3 xl:w-2/3 sm:hidden block mt-3">
                    <Input
                      className=" rounded-full bg-zinc-100 py-0 sm:py-2 ps-10"
                      placeholder="Search"
                    ></Input>
                    <Image
                      src={"/search-icon.png"}
                      className="top-2 left-2 absolute"
                      width={24}
                      height={24}
                      alt="logo-sm"
                    />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
