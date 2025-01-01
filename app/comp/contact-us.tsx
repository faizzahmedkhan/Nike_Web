import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const ContactUs = () => {
  return (
    <section className="mx-5 sm:mx-10 lg:mx-24 py-10">
      <div className="contact-heading flex flex-col items-center mb-6">
        <h1 className="text-3xl font-semibold text-center">GET HELP</h1>
        <div className="input-cont relative w-2/3 lg:w-2/5 2xl:w-3/12">
          <Input
            className="border-zinc-300 col-span-full rounded-lg border px-5 py-5 sm:py-7 sm:mb-6"
            placeholder="What can we help you with?"
          />
          <Image
            src={"/light-search.png"}
            height={24}
            width={24}
            alt="search"
            className="absolute top-3 right-3 sm:top-5 sm:right-5"
          />
        </div>
      </div>
      <div className="grid  grid-cols-12 gap-5">
        <div className="col-span-full lg:col-span-8">
          <h3 className="text-xl lg:text-3xl font-semibold mb-5">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h3>
          <div className="contact-left-1 mb-5">
            <p>
              We want to make buying your favourite Nike shoes and gear online
              fast and easy, and we accept the following payment options:
            </p>
            <div className="inner-points mx-5">
              <p>
                Visa, Mastercard, Diners Club, Discover, American Express, Visa
                Electron, Maestro
              </p>
              <p>
                If you enter your PAN information at checkout, you'll be able to
                pay for your order with PayTM or a local credit or debit card.
              </p>
              <p>Apple Pay</p>
            </div>
            <p>
              <Link href={""}>
                <u className="font-semibold">Nike Members</u>
              </Link>
              can store multiple debit or credit cards in their profile for
              faster checkout. If you're not already a Member,
              <Link href={"/sign-up"}>
                <u className="font-semibold">join us</u>
              </Link>
              today.
            </p>
          </div>
          <div className="c-left-btns flex gap-4 mb-5">
            <Button className="rounded-full">JOIN US</Button>
            <Button className="rounded-full">SHOP NIKE</Button>
          </div>
          <div className="contact-left-2 mb-5">
            <h4 className="text-lg font-semibold mb-5">FAQs</h4>
            <div className="faqs mb-5">
              <p className="font-semibold ">
                Does my card need international purchases enabled?
              </p>
              <p className="mb-5 leading-7">
                Yes, we recommend asking your bank to enable international
                purchases on your card. You will be notified at checkout if
                international purchases need to be enabled.
              </p>
              <p>
                Please note, some banks may charge{" "}
                <u>a small transaction fee</u> for international orders.
              </p>
            </div>
            <div className="faqs mb-5">
              <p className="font-semibold ">
                Can I pay for my order with multiple methods?
              </p>
              <p className="mb-5 leading-7">
                No, payment for Nike orders can't be split between multiple
                payment methods.
              </p>
            </div>
            <div className="faqs mb-5">
              <p className="font-semibold ">
                What payment method is accepted for SNKRS orders?
              </p>
              <p className="mb-5 leading-7">
                You can use any accepted credit card to pay for your SNKRS
                order.
              </p>
            </div>
            <div className="faqs mb-5">
              <p className="font-semibold ">
                Why don't I see Apple Pay as an option?
              </p>
              <p className="mb-5 leading-7">
                To see Apple Pay as an option in the Nike App or on Nike.com,
                you'll need to use a compatible Apple device running the latest
                OS, be signed in to your iCloud account and have a supported
                card in your Wallet. Additionally, you'll need to use Safari to
                use Apple Pay on Nike.com.
              </p>
            </div>
            <div className="thumbs-sec mb-4">
              <p>Was this answer helpful</p>
              <ToggleGroup type="single" className="justify-start">
                <ToggleGroupItem value="up">
                    <Image src={'/thumbs-up.png'} height={24} width={24} alt="thumb"/>
                </ToggleGroupItem>
                <ToggleGroupItem value="down">
                    <Image src={'/thumbs-down.png'} height={24} width={24} alt="thumb"/>
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div className="related">
                <h5 className="text-neutral-500">RELATED</h5>
                <div className="rel-points mx-5 pt-5">
                    <p className="font-semibold mb-3"><Link href={''}><u>WHAT ARE NIKE'S DELIVERY OPTIONS?</u></Link></p>
                    <p className="font-semibold"><Link href={''}><u>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</u></Link></p>
                </div>
            </div>
          </div>
        </div>
        <div className="col-span-full lg:col-span-4 2xl:col-span-3 2xl:col-start-9">
            <h2 className="text-3xl font-medium text-center mb-10">CONTACT US</h2>
            <div className="contact-right">
                <div className="cr-1 text-center mb-10">
                    <Image src={'/mobile.png'} width={65} height={65} alt="mobile" className="mx-auto mb-7"/>
                    <p>000 800 919 0566</p>
                    <p className="font-light leading-7">Products & Orders: 24 hours a day, 7 days a week</p>
                    <p className="font-light leading-7">Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
                </div>
                <div className="cr-1 text-center mb-10">
                    <Image src={'/chat-big.png'} width={65} height={65} alt="mobile" className="mx-auto mb-7"/>
                    <p>24 hours a day</p>
                    <p className="font-light leading-7">7 days a week</p>
                </div>
                <div className="cr-1 text-center mb-10">
                    <Image src={'/envelope.png'} width={65} height={65} alt="mobile" className="mx-auto mb-7"/>
                    <p>We'll reply within</p>
                    <p className="font-light leading-7">five business days</p>
                </div>
                <div className="cr-1 text-center mb-10">
                    <Image src={'/balloon.png'} width={65} height={65} alt="mobile" className="mx-auto mb-7"/>
                    <p>STORE LOCATOR</p>
                    <p className="font-light leading-7">Find Nike retail stores near you</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
