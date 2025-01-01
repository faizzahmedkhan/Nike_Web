import Link from 'next/link'
import React from 'react'

const Shopsec = () => {
  return (
    <section className='shop-sec'>
        <div className="flex gap-5 sm:justify-end 2xl:pe-36">
            <div className='flex'>
                <p>Hide Filters</p>
                <img src="filter-1.png" alt="" />
            </div>
            <div className='flex'>
                <p>Sort By</p>
                <img src="fliter-2.png" className='object-contain' alt="" />
            </div>
        </div>
        <div className="shop-imgs mt-5">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 gap-y-10">
                <div className="col-span-1 ">
                    <div className="si-img mb-3">
                        <Link href={'/shop/Product-Detail'}><img src="shop-img1.png" alt="img" /></Link>
                    </div>
                    <p className='text-red-700 text-sm font-semibold'>Just In</p>
                    <p className=' text-sm font-semibold'>Nike Air Force 1 Mid '07</p>
                    <p className='text-neutral-400 text-sm '>Men's Shoes</p>
                    <p className='text-neutral-400 text-sm mb-2'>1 Colour</p>
                    <p className=' text-sm font-semibold'>MRP : $ 107.95</p>
                </div>
                <div className="col-span-1 ">
                    <div className="si-img mb-3">
                        <Link href={'/shop/Product-Detail'}><img src="shop-img2.png" alt="img" /></Link>
                    </div>
                    <p className='text-red-700 text-sm font-semibold'>Just In</p>
                    <p className=' text-sm font-semibold'>Nike Court Vision Low Next Nature</p>
                    <p className='text-neutral-400 text-sm '>Men's Shoes</p>
                    <p className='text-neutral-400 text-sm mb-2'>1 Colour</p>
                    <p className=' text-sm font-semibold'>MRP : $ 49.95</p>
                </div>
                <div className="col-span-1 ">
                    <div className="si-img mb-3">
                        <Link href={'/shop/Product-Detail'}><img src="shop-img3.png" alt="img" /></Link>
                    </div>
                    <p className='text-red-700 text-sm font-semibold'>Just In</p>
                    <p className=' text-sm font-semibold'>Nike Air Force 1 PLT.AF.ORM</p>
                    <p className='text-neutral-400 text-sm '>Men's Shoes</p>
                    <p className='text-neutral-400 text-sm mb-2'>1 Colour</p>
                    <p className=' text-sm font-semibold'>MRP : $ 86.95</p>
                </div>
                <div className="col-span-1">
                    <div className="si-img mb-3">
                        <Link href={'/shop/Product-Detail'}><img src="shop-img4.png" alt="img" /></Link>
                    </div>
                    <p className='text-red-700 text-sm font-semibold'>Just In</p>
                    <p className=' text-sm font-semibold'>Nike Air Force 1 React</p>
                    <p className='text-neutral-400 text-sm '>Men's Shoes</p>
                    <p className='text-neutral-400 text-sm mb-2'>1 Colour</p>
                    <p className=' text-sm font-semibold'>MRP : $ 132.95</p>
                </div>
                <div className="col-span-1">
                    <div className="si-img mb-3">
                        <Link href={'/shop/Product-Detail'}><img src="shop-img5.png" alt="img" /></Link>
                    </div>
                    <p className='text-red-700 text-sm font-semibold'>Promo Exclusion</p>
                    <p className=' text-sm font-semibold'>Air Jordan 1 Elevate Low</p>
                    <p className='text-neutral-400 text-sm '>Women's Shoes</p>
                    <p className='text-neutral-400 text-sm mb-2'>1 Colour</p>
                    <p className=' text-sm font-semibold'>MRP : $ 118.95</p>
                </div>
                <div className="col-span-1">
                    <div className="si-img mb-3">
                        <Link href={'/shop/Product-Detail'}><img src="shop-img6.png" alt="img" /></Link>
                    </div>
                    <p className='text-red-700 text-sm font-semibold'>Just In</p>
                    <p className=' text-sm font-semibold'>Nike Standard Issue</p>
                    <p className='text-neutral-400 text-sm '>Women's Basketball Jersey</p>
                    <p className='text-neutral-400 text-sm mb-2'>1 Colour</p>
                    <p className=' text-sm font-semibold'>MRP : $ 280.95</p>
                </div>
                <div className="col-span-1">
                    <div className="si-img mb-3">
                        <Link href={'/shop/Product-Detail'}><img src="shop-img7.png" alt="img" /></Link>
                    </div>
                    <p className='text-red-700 text-sm font-semibold'>Promo Exclusion</p>
                    <p className=' text-sm font-semibold'>Nike Dunk Low Retro SE</p>
                    <p className='text-neutral-400 text-sm '>Men's Shoes</p>
                    <p className='text-neutral-400 text-sm mb-2'>1 Colour</p>
                    <p className=' text-sm font-semibold'>MRP : $ 280.95</p>
                </div>
                <div className="col-span-1">
                    <div className="si-img mb-3">
                        <Link href={'/shop/Product-Detail'}><img src="shop-img8.png" alt="img" /></Link>
                    </div>
                    <p className='text-red-700 text-sm font-semibold'>Sustainable Materials</p>
                    <p className=' text-sm font-semibold'>Nike Dri-FIT UV Hyverse</p>
                    <p className='text-neutral-400 text-sm '>Men's Short-Sleeve Graphic Fitness Top</p>
                    <p className='text-neutral-400 text-sm mb-2'>1 Colour</p>
                    <p className=' text-sm font-semibold'>MRP : $ 280.95</p>
                </div>
                <div className="col-span-1">
                    <div className="si-img mb-3">
                        <Link href={'/shop/Product-Detail'}><img src="shop-img9.png" alt="img" /></Link>
                    </div>
                    <p className='text-red-700 text-sm font-semibold'>Just In</p>
                    <p className=' text-sm font-semibold'>Nike Court Vision Low</p>
                    <p className='text-neutral-400 text-sm '>Men's Shoes</p>
                    <p className='text-neutral-400 text-sm mb-2'>1 Colour</p>
                    <p className=' text-sm font-semibold'>MRP : $ 280.95</p>
                </div>
                <div className="col-span-1">
                    <div className="si-img mb-3">
                        <Link href={'/shop/Product-Detail'}><img src="shop-img10.png" alt="img" /></Link>
                    </div>
                    <p className='text-red-700 text-sm font-semibold'>Just In</p>
                    <p className=' text-sm font-semibold'>Nike Dri-FIT Ready</p>
                    <p className='text-neutral-400 text-sm '>Men's Short-Sleeve Fitness Top</p>
                    <p className='text-neutral-400 text-sm mb-2'>3 Colour</p>
                    <p className=' text-sm font-semibold'>MRP : $ 280.95</p>
                </div>
                <div className="col-span-1">
                    <div className="si-img mb-3">
                        <Link href={'/shop/Product-Detail'}><img src="shop-img11.png" alt="img" /></Link>
                    </div>
                    <p className='text-red-700 text-sm font-semibold'>Just In</p>
                    <p className=' text-sm font-semibold'>Nike One Leak Protection: Period</p>
                    <p className='text-neutral-400 text-sm '>Women's Mid-Rise 18cm (approx.) Biker Shorts</p>
                    <p className='text-neutral-400 text-sm mb-2'>2 Colour</p>
                    <p className=' text-sm font-semibold'>MRP : $ 280.95</p>
                </div>
                <div className="col-span-1">
                    <div className="si-img mb-3">
                        <Link href={'/shop/Product-Detail'}><img src="shop-img12.png" alt="img" /></Link>
                    </div>
                    <p className='text-red-700 text-sm font-semibold'>Just In</p>
                    <p className=' text-sm font-semibold'>Nike Air Force 1 LV8 3</p>
                    <p className='text-neutral-400 text-sm '>Older Kids' Shoe</p>
                    <p className='text-neutral-400 text-sm mb-2'>1 Colour</p>
                    <p className=' text-sm font-semibold'>MRP : $ 280.95</p>
                </div>
                <div className="col-span-1">
                    <div className="si-img mb-3">
                        <Link href={'/shop/Product-Detail'}><img src="shop-img13.png" alt="img" /></Link>
                    </div>
                    <p className='text-red-700 text-sm font-semibold'>Just In</p>
                    <p className=' text-sm font-semibold'>Nike Blazer Low Platform</p>
                    <p className='text-neutral-400 text-sm '>Women's Shoes</p>
                    <p className='text-neutral-400 text-sm mb-2'>1 Colour</p>
                    <p className=' text-sm font-semibold'>MRP : $ 280.95</p>
                </div>
                <div className="col-span-1">
                    <div className="si-img mb-3">
                        <Link href={'/shop/Product-Detail'}><img src="shop-img14.png" alt="img" /></Link>
                    </div>
                    <p className='text-red-700 text-sm font-semibold'>Just In</p>
                    <p className=' text-sm font-semibold'>Nike Air Force 1 '07</p>
                    <p className='text-neutral-400 text-sm '>Women's Shoe</p>
                    <p className='text-neutral-400 text-sm mb-2'>2 Colours</p>
                    <p className=' text-sm font-semibold'>MRP : $ 280.95</p>
                </div>
                <div className="col-span-1">
                    <div className="si-img mb-3">
                        <Link href={'/shop/Product-Detail'}><img src="shop-img15.png" alt="img" /></Link>
                    </div>
                    <p className='text-red-700 text-sm font-semibold'>Just In</p>
                    <p className=' text-sm font-semibold'>Nike Pro Dri-FIT</p>
                    <p className='text-neutral-400 text-sm '>Men's Tight-Fit Sleeveless Top</p>
                    <p className='text-neutral-400 text-sm mb-2'>1 Colour</p>
                    <p className=' text-sm font-semibold'>MRP : $ 280.95</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Shopsec