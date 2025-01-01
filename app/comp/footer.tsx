import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-5 lg:p-10 pb-0 bg-black">
      <div className="grid grid-cols-12 gap-y-7">
        <div className="col-span-full sm:text-start text-center sm:col-span-6 lg:col-span-3 ">
          <ul className="text-white flex flex-col gap-4 text-sm">
            <li>FIND A STORE</li>
            <li>BECOME A MEMBER</li>
            <li>SIGN UP FOR EMAIL</li>
            <li>Send Us Feedback</li>
            <li>STUDENT DISCOUNTS</li>
          </ul>
        </div>
        <div className="col-span-full sm:text-start text-center sm:col-span-6 lg:col-span-3 ">
          <ul className="text-opacity-75 text-neutral-400 text-sm flex flex-col gap-3 ">
            <h3 className="text-white ">GET HELP</h3>
            <li>Order Status</li>
            <li>Delivery</li>
            <li>Returns</li>
            <li>Payment Options</li>
            <li>Contact Us On Nike.com Inquiries</li>
            <li>Contact Us On All Other Inquiries</li>
          </ul>
        </div>
        <div className="col-span-full sm:text-start text-center sm:col-span-6 lg:col-span-2 ">
          <ul className="text-opacity-75 text-neutral-400 flex text-sm flex-col gap-3 ">
            <h3 className="text-white">ABOUT NIKE</h3>
            <li>News</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Sustainability</li>
          </ul>
        </div>
        <div className="col-span-full sm:text-start text-center sm:col-span-6 lg:col-span-4 lg:col-start-9">
          <div className="icons flex gap-4 justify-center sm:justify-start lg:justify-end">
            <Image src={'/social-icon.png'} width={30}height={31} alt="icon" />
            <Image src={'/social-icon1.png'} width={30}height={31} alt="icon" />
            <Image src={'/social-icon2.png'} width={30}height={31} alt="icon" />
            <Image src={'/social-icon3.png'} width={30}height={31} alt="icon" />
          </div>
        </div>
      </div>
        <div className="footer-btm mt-5 pb-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3  text-xs">
            <div className="col-span-1 flex flex-wrap  gap-1 sm:gap-8 items-center md:justify-start justify-center">
              <div className="fb-1 flex items-center sm:gap-2 ">
              <Image src={'/loc-icon.png'} width={22}height={22} alt="icon" />
                <p className="text-white ">Pakistan</p>
              </div>
              <p className="text-neutral-400">© 2023 Nike, Inc. All Rights Reserved</p>
            </div>
            <div className="col-span-1">
                <div className="flex fb-right justify-center flex-wrap md:justify-end gap-2  md:gap-5 text-neutral-400 ">
                    <span>Guides</span>
                    <span>Terms of Sale</span>
                    <span>Terms of Use</span>
                    <span>Nike Privacy Policy</span>
                </div>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
