import React from 'react'
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';


const Youtube = () => {
  return (
    <section className="py-16">
      <div className="container max-w-6xl mx-auto">
        <div className="relative grid gap-16 md:grid-cols-2">
          <div className="top-40 h-fit md:sticky px-5 ">
            
          <h2 className="text-4xl text-gray-800 font-medium items-center">
          Experience how God is working through our ministry. Watch our latest mission highlights and testimonies on our <span className="text-red-500">Youtube</span> channel.  Subscribe to stay inspired.
            </h2>

          </div>
          <div className="flex flex-col gap-12 md:gap-20 mx-4">
            
              <div  className="rounded-lg border p-2 bg-gray-900">
              <iframe width="auto" height="auto" src="https://www.youtube.com/embed/tXkNOIxTNAQ?si=oxRHe3LSWDXWLkgm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='lg:h-60 lg:w-96 mx-auto'></iframe>
              </div>

              <div  className="rounded-lg border p-2 bg-gray-900">
              <iframe width="auto" height="auto" src="https://www.youtube.com/embed/4UoGyGr7OuU?si=SllIk5dB9I8-ndKV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='lg:h-60 lg:w-96 mx-auto'></iframe>
              </div>

              <div  className="rounded-lg border p-2 bg-gray-900">
              <iframe width="auto" height="auto" src="https://www.youtube.com/embed/1E1F544KQPU?si=ZYK3jsN_tOQx5QuL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='lg:h-60 lg:w-96 mx-auto'></iframe>
              </div>


              

          
          </div>


        </div>
      </div>
      <Link href='/about/effm' legacyBehavior>
      <a
            className="group flex items-center text-xs font-medium md:text-base lg:text-lg justify-center mt-6 text-red-700  hover:text-red-600"
          >
            Learn more about Elijah&apos;s Fire Faith Ministry
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </a>
          </Link>
    </section>
  )
}

export default Youtube

