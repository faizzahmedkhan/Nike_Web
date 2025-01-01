import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sidebar } from "@/components/ui/sidebar";
import React from "react";
const Filter = () => {
  return (
    <section className="filter ">
      <h3 className="font-semibold text-2xl">New (500)</h3>
      <ScrollArea className="filter-list my-5 sm:pb-5 text-sm font-semibold max-h-60 overflow-y-scroll">
        <ul className="">
          <li>Shoes</li>
          <li>Sports Bras</li>
          <li>Tops & T-Shirts</li>
          <li>Hoodies & Sweatshirts</li>
          <li>Jackets</li>
          <li>Trousers & Tights</li>
          <li>Shorts</li>
          <li>Tracksuits</li>
          <li>Jumpsuits & Rompers</li>
          <li>Skirts & Dresses</li>
          <li>Socks</li>
          <li>Accessories & Equipment</li>
        </ul>
      </ScrollArea>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="py-2 sm:py-4"> Gender</AccordionTrigger>
          <AccordionContent>
            <div className="flex items-center mb-2">
              <Checkbox id="check-1" className=" border-neutral-400 " />
              <label htmlFor="check-1" className="ms-3">
                Men
              </label>
            </div>
            <div className="flex items-center mb-2">
              <Checkbox id="check-2" className=" border-neutral-400 " />
              <label htmlFor="check-2" className="ms-3">
                Women
              </label>
            </div>
            <div className="flex items-center mb-2">
              <Checkbox id="check-3" className=" border-neutral-400 " />
              <label htmlFor="check-3" className="ms-3">
                Unisex
              </label>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="py-2 sm:py-4"> Kids</AccordionTrigger>
          <AccordionContent>
            <div className="flex items-center mb-2">
              <Checkbox id="check-4" className=" border-neutral-400 " />
              <label htmlFor="check-4" className="ms-3">
                Boys
              </label>
            </div>
            <div className="flex items-center mb-2">
              <Checkbox id="check-5" className=" border-neutral-400 " />
              <label htmlFor="check-5" className="ms-3">
                Girls
              </label>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="py-2 sm:py-4"> Shop By Price</AccordionTrigger>
          <AccordionContent>
            <div className="flex items-center mb-2">
              <Checkbox id="check-6" className=" border-neutral-400 " />
              <label htmlFor="check-6" className="ms-3">
                Under $250
              </label>
            </div>
            <div className="flex items-center mb-2">
              <Checkbox id="check-7" className=" border-neutral-400 " />
              <label htmlFor="check-7" className="ms-3">
                $250 - $
              </label>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Filter;
