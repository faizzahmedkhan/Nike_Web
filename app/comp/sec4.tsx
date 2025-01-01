import React from "react";
import { Button } from '../../components/ui/button'
import Link from "next/link";

const Sec4 = () => {
  return (
    <section className="sec_4 mx-5 lg:mx-10 sm:py-6 md:py-12">
      <div className="s4_top">
        <h3 className="text-xl font-semibold">Don't Miss</h3>
      </div>
      <div className="s4_img">
        <img src="sec4-img.png" className="mx-auto" alt="" />
      </div>
      <div className="ban-bottom pt-4 sm:pt-7 md:pt-16">
            <div className="ban-heading text-center">
                <h1 className='text-2xl sm:text-5xl md:text-6xl font-semibold'>FLIGHT ESSENTIALS</h1>
                <p className='pt-2 md:pt-8'>Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
            </div>
            <div className="ban-btns justify-center py-3 md:py-8 flex">
                <Button className='rounded-full'><Link href={'/shop'}>Shop</Link></Button>
            </div>
        </div>
    </section>
  );
};

export default Sec4;
