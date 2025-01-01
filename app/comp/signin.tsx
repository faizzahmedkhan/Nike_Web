import Image from 'next/image'
import React from 'react'

import { Input } from "../../components/ui/input";
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
const Signin = () => {
  return (
    <section className='mx-5 sm:mx-10 pt-5 pb-20'>
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 justify-center">
            <div className="col-span-1 w-3/4 mx-auto lg:col-start-2 xl:col-start-3 flex flex-col items-center">
                <Image src={'/logo-nike.png'} width={55} height={25} alt='logo' />
                <h2 className='text-black text-center font-bold text-xl w-4/5 xl:w-3/4 2xl:w-3/5 mb-6'>YOUR ACCOUNT FOR EVERYTHING NIKE</h2>
                <Input className="border-zinc-300 col-span-full rounded-lg border px-5 py-5  mb-6 text-black"placeholder="Email Address"/>
                <Input className="border-zinc-300 col-span-full rounded-lg border px-5 py-5  mb-6 text-black"placeholder="Password"/>
                <div className="flex mb-6 items-center justify-between w-full">
                    <div className="flex gap-3">
                    <Checkbox id='check-sign' className='border-neutral-400'/>
                    <label htmlFor="check-sign" className='text-xs text-neutral-500'>Keep me signed in</label>
                    </div>
                    <Link href={''} className='text-xs text-neutral-400'>Forgotten your password?</Link>
                </div>
                <p className='mb-6 text-neutral-400 text-xs text-center'>By logging in, you agree to Nike's<Link href={''}> <u> Privacy Policy</u> </Link> and <Link href={''}> <u>Terms of Use</u> </Link>.</p>
                <Button className='w-full mb-6'>SIGN IN</Button>
                <p className="text-sm text-neutral-400">Not a Member? <Link href={'/sign-up'}><u className='text-black'>Join Us.</u></Link></p>
            </div>
        </div>
    </section>
  )
}

export default Signin