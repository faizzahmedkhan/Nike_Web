import React from 'react'
import { Button } from '../../components/ui/button'

const Sec2 = () => {
  return (
    <section className="sec_2 mx-5 lg:mx-10 py-4 sm:py-6 md:py-12">
        <div className="s2_top">
        <h3 className="text-xl font-semibold">Featured</h3>
        </div>
        <div className="s2_img">
            <img src="sec2_img.png" className='mx-auto' alt="img" />
        </div>
        <div className="ban-bottom pt-4 sm:pt-7 md:pt-16">
            <div className="ban-heading text-center">
                <h2 className='text-2xl sm:text-5xl md:text-6xl font-semibold'>STEP INTO WHAT FEELS GOOD</h2>
                <p className='pt-2 md:pt-8'>Cause everyone should know the feeling of running in that perfect pair.</p>
            </div>
            <div className="ban-btns justify-center py-3 md:py-8 flex">
                <Button className='rounded-full'>Find Your Store</Button>
            </div>
        </div>
    </section>
  )
}

export default Sec2