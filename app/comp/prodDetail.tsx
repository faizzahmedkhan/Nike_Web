import React from 'react'
import Navbar from './navbar'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const ProdDetail = () => {
  return (
    <section className='py-10 sm:py-20 md:py-32 mx-5  lg:mx-20'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5">
        <div className="col-span-1">
          <Image src={'/detail-img.png'} width={653} height={653} alt='img' className='h-11/12  w-auto md:w-3/4 md:h-auto mx-auto md:ms-auto md:max-w-full'/>
        </div>
        <div className="col-span-1">
            <div className="detail-text lg:w-3/4 ps-5 lg:ps-0 xl:w-2/3 lg:mx-auto 2xl:me-auto text-center md:text-start">
              <h1 className=' uppercase font-semibold ps-0 text-3xl xl:text-4xl 2xl:text-6xl'>Nike Air Force 1 
              PLATFORM</h1>
              <p className='leading-6 text-sm md:text-base md:leading-7 lg:leading-8 xl:leading-9'>Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.</p>
              <h2 className='text-2xl md:text-3xl lg:text-4xl my-2 md:my-5'>$99.95</h2>
              <Link href={'/cart'}><Button className='relative rounded-full'> <Image src={'/cart.png'} width={27} height={27} alt='cart'></Image> Add to Cart</Button></Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ProdDetail