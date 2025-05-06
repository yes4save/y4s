import React from 'react'
import Image from 'next/image';
import banner from '@/public/banner.jpg'
import { FcOk } from "react-icons/fc";




const YesPage = () => {
  return (
    <div>
      
      <div className="overflow-hidden">
      <div className="container text-center mt-10 py-5 mx-auto lg:max-w-5xl md:max-w-xl bg-blue-100 rounded-md">
      <Image
                    src={banner}
                    style={{
                      width: "100%",
                      display: "block",
                      cursor: "pointer",
                      border: "1px solid white",
                      background: "white",
                    }}
                    alt="about banner"
                  />
      <h2 className="text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-2 lg:max-w-3xl lg:text-3xl mx-auto text-blue-900 underline-offset-8 underline pb-5 -mt-10 pt-16"> ABOUT US
</h2>
<p className="lg:text-3xl  md:text-2xl text-xl lg:px-44 font-(family-name:--font-unna) text-gray-800 px-5 pb-3">As a  startup Ministry  and  NGO, we aim to:
</p>
<ul className="lg:text-xl text-start lg:px-28 md:px-8 px-6">
  <li className='pb-3'><FcOk className='inline-flex mr-2'/>Spread the Gospel through evangelism, revival events and online programs.
  </li>
  <li className='pb-3'><FcOk className='inline-flex mr-2'/>Serve the needy through humanitarian aid, education and disaster relief. 
  </li>
</ul>
      </div>
    </div>
      
    <section className="py-16">
      <div className="container max-w-6xl mx-auto">
        <div className="relative grid gap-16 md:grid-cols-2">
          <div className="top-40 h-fit md:sticky px-5 ">
            
            <h2 className="lg:text-4xl text-3xl text-gray-800 font-bold items-center">
            <span className="text-blue-500">Yes4Save Foundation</span> (Humanitarian Outreach)
            </h2>
            <p className="mt-4 text-gray-800 text-lg">
            The Yes4save Foundation works to meet practical needs like food, shelter, education and disaster relief. We are committed to helping the poor and marginalized while sharing the love of Christ through the following actions:
            </p>

          </div>
          <div className="flex flex-col gap-12 md:gap-20">
            
              <div  className="rounded-xl border-2 p-2 m-2">
              <iframe width="auto" height="auto" src="https://www.youtube.com/embed/tXkNOIxTNAQ?si=oxRHe3LSWDXWLkgm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='lg:h-60 lg:w-96 mx-auto'></iframe>
                <div className="p-6">
                  <h3 className="mb-1 text-2xl font-semibold text-blue-500">
                  Basic needs
                  </h3>
                  <p className="text-gray-800">Providing basic needs like food, clean water, clothing, and shelter for the need.</p>
                </div>
              </div>


              <div  className="rounded-xl border-2 p-2 m-2">
              <iframe width="auto" height="auto" src="https://www.youtube.com/embed/v5T6Fu6k71E?si=o76miC4rgYQ3XXPn" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='lg:h-60 lg:w-96 mx-auto'></iframe>
                <div className="p-6">
                  <h3 className="mb-1 text-2xl font-semibold text-blue-500">
                  Medical Aid & Healthcare
                  </h3>
                  <p className="text-gray-800">Providing medical support, health education, and emergency care.</p>
                </div>
              </div>


              <div  className="rounded-xl border-2 p-2 m-2">
              <iframe width="auto" height="auto" src="https://www.youtube.com/embed/o7WtH5nm4rE?si=T5hTIwSCwZh5tZdo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='lg:h-60 lg:w-96 mx-auto'></iframe>
                <div className="p-6">
                  <h3 className="mb-1 text-2xl font-semibold text-blue-500">
                  Emergency relief
                  </h3>
                  <p className="text-gray-800">Emergency relief during floods and natural disasters.</p>
                </div>
              </div>

              <div  className="rounded-xl border-2 p-2 m-2">
              <iframe width="auto" height="auto" src="https://www.youtube.com/embed/1E1F544KQPU?si=ZYK3jsN_tOQx5QuL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='lg:h-60 lg:w-96 mx-auto'></iframe>
                <div className="p-6">
                  <h3 className="mb-1 text-2xl font-semibold text-blue-500">
                  Education & Empowerment
                  </h3>
                  <p className="text-gray-800">Helping children and adults gain knowledge and skills for a better future.</p>
                </div>
              </div>


              <div  className="rounded-xl border-2 p-2 m-2">
              <iframe width="auto" height="auto" src="https://www.youtube.com/embed/4UoGyGr7OuU?si=SllIk5dB9I8-ndKV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='lg:h-60 lg:w-96 mx-auto'></iframe>
                <div className="p-6">
                  <h3 className="mb-1 text-2xl font-semibold text-blue-500">
                  Elderly Care
                  </h3>
                  <p className="text-gray-800">Home visits, companionship, and support for seniors—reminding them they are seen, loved, and valued in God&apos;s kingdom.</p>
                </div>
              </div>

          
          </div>

          

         


        </div>
      </div>
    </section>
    </div>
  );
};

export default YesPage ;