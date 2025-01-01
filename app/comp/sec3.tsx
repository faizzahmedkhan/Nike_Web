import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
const Sec3 = () => {
  return (
    <section className="sec_3 mx-5 sm:mx-10 py-4 sm:py-6 md:py-12">
      <div className="s3_top">
        <h3 className="text-xl font-semibold">Gear Up</h3>
      </div>
      <div className="grid grid-cols-2">
        <div className="mb-5 col-span-full lg:col-span-1">
          <div className="top-right flex gap-3 justify-end items-center">
            <h3 className="text-lg ">Shop Men's</h3>
            <div className="top-right-btns flex gap-3">
              <a href="#" className="bg-zinc-100 p-3 rounded-full inline-block">
                <img src="arrow-left.png" alt="img" className="rounded-full" />
              </a>
              <a href="#" className="bg-zinc-200 p-3 rounded-full inline-block">
                <img src="arrow-right.png" alt="img" className="rounded-full" />
              </a>
            </div>
          </div>
          <Carousel className=" mt-4 ps-1 lg:ps-10">
            <CarouselContent className="">
              <CarouselItem className="basis-full sm:basis-1/3  lg:basis-1/2 max-w-80 xl:basis-1/3  ">
                <div className="item-img">
                  <img src="sec3_img1.png" alt="img" />
                </div>
                <div className="item-text mt-4 pe-3 ">
                  <div className="it-1 flex justify-between">
                    <p className="font-semibold">
                      Nike Dri-FIT ADV TechKnit Ultra
                    </p>
                    <p className="font-semibold">$13.95</p>
                  </div>
                  <p className="mt-3 text-slate-500">
                    Men's Short-Sleeve Running Top
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-full sm:basis-1/3  lg:basis-1/2 max-w-80 xl:basis-1/3">
                <div className="item-img">
                  <img src="sec3_img2.png" alt="img" />
                </div>
                <div className="item-text mt-4 pe-3 ">
                  <div className="it-1 flex justify-between">
                    <p className="font-semibold">Nike Dri-FIT Challenger</p>
                    <p className="font-semibold">$13.95</p>
                  </div>
                  <p className="mt-3 text-slate-500">
                    Men's 18cm (approx.) 2-in-1 Versatile Shorts
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-full sm:basis-1/3  lg:basis-1/2 max-w-80 xl:basis-1/3  ">
                <div className="item-img">
                  <img src="sec3_img1.png" alt="img" />
                </div>
                <div className="item-text mt-4 pe-3 ">
                  <div className="it-1 flex justify-between">
                    <p className="font-semibold">
                      Nike Dri-FIT ADV TechKnit Ultra
                    </p>
                    <p className="font-semibold">$13.95</p>
                  </div>
                  <p className="mt-3 text-slate-500">
                    Men's Short-Sleeve Running Top
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-full sm:basis-1/3  lg:basis-1/2 max-w-80 xl:basis-1/3">
                <div className="item-img">
                  <img src="sec3_img2.png" alt="img" />
                </div>
                <div className="item-text mt-4 pe-3 ">
                  <div className="it-1 flex justify-between">
                    <p className="font-semibold">Nike Dri-FIT Challenger</p>
                    <p className="font-semibold">$13.95</p>
                  </div>
                  <p className="mt-3 text-slate-500">
                    Men's 18cm (approx.) 2-in-1 Versatile Shorts
                  </p>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
        <div className="mb-5 col-span-full lg:col-span-1 ">
          <div className="top-right flex gap-3 justify-end items-center">
            <h3 className="text-lg ">Shop Women's</h3>
            <div className="top-right-btns flex gap-3">
              <a href="#" className="bg-zinc-100 p-3 rounded-full inline-block">
                <img src="arrow-left.png" alt="img" className="rounded-full" />
              </a>
              <a href="#" className="bg-zinc-200 p-3 rounded-full inline-block">
                <img src="arrow-right.png" alt="img" className="rounded-full" />
              </a>
            </div>
          </div>
          <Carousel className=" mt-4 ps-1 lg:ps-10">
            <CarouselContent className="">
              <CarouselItem className="basis-full sm:basis-1/3 lg:basis-1/2 max-w-80 xl:basis-1/3  ">
                <div className="item-img">
                  <img src="sec3_img3.png" alt="img" />
                </div>
                <div className="item-text mt-4 pe-3 ">
                  <div className="it-1 flex justify-between">
                    <p className="font-semibold">
                      Nike Dri-FIT ADV TechKnit Ultra
                    </p>
                    <p className="font-semibold">$13.95</p>
                  </div>
                  <p className="mt-3 text-slate-500">
                    Men's Short-Sleeve Running Top
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-full sm:basis-1/3 lg:basis-1/2 max-w-80 xl:basis-1/3">
                <div className="item-img">
                  <img src="sec3_img4.png" alt="img" />
                </div>
                <div className="item-text mt-4 pe-3 ">
                  <div className="it-1 flex justify-between">
                    <p className="font-semibold">Nike Dri-FIT Challenger</p>
                    <p className="font-semibold">$13.95</p>
                  </div>
                  <p className="mt-3 text-slate-500">
                    Men's 18cm (approx.) 2-in-1 Versatile Shorts
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-full sm:basis-1/3 lg:basis-1/2 max-w-80 xl:basis-1/3  ">
                <div className="item-img">
                  <img src="sec3_img3.png" alt="img" />
                </div>
                <div className="item-text mt-4 pe-3 ">
                  <div className="it-1 flex justify-between">
                    <p className="font-semibold">
                      Nike Dri-FIT ADV TechKnit Ultra
                    </p>
                    <p className="font-semibold">$13.95</p>
                  </div>
                  <p className="mt-3 text-slate-500">
                    Men's Short-Sleeve Running Top
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-full sm:basis-1/3 lg:basis-1/2 max-w-80 xl:basis-1/3">
                <div className="item-img">
                  <img src="sec3_img4.png" alt="img" />
                </div>
                <div className="item-text mt-4 pe-3 ">
                  <div className="it-1 flex justify-between">
                    <p className="font-semibold">Nike Dri-FIT Challenger</p>
                    <p className="font-semibold">$13.95</p>
                  </div>
                  <p className="mt-3 text-slate-500">
                    Men's 18cm (approx.) 2-in-1 Versatile Shorts
                  </p>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Sec3;
