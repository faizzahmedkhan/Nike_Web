import React from 'react'

const Sec6 = () => {
  return (
    <section className="sec_6 py-10 mx-5 lg:mx-10 ">
        <div className="grid grid-cols-8 xl:grid-cols-6 px-3 justify-center gap-y-5">
            <div className="s6-list col-span-4 sm:col-span-3 md:col-span-2 xl:col-span-1 xl:col-start-2">
                <ul className='flex flex-col gap-2'>
                    <p className="font-semibold mb-3">Icons</p>
                    <li className='text-neutral-400 '>Air Force 1</li>
                    <li className='text-neutral-400 '>Huarache</li>
                    <li className='text-neutral-400 '>Air Max 90</li>
                    <li className='text-neutral-400 '>Air Max 95</li>
                </ul>
            </div>
            <div className="s6-list col-span-4 sm:col-span-3 md:col-span-2 xl:col-span-1">
                <ul className='flex flex-col gap-2'>
                    <p className="font-semibold mb-3">Shoes</p>
                    <li className='text-neutral-400 '>All Shoes</li>
                    <li className='text-neutral-400 '>Custom Shoes</li>
                    <li className='text-neutral-400 '>Jordan Shoes</li>
                    <li className='text-neutral-400 '>Running Shoes</li>
                </ul>
            </div>
            <div className="s6-list col-span-4 sm:col-span-3 md:col-span-2 xl:col-span-1">
                <ul className='flex flex-col gap-2'>
                    <p className="font-semibold mb-3">Clothing</p>
                    <li className='text-neutral-400 '>All Clothing</li>
                    <li className='text-neutral-400 '>Modest Wear</li>
                    <li className='text-neutral-400 '>Hoodies & Pullovers</li>
                    <li className='text-neutral-400 '>Shirts & Tops</li>
                </ul>
            </div>
            <div className="s6-list col-span-4 sm:col-span-3 md:col-span-2 xl:col-span-1">
                <ul className='flex flex-col gap-2'>
                    <p className="font-semibold mb-3">Kids'</p>
                    <li className='text-neutral-400 '>Infant & Toddler Shoes</li>
                    <li className='text-neutral-400 '>Kids' Shoes</li>
                    <li className='text-neutral-400 '>Kids' Jordan Shoes</li>
                    <li className='text-neutral-400 '>Kids' Basketball Shoes</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Sec6