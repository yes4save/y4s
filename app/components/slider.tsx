"use client"

import React from "react"
import Autoplay from "embla-carousel-autoplay"

import { ArrowRight } from 'lucide-react';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

import Image from "next/image"

import Link from "next/link";

import image1 from '@/public/4.jpg'
import image2 from '@/public/10.jpg'
import image3 from '@/public/2.jpg'
import image4 from '@/public/1.jpg'
import image5 from '@/public/7.jpg'
import image6 from '@/public/5.jpg'
import image7 from '@/public/3.jpg'
import image8 from '@/public/6.jpg'
import image9 from '@/public/9.jpg'
import image10 from '@/public/8.jpg'


export function Slider() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))
  

  return (
    <div className="overflow-hidden px-10 py-14 bg-blue-50">
      <div className="mx-auto text-center pb-10">
      <h2 className="text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-2 lg:max-w-3xl lg:text-3xl text-blue-900 underline-offset-8 underline pb-10 -mt-10 pt-8 mx-auto">GALLERY</h2>
      <p className="text-gray-800 lg:text-xl text-center max-w-2xl px-2 mx-auto">Explore our gallery to see how we are making a difference.</p>
      </div>
    <Carousel
      plugins={[plugin.current]}
      className="w-full lg:max-w-6xl md:max-w-xl max-w-xs mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        
          <CarouselItem className="md:basis-1/3 lg:basis-1/3 items-center justify-center flex">
            <Image
                src={image9}
                style={{width:"100%", display:"block", cursor: "pointer", border:'1px solid rgb(173, 173, 173)'}}
                alt="gallery images"/>
          </CarouselItem>

          <CarouselItem className="md:basis-1/3 lg:basis-1/3 items-center justify-center flex">
            <Image
                src={image3}
                style={{width:"100%", display:"block", cursor: "pointer", border:'1px solid rgb(173, 173, 173)'}}
                alt="gallery images"/>
          </CarouselItem>

          <CarouselItem className="md:basis-1/3 lg:basis-1/3 items-center justify-center flex">
            <Image
                src={image1}
                style={{width:"100%", display:"block", cursor: "pointer", border:'1px solid rgb(173, 173, 173)'}}
                alt="gallery images"/>
          </CarouselItem>

          <CarouselItem className="md:basis-1/3 lg:basis-1/3 items-center justify-center flex">
            <Image
                src={image2}
                style={{width:"100%", display:"block", cursor: "pointer", border:'1px solid rgb(173, 173, 173)'}}
                alt="gallery images"/>
          </CarouselItem>

          <CarouselItem className="md:basis-1/3 lg:basis-1/3 items-center justify-center flex">
            <Image
                src={image5}
                style={{width:"100%", display:"block", cursor: "pointer", border:'1px solid rgb(173, 173, 173)'}}
                alt="gallery images"/>
          </CarouselItem>

          <CarouselItem className="md:basis-1/3 lg:basis-1/3 items-center justify-center flex">
            <Image
                src={image4}
                style={{width:"100%", display:"block", cursor: "pointer", border:'1px solid rgb(173, 173, 173)'}}
                alt="gallery images"/>
          </CarouselItem>

          <CarouselItem className="md:basis-1/3 lg:basis-1/3 items-center justify-center flex">
            <Image
                src={image10}
                style={{width:"100%", display:"block", cursor: "pointer", border:'1px solid rgb(173, 173, 173)'}}
                alt="gallery images"/>
          </CarouselItem>

          <CarouselItem className="md:basis-1/3 lg:basis-1/3 items-center justify-center flex">
            <Image
                src={image8}
                style={{width:"100%", display:"block", cursor: "pointer", border:'1px solid rgb(173, 173, 173)'}}
                alt="gallery images"/>
          </CarouselItem>

          <CarouselItem className="md:basis-1/3 lg:basis-1/3 items-center justify-center flex">
            <Image
                src={image7}
                style={{width:"100%", display:"block", cursor: "pointer", border:'1px solid rgb(173, 173, 173)'}}
                alt="gallery images"/>
          </CarouselItem>

          <CarouselItem className="md:basis-1/3 lg:basis-1/3 items-center justify-center flex">
            <Image
                src={image6}
                style={{width:"100%", display:"block", cursor: "pointer", border:'1px solid rgb(173, 173, 173)'}}
                alt="gallery images"/>
          </CarouselItem>

      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    <Link href='/gallery' legacyBehavior>
    <a
            
            className="group flex items-center text-xs font-medium md:text-base lg:text-lg justify-center mt-10 text-red-700  hover:text-red-600"
          >
            View more
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </a>
          </Link>

    </div>
  )
}

