import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Banner = () => {
  return (
    <section className=''>
        <div className="ban_top text-center border-b-2 py-2 sm:py-3 bg-zinc-100">
            <h3 className='font-semibold mb-2'>Hello Nike App</h3>
            <p className='text-xs'>Download the app to access everything Nike. <a href="#" > <u>Get Your Great</u> </a></p>
        </div>
        <div className="ban-img w-full  sm:px-10 ">
            <img src="banner.png" className=' w-full object-cover object-center ' alt="" />
        </div>
        <div className="ban-bottom pt-4 sm:pt-7 md:pt-16 mx-5 sm:mx-10">
            <div className="ban-heading text-center">
                <p className='font-semibold'>First Look</p>
                <h1 className='text-2xl sm:text-5xl md:text-6xl font-semibold'>NIKE AIR MAX PULSE</h1>
                <p className='pt-2 md:pt-8'>Extreme Comfort. Hyper durable. Max volume. Introducing the Air Max Pulse </p>
                <p>—designed to push you past your limits and help you go to the max.</p>
            </div>
            <div className="ban-btns justify-center py-3 md:py-8 flex gap-2">
                <Button className='rounded-full sm:p-5 p-3 text-sm sm:text-base' >Notify Me</Button>
                <Button className='rounded-full sm:p-5 p-3 text-sm sm:text-base' ><Link href={'/shop'}>Shop Air Max</Link></Button>
            </div>
        </div>
    </section>
  )
}

export default Banner