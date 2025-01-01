import React from 'react'
import Filter from '../comp/filter'
import Shopsec from '../comp/shopsec'
import Navbar from '@/app/comp/navbar'
import Footer from '../comp/footer'

const Shop = () => {
  return (
    <main>
        <Navbar/>
        <section className='grid gap-y-8  sm:grid-cols-3 mx-5 lg:mx-10  py-10 pb-16 gap-3  md:grid-cols-12 sm:gap-11'>
            <div className="sm:col-span-1 md:col-span-3 lg:col-span-2">
                <Filter/>
            </div>
            <div className="sm:col-span-2 md:col-span-9 lg:col-span-10">
                <Shopsec/>
            </div>
        </section>
        <Footer/>
    </main>
  )
}

export default Shop