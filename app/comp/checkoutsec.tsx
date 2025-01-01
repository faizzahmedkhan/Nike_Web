import Image from "next/image";
import { Input } from "../../components/ui/input";
import Link from "next/link";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CheckOut = () => {
  return (
    <main className="">
      <nav className="nav-checkout mx-5 sm:mx-10">
        <div className="grid grid-cols-2 items-center justify-between">
          <div className="col-span-1 nav-logo">
            <Link href={"/"}>
              <Image
                src={"/logo-nike.png"}
                width={79}
                height={79}
                alt="logo-sm"
              />
            </Link>
          </div>
          <div className="col-span-1">
            <div className="heart-bag flex justify-end items-center gap-5">
              <a href="tel:+123456789" className="text-xs sm:text-base ">+921 345 678</a>
              <a href="#">
                <Image src={"/chat.png"} width={20} height={20} alt="" />
              </a>
              <Link href={'/cart'}>
                <Image src={"/bag.png"} width={24} height={24} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <section className="checkout-sec py-5 pb-10 mx-5 sm:mx-10">
        <div className="grid grid-cols-6 md:grid-cols-12 gap-7">
          <div className="col-span-6 lg:col-span-5 lg:col-start-2">
            <Tabs defaultValue="delivery">
              <TabsContent value="delivery">
                <div className="delivery-sec">
                  <div className="check-left-text mb-8">
                    <h3 className="text-xl font-medium text-start text-black mb-4">
                      How would you like to get your order?
                    </h3>
                    <p className="text-neutral-400">
                      Customs regulation for India require a copy of the
                      recipient's KYC. The address on the KYC needs to match the
                      shipping address. Our courier will contact you via
                      SMS/email to obtain a copy of your KYC. The KYC will be
                      stored securely and used solely for the purpose of
                      clearing customs (including sharing it with customs
                      officials) for all orders and returns. If your KYC does
                      not match your shipping address, please click the link for
                      more information.{" "}
                      <Link href={""}>
                        {" "}
                        <u>Learn More</u>{" "}
                      </Link>
                    </p>
                  </div>
                  <div className="deliver-it flex border-black rounded-lg border-2 px-5 py-7 gap-5 2xl:w-3/4 mb-10">
                    <Image
                      src={"/deliver-it.png"}
                      height={20}
                      width={23}
                      alt=""
                    />
                    <p className="font-medium">Deliver It</p>
                  </div>
                  <div className="check-left-form">
                    <h3 className="text-xl font-medium text-start text-black mb-4 ">
                      Enter your name and address:
                    </h3>
                    <div className="form-input grid grid-cols-2 2xl:w-3/4 gap-x-3">
                      <Input
                        className="border-zinc-300 col-span-full rounded-lg border px-5 py-7  mb-6 text-black"
                        placeholder="First Name"
                      />
                      <Input
                        className="border-zinc-300 col-span-full rounded-lg border px-5 py-7 mb-6 text-black"
                        placeholder="Last Name"
                      />
                      <Input
                        className="border-zinc-300 col-span-full rounded-lg border px-5 py-7 mb-6 text-black"
                        placeholder="Address Line 1"
                      />
                      <Input
                        className="border-zinc-300 col-span-full rounded-lg  border px-5 py-7 mb-6 text-black"
                        placeholder="Address Line 2"
                      />
                      <Input
                        className="border-zinc-300 col-span-full rounded-lg border px-5 py-7 mb-6 text-black"
                        placeholder="Address Line 3"
                      />
                      <Input
                        className="border-zinc-300 col-span-full md:col-span-1 rounded-lg border px-5 py-7 mb-6 text-black"
                        placeholder="Postal Code"
                      />
                      <Input
                        className="border-zinc-300 col-span-full md:col-span-1 rounded-lg border px-5 py-7 mb-6 text-black"
                        placeholder="Location"
                      />
                      <Input
                        className="border-zinc-300 col-span-full md:col-span-1 rounded-lg border px-5 py-7 mb-6 text-black"
                        placeholder="Postal Code"
                      />
                      <Input
                        className="border-zinc-300 col-span-full md:col-span-1 rounded-lg border px-5 py-7 mb-6 text-black"
                        placeholder="Location"
                      />
                      <Select>
                        <SelectTrigger className="border-zinc-300 col-span-full md:col-span-1 rounded-lg border px-5 py-7 mb-6 text-black">
                          <SelectValue placeholder="State/City" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Karachi</SelectItem>
                          <SelectItem value="dark">Lahore</SelectItem>
                          <SelectItem value="system">Islamabad</SelectItem>
                        </SelectContent>
                      </Select>
                      <div className="border-zinc-300 col-span-full md:col-span-1 rounded-lg border px-5 py-4 mb-6 text-black">
                        <p className="mb-0">Pakistan</p>
                      </div>
                      <div className="col-span-full flex items-center gap-4 mb-6">
                        <Checkbox id="add-save" />
                        <label htmlFor="add-save" className="">
                          Save this address to my profile
                        </label>
                      </div>
                      <div className="col-span-full flex items-center gap-4 mb-6">
                        <Checkbox id="add-dis" disabled />
                        <label htmlFor="add-dis">
                          Make this my preferred address
                        </label>
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-start text-black my-4 ">
                      What's your contact information?
                    </h3>
                    <div className="form-input grid grid-cols-2 2xl:w-3/4 gap-x-3">
                      <div className="cleft-bottom col-span-full mb-6">
                        <Input
                          className="border-zinc-300  rounded-lg border px-5 py-7 text-black"
                          placeholder="Email"
                        />
                        <p className="text-xs text-neutral-400 ps-5 mt-2">
                          A confirmation email will be sent after checkout.
                        </p>
                      </div>
                      <div className="cleft-bottom col-span-full mb-6">
                        <Input
                          className="border-zinc-300  rounded-lg border px-5 py-7 text-black"
                          placeholder="Phone Number"
                        />
                        <p className="text-xs text-neutral-400 ps-5 mt-2">
                          A carrier might contact you to confirm delivery.
                        </p>
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-start text-black my-4 ">
                      What's your PAN?
                    </h3>
                    <div className="form-input grid grid-cols-2 2xl:w-3/4 gap-x-3">
                      <div className="cleft-bottom col-span-full mb-6">
                        <Input
                          className="border-zinc-300  rounded-lg border px-5 py-7 text-black"
                          placeholder="PAN"
                        />
                        <p className="text-xs text-neutral-400 ps-5 mt-2 mb-4 ">
                          Enter your PAN to enable payment with UPI, Net Banking
                          or local card methods
                        </p>
                        <div className="col-span-full flex items-center gap-4 mb-14">
                          <Checkbox id="pan" className="border-neutral-400" />
                          <label
                            htmlFor="pan"
                            className="text-xs text-neutral-400"
                          >
                            Save PAN details to Nike Profile
                          </label>
                        </div>
                        <div className="col-span-full flex items-start gap-4 mb-14">
                          <Checkbox
                            id="check-n"
                            className="border-neutral-400"
                          />
                          <label
                            htmlFor="check-n"
                            className="text-xs text-neutral-400"
                          >
                            I have read and consent to eShopWorld processing my
                            information in accordance with the{" "}
                            <Link href={""}>
                              {" "}
                              <u>Privacy Statement</u>{" "}
                            </Link>{" "}
                            and{" "}
                            <Link href={""}>
                              {" "}
                              <u>Cookie Policy</u>{" "}
                            </Link>
                            . eShopWorld is a trusted Nike partner.
                          </label>
                        </div>
                        <Button className="rounded-full w-full h-16">
                          {" "}
                          Continue
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsList className="flex-col bg-transparent h-auto w-full items-start">
                <TabsTrigger
                  value="delivery"
                  className="bg-transparent checkout-tabs w-full justify-start text-xl  pb-7 pt-3 "
                >
                  Delivery
                </TabsTrigger>
                <TabsTrigger
                  value="shipping"
                  className="bg-transparent checkout-tabs w-full justify-start text-xl  pb-7 pt-3 "
                >
                  Shipping
                </TabsTrigger>
                <TabsTrigger
                  value="billing"
                  className="bg-transparent checkout-tabs w-full justify-start text-xl  pb-7 pt-3 "
                >
                  Billing
                </TabsTrigger>
                <TabsTrigger
                  value="payment"
                  className="bg-transparent checkout-tabs w-full justify-start text-xl  pb-7 pt-3 "
                >
                  Payment
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div className="col-span-6 xl:col-span-4 ">
            <h3 className="text-2xl font-medium text-start text-black mb-4">
              Order Summary
            </h3>
            <div className="summary-cart ">
              <div className="flex text-neutral-400 justify-between mb-4">
                <p>Subtotal</p>
                <p>$ 208.90</p>
              </div>
              <div className="flex text-neutral-400 justify-between pb-4 border-neutral-200 border-b-2">
                <p>Estimated Delivery & Handling</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between py-4 mb-4 border-neutral-200 border-b-2">
                <p>Total</p>
                <p>$ 208.90</p>
              </div>
              <p className="text-xs">
                (The total reflects the price of your order, including all
                duties and taxes)
              </p>
            </div>
            <div className="cart-sum mt-5">
              <h3 className="text-lg font-semibold text-start text-black mb-4">
                Arrives Mon, 27 Mar - Wed, 12 Apr
              </h3>
              <div className="cs-content">
                <div className="flex mb-5">
                  <Image
                    src={"/sec3_img1.png"}
                    width={200}
                    height={200}
                    alt="img"
                    className="max-w-40"
                  />
                  <div className="cs-text ps-3">
                    <p>
                      Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running
                      Top
                    </p>
                    <p className="text-neutral-400">Qty 1</p>
                    <p className="text-neutral-400">Size L</p>
                    <p className="text-neutral-400">$ 189.5</p>
                  </div>
                </div>
                <div className="flex">
                  <Image
                    src={"/shop-img1.png"}
                    width={200}
                    height={200}
                    alt="img"
                    className="max-w-40"
                  />
                  <div className="cs-text ps-3">
                    <p>Nike Air Max 97 SE Men's Shoes</p>
                    <p className="text-neutral-400">Qty 1</p>
                    <p className="text-neutral-400">Size UK 8</p>
                    <p className="text-neutral-400">$ 389.5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer p-5 lg:py-2 pb-0 bg-black">
          <div className="footer-btm mt-5 pb-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3  text-xs">
              <div className="col-span-1 flex flex-wrap  gap-1 sm:gap-8 items-center md:justify-start justify-center">
                <div className="fb-1 flex items-center sm:gap-2 ">
                  <Image
                    src={"/loc-icon.png"}
                    width={22}
                    height={22}
                    alt="icon"
                  />
                  <p className="text-white ">Pakistan</p>
                </div>
                <p className="text-neutral-400">
                  © 2023 Nike, Inc. All Rights Reserved
                </p>
                <div className="flex fb-right justify-center flex-wrap md:justify-end gap-2  md:gap-5 text-neutral-400 ">
                  <span>Guides</span>
                  <span>Terms of Sale</span>
                  <span>Terms of Use</span>
                  <span>Nike Privacy Policy</span>
                </div>
              </div>
              <div className="col-span-1 ms-auto">
                <Image src={'/payments.png'} height={27} width={600} alt="payment"/>
              </div>
            </div>
          </div>
      </footer>
    </main>
  );
};

export default CheckOut;
