import Image from "next/image";
import React from "react";
import { Input } from "../../components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";
const Signup = () => {
  return (
    <section className="mx-5 sm:mx-10 pt-5 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 justify-center">
        <div className="col-span-1 w-3/4 mx-auto lg:col-start-2 xl:col-start-3 flex flex-col items-center">
          <Image src={"/logo-nike.png"} width={55} height={25} alt="logo" />
          <h2 className="text-black text-center font-bold text-xl mb-6">
            BECOME A NIKE MEMBER
          </h2>
          <p className="mb-6 text-neutral-400 text-sm text-center">
            Create your Nike Member profile and get first access to the very
            best of Nike products, inspiration and community.
          </p>
          <Input
            className="border-zinc-300 rounded-lg border px-5 py-5  mb-6 text-black"
            placeholder="Email Address"
          />
          <Input
            className="border-zinc-300 rounded-lg border px-5 py-5  mb-6 text-black"
            placeholder="Password"
          />
          <Input
            className="border-zinc-300 rounded-lg border px-5 py-5  mb-6 text-black"
            placeholder="First Name"
          />
          <Input
            className="border-zinc-300 rounded-lg border px-5 py-5  mb-6 text-black"
            placeholder="Last Name"
          />
          <div className="date w-full mb-6 text-center">
            <Input
              className="border-zinc-300  rounded-lg border px-5 py-5  text-black"
              placeholder="Date of Birth"
            />
            <p className="text-neutral-400 text-xs w-11/12 mt-2 text-center">
              Get a Nike Member Reward every year on your Birthday.
            </p>
          </div>
          <Select>
            <SelectTrigger className="border-zinc-300 rounded-lg border px-5 py-5  mb-6 text-black">
              <SelectValue placeholder="Pakistan" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Choose Country</SelectLabel>
                <SelectItem value="apple">Pakistan</SelectItem>
                <SelectItem value="banana">India</SelectItem>
                <SelectItem value="blueberry">Singapore</SelectItem>
                <SelectItem value="grapes">UAE</SelectItem>
                <SelectItem value="pineapple">Qatar</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="tog-group w-full mb-6">
            <ToggleGroup type="single" className="w-full">
              <ToggleGroupItem value="a" className="w-1/2 !text-neutral-400 border border-zinc-200">Male</ToggleGroupItem>
              <ToggleGroupItem value="c" className="w-1/2 !text-neutral-400 border border-zinc-200">Female</ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="flex mb-6 items-center gap-3 w-full">
              <Checkbox id="check-signup" className="border-neutral-400" />
              <label htmlFor="check-signup" className="text-xs text-neutral-400">
              Sign up for emails to get updates from Nike on products, offers and your Member benefits
              </label>
          </div>
          <p className="mb-6 text-neutral-400 text-xs text-center">
          By creating an account, you agree to Nike's 
            <Link href={""}>
              <u> Privacy Policy </u>{" "}
            </Link>
             and 
            <Link href={""}>
              <u> Terms of Use</u>
            </Link>
            .
          </p>
          <Button className="w-full mb-6">JOIN US</Button>
          <p className="text-sm text-neutral-400">
          Already a Member?  
            <Link href={"/sign-in"}>
              <u className="text-black"> Sign In.</u>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
