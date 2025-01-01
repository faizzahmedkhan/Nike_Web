import React from "react";
import { Button } from "../../components/ui/button";

const Sec5 = () => {
  return (
    <section className="sec_5 py-10 mx-5 lg:mx-10 ">
      <div className="s5_top">
        <h3 className="text-xl font-semibold">The Essentials</h3>
      </div>
      <div className="s5_img_sec mt-5">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-2 justify-center">
          <div className="col-span-1 ">
            <div className="s5_img relative w-fit mx-auto">
              <img src="s5-img1.png" className="mx-auto" alt="img"/>
              <Button className=" gender-btn absolute bottom-10 bg-white text-black rounded-full px-6 left-14 xl:left-32 hover:bg-slate-100">
                Men's
              </Button>
            </div>
          </div>
          <div className="col-span-1">
            <div className="s5_img relative w-fit mx-auto">
              <img src="s5-img2.png" className="mx-auto" alt="img" />
              <Button className=" gender-btn absolute bottom-10 bg-white text-black rounded-full px-6 left-14 xl:left-32 hover:bg-slate-100">
                Women's
              </Button>
            </div>
          </div>
          <div className="col-span-1">
            <div className="s5_img relative w-fit mx-auto">
              <img src="s5-img3.png" className="mx-auto" alt="img" />
              <Button className=" gender-btn absolute bottom-10 bg-white text-black rounded-full px-6 left-14 xl:left-32 hover:bg-slate-100 ">
                Kids'
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec5;
