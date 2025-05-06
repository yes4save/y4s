import React from 'react'
import Image from 'next/image';
import banner from '@/public/banner.jpg'
import { FcOk } from "react-icons/fc";



const MinistryPage = () => {
  return (
    <div>
      
      <div className="overflow-hidden">
      <div className="container text-center mt-10 py-5 mx-auto lg:max-w-5xl md:max-w-xl bg-red-200 rounded-md">
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
      <h2 className="text-3xl font-semibold text-pretty md:mb-4 md:text-3xl lg:mb-2 lg:max-w-3xl lg:text-3xl mx-auto text-blue-900 underline-offset-8 underline pb-5 -mt-10 pt-16"> ABOUT US
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
          <div className="top-40 h-fit md:sticky px-5">

            <h2 className="lg:text-4xl text-3xl text-gray-800 font-bold items-center">
            <span className="text-red-500">Elijah&apos;s Fire Faith Ministry</span> (Evangelism & Outreach)
            </h2>
            <p className="mt-4 text-gray-800 text-lg">
            We spread the Gospel through local and global outreach programs, revival, healing prayer meet  as  online evangelism. Our mission is to bring the light of Christ to the world and help transform lives. The following are our ministry activities:
            </p>

          </div>
          <div className="flex flex-col gap-12 md:gap-20">
            
              <div  className="rounded-xl border-2 p-2 m-2">
              <iframe width="auto" height="auto" src="https://www.youtube.com/embed/1tAwCwwE2-c?si=Sb1il9kTxNedYgKc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='lg:h-60 lg:w-96 mx-auto'></iframe>
                <div className="p-6">
                  <h3 className="mb-1 text-2xl font-semibold text-red-500">
                  Revival & Healing Meetings
                  </h3>
                  <p className="text-gray-800">Through powerful revival events, we aim to  ignite faith, see  miracles  happend and experience spiritual renewal. Our focus is on healing, deliverance and reviving hearts for God.</p>
                </div>
              </div>


              <div  className="rounded-xl border-2 p-2 m-2">
              <iframe width="auto" height="auto" src="https://www.youtube.com/embed/1E1F544KQPU?si=ZSvXtHbifMxa1nDd" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='lg:h-60 lg:w-96 mx-auto'></iframe>
                <div className="p-6">
                  <h3 className="mb-1 text-2xl font-semibold text-red-500">
                  Children & Youth Outreach
                  </h3>
                  <p className="text-gray-800">Mentorship programs, tutoring, and faith-based youth activities that empower the next generation with God&apos;s truth, academic support and positive role models.</p>
                </div>
              </div>


              <div  className="rounded-xl border-2 p-2 m-2">
              <iframe width="auto" height="auto" src="https://www.youtube.com/embed/kAiYICtKF-0?si=3vfCTJ2udzyU9NBG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='lg:h-60 lg:w-96 mx-auto'></iframe>
                <div className="p-6">
                  <h3 className="mb-1 text-2xl font-semibold text-red-500">
                  Worship & Music Ministry
                  </h3>
                  <p className="text-gray-800">Leading worship sessions, gospel concerts, and musical outreach to bring people together in praise and experience the joy of the Lord.</p>
                </div>
              </div>


              <div  className="rounded-xl border-2 p-2 m-2">
              <iframe width="auto" height="auto" src="https://www.youtube.com/embed/Tdem0fL8st8?si=xgPNUFWb0r8FiHEi" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='lg:h-60 lg:w-96 mx-auto'></iframe>
                <div className="p-6">
                  <h3 className="mb-1 text-2xl font-semibold text-red-500">
                  Digital Evangelism & Online Ministry
                  </h3>
                  <p className="text-gray-800">Sharing devotionals, sermons, and testimonies through social media, livestreams, and online Bible studies—spreading the Gospel globally.</p>
                </div>
              </div>


              <div  className="rounded-xl border-2 p-2 m-2">
              <iframe width="auto" height="auto" src="https://www.youtube.com/embed/PJ0suHCMDtM?si=va7elLdAH5IJgZ2V" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='lg:h-60 lg:w-96 mx-auto'></iframe>
                <div className="p-6">
                  <h3 className="mb-1 text-2xl font-semibold text-red-500">
                  Seasonal Outreach Events
                  </h3>
                  <p className="text-gray-800">Christmas toy drives, Thanksgiving meals, and back-to-school events—bringing joy and relief during key moments throughout the year.</p>
                </div>
              </div>

          
          </div>

          

         


        </div>
      </div>
    </section>
    </div>
  );
};

export default MinistryPage ;