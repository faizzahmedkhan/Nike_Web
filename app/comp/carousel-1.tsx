import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { Button } from "../../components/ui/button";

const CarouselSec = () => {
  return (
    <section className="carousel-sec py-4 sm:py-6 md:py-12">
      <div className="carousel-top flex items-center justify-between mx-5 lg:mx-10 ">
        <div className="top-left">
          <h3 className="text-xl font-semibold">Best Of Air Max</h3>
        </div>
        <div className="top-right flex gap-3 items-center">
          <h3 className="text-lg ">Shop</h3>
          <div className="top-right-btns flex gap-3">
            <a href="#" className="bg-zinc-100 p-3 rounded-full inline-block">
              <img src="arrow-left.png" alt="img" className="rounded-full" />
            </a>
            <a href="#" className="bg-zinc-200 p-3 rounded-full inline-block">
              <img src="arrow-right.png" alt="img" className="rounded-full" />
            </a>
          </div>
        </div>
      </div>
      <div className="carousel_cont mx-5 lg:mx-10  mt-5">
        <Carousel className=" lg:ps-10">
          <CarouselContent className="">
            <CarouselItem className="max-w-80 mx-auto basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="item-img">
                <img src="carousel-1.png" alt="img" />
              </div>
              <div className="item-text mt-4 pe-3 ">
                <div className="it-1 flex justify-between">
                    <p className="font-semibold">Nike Air Max Pulse</p>
                    <p className="font-semibold">$13.95</p>
                </div>
                <p className="mt-3 text-slate-500">Women's Shoes</p>
              </div>
            </CarouselItem>
            <CarouselItem className="max-w-80 mx-auto basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="item-img">
                <img src="carousel-2.png" alt="img" />
              </div>
              <div className="item-text mt-4 pe-3 ">
                <div className="it-1 flex justify-between">
                    <p className="font-semibold">Nike Air Max 97 SE</p>
                    <p className="font-semibold">$16.95</p>
                </div>
                <p className="mt-3 text-slate-500">Women's Shoes</p>
              </div>
            </CarouselItem>
            <CarouselItem className="max-w-80 mx-auto basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="item-img">
                <img src="carousel-3.png" alt="img" />
              </div>
              <div className="item-text mt-4 pe-3 ">
                <div className="it-1 flex justify-between">
                    <p className="font-semibold">Nike Air Max Pulse</p>
                    <p className="font-semibold">$13.95</p>
                </div>
                <p className="mt-3 text-slate-500">Women's Shoes</p>
              </div>
            </CarouselItem>
            <CarouselItem className="max-w-80 mx-auto basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="item-img">
                <img src="carousel-2.png" alt="img" />
              </div>
              <div className="item-text mt-4 pe-3 ">
                <div className="it-1 flex justify-between">
                    <p className="font-semibold">Nike Air Max 97 SE</p>
                    <p className="font-semibold">$16.95</p>
                </div>
                <p className="mt-3 text-slate-500">Women's Shoes</p>
              </div>
            </CarouselItem>
            <CarouselItem className="max-w-80 mx-auto basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="item-img">
                <img src="carousel-1.png" alt="img" />
              </div>
              <div className="item-text mt-4 pe-3 ">
                <div className="it-1 flex justify-between">
                    <p className="font-semibold">Nike Air Max Pulse</p>
                    <p className="font-semibold">$13.95</p>
                </div>
                <p className="mt-3 text-slate-500">Women's Shoes</p>
              </div>
            </CarouselItem>
            <CarouselItem className="max-w-80 mx-auto basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="item-img">
                <img src="carousel-2.png" alt="img" />
              </div>
              <div className="item-text mt-4 pe-3 ">
                <div className="it-1 flex justify-between">
                    <p className="font-semibold">Nike Air Max 97 SE</p>
                    <p className="font-semibold">$16.95</p>
                </div>
                <p className="mt-3 text-slate-500">Women's Shoes</p>
              </div>
            </CarouselItem>
            <CarouselItem className="max-w-80 mx-auto basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="item-img">
                <img src="carousel-3.png" alt="img" />
              </div>
              <div className="item-text mt-4 pe-3 ">
                <div className="it-1 flex justify-between">
                    <p className="font-semibold">Nike Air Max Pulse</p>
                    <p className="font-semibold">$13.95</p>
                </div>
                <p className="mt-3 text-slate-500">Women's Shoes</p>
              </div>
            </CarouselItem>
            <CarouselItem className="max-w-80 mx-auto basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="item-img">
                <img src="carousel-2.png" alt="img" />
              </div>
              <div className="item-text mt-4 pe-3 ">
                <div className="it-1 flex justify-between">
                    <p className="font-semibold">Nike Air Max 97 SE</p>
                    <p className="font-semibold">$16.95</p>
                </div>
                <p className="mt-3 text-slate-500">Women's Shoes</p>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default CarouselSec;
