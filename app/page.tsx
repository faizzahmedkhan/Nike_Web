import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './comp/ProductCard'
import Navbar from '@/app/comp/navbar'
import Banner from '@/app/comp/banner'
import CarouselSec from '@/app/comp/carousel-1'
import Sec2 from '@/app/comp/sec2'
import Sec3 from '@/app/comp/sec3'
import Sec4 from '@/app/comp/sec4'
import Sec5 from '@/app/comp/sec5'
import Sec6 from '@/app/comp/sec6'
import Footer from '@/app/comp/footer'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Banner/>
      <CarouselSec/>
      <Sec2/>
      <Sec3/>
      <Sec4/>
      <Sec5/>
      <Sec6/>
      <Footer/>
    </main>
  )
}
