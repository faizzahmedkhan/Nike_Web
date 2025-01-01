import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue, } from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cartsec = () => {
  return (
    <section className="cart_sec mx-5 sm:mx-10 py-10">
      <div className="grid grid-cols-12 gap-3 gap-y-5">
        <div className=" col-span-full lg:col-span-8 xl:col-span-7 xl:col-start-2">
          <div className="cart-table-top bg-zinc-200 px-3 md:px-6 py-3 text-sm md:text-base">
            <h5>Free Delivery</h5>
            <div className="table-top-text flex gap-x-5 flex-wrap">
              <p>Applies to orders of $ 140.00 or more.</p>
              <Link href={""}>
                <u>View details</u>
              </Link>
            </div>
          </div>
          <h3 className="text-2xl font-medium text-start text-black my-4">
            Bag
          </h3>
          <Table>
            <TableBody>
              <TableRow className="md:table-row flex flex-wrap gap-y-3">
                <TableCell className="p-0 xl:p-3">
                  <Image
                    src={"/sec3_img1.png"}
                    width={150}
                    height={150}
                    alt="cart-img"
                  />
                </TableCell>
                <TableCell className="p-2 md:p-px">
                  <p className=" font-medium text-start mb-1 text-black">
                    Nike Dri-FIT ADV TechKnit Ultra
                  </p>
                  <p className=" font-medium text-start mb-1 text-neutral-400">
                    Men's Short-Sleeve Running Top
                  </p>
                  <p className=" font-medium text-start mb-1 text-neutral-400">
                    Ashen Slate/Cobalt Bliss
                  </p>
                  <div className="size-quantity flex flex-wrap items-center gap-2 mb-3">
                    <div className="size-sec flex items-center gap-2">
                    <span className=" font-medium text-start text-neutral-400">
                      Size
                    </span>
                    <Select >
                      <SelectTrigger className="w-[80px] h-[30px]">
                        <SelectValue/>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {/* <SelectLabel>Fruits</SelectLabel> */}
                          <SelectItem value="small" >S</SelectItem>
                          <SelectItem value="medium">M</SelectItem>
                          <SelectItem value="large">L</SelectItem>
                          <SelectItem value="x-large">XL</SelectItem>
                          <SelectItem value="xx-large">XXL</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    </div>
                    <div className="quant-sec flex items-center gap-2">
                    <span className=" font-medium text-start text-neutral-400">
                      Quantity
                    </span>
                      <Input className="w-[80px] h-[30px]" type="number"/>
                    </div>
                  </div>
                  <div className="cart-icons flex gap-2 mt-2">
                    <a href="#"><Image src={"/heart.png"} width={24} height={24} alt="cart-img"/></a>
                    <a href="#"><Image src={"/trash.png"} width={24} height={24} alt="cart-img"/></a>
                  </div>
                </TableCell>
                <TableCell className="p-0 md:p-px">
                  <p className="text-sm md:text-lg text-start text-black relative top-0">MRP: $ 89.95</p>
                </TableCell>
              </TableRow>
              <TableRow className="mt-4 md:mt-0 md:table-row flex flex-wrap gap-y-3">
                <TableCell className="p-0 xl:p-3">
                  <Image 
                    src={"/shop-img1.png"}
                    width={150}
                    height={150}
                    alt="cart-img"
                  />
                </TableCell>
                <TableCell className="p-2 md:p-px">
                  <p className=" font-medium text-start mb-1 text-black">Nike Air Max 97 SE</p>
                  <p className=" font-medium text-start mb-1 text-neutral-400">Men's Shoes</p>
                  <p className=" font-medium text-start mb-1 text-neutral-400">Flat Pewter/Light Bone/Black/White</p>
                  <div className="size-quantity flex flex-wrap items-center gap-2 mb-3">
                    <div className="size-sec flex items-center gap-2">
                    <span className=" font-medium text-start text-neutral-400">
                      Size
                    </span>
                    <Select >
                      <SelectTrigger className="w-[80px] h-[30px]">
                        <SelectValue/>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {/* <SelectLabel>Fruits</SelectLabel> */}
                          <SelectItem value="small" >8</SelectItem>
                          <SelectItem value="medium">9</SelectItem>
                          <SelectItem value="large">10</SelectItem>
                          <SelectItem value="x-large">11</SelectItem>
                          <SelectItem value="xx-large">12</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    </div>
                    <div className="quant-sec flex items-center gap-2">
                    <span className=" font-medium text-start text-neutral-400">
                      Quantity
                    </span>
                      <Input className="w-[80px] h-[30px]" type="number"/>
                    </div>
                  </div>
                  <div className="cart-icons flex gap-2 mt-2">
                    <a href="#"><Image src={"/heart.png"} width={24} height={24} alt="cart-img"/></a>
                    <a href="#"><Image src={"/trash.png"} width={24} height={24} alt="cart-img"/></a>
                  </div>
                </TableCell>
                <TableCell className="p-0 md:p-px">
                  <p className="text-sm md:text-lg text-start text-black ">MRP: $ 169.95</p>
                </TableCell>
              </TableRow >
            </TableBody>
          </Table>
        </div>
        <div className=" col-span-full lg:col-span-4 xl:col-span-3">
          <h3 className="text-2xl font-medium text-start text-black mb-4">
            Summary
          </h3>
          <div className="summary-cart ">
            <div className="flex justify-between mb-4">
              <p>Subtotal</p>
              <p>$ 208.90</p>
            </div>
            <div className="flex justify-between pb-4 border-b-2">
              <p>Estimated Delivery & Handling</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between py-4 mb-4 border-b-2">
              <p>Total</p>
              <p>$ 208.90</p>
            </div>
            <Link href={'/cart/checkout'}><Button className="rounded-full h-16 w-full text-base">Member Checkout</Button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cartsec;
