import React from "react";
import Image from "next/image";
import y4s from "@/public/y4s.png";
import effm from "@/public/effm.jpg"
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import Link from "next/link";

import { SiWhatsapp } from "react-icons/si";

import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1A1D2B] pt-12 pb-6 px-10 tracking-wide">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-6">
          <div className="space-y-4">
            <div>

            <Link href="/" legacyBehavior>
              <a>
                <div className="grid items-center grid-cols-2 space-x-2 text-2xl font-medium gap-2">
                  <Image
                    src={y4s}
                    style={{
                      width: "200px",
                      display: "block",
                      cursor: "pointer",
                      border: "1px solid white",
                      background: "white",
                    }}
                    alt="gallery images"
                    width={0}
  height={0}
                  />

<Image
                    src={effm}
                    style={{
                      width: "200px",
                      display: "block",
                      cursor: "pointer",
                      border: "1px solid white",
                      background: "white",
                    }}
                    alt="gallery images"
                    width={0}
  height={0}
                  />
                </div>
              </a>
              </Link>
              <br />
              <p className="text-gray-300 mb-5">
                Yes4Save Foundation & Elijah&apos;s fire faith ministry.
              </p>
            </div>

            <div className="flex space-x-2">
            <Link href="/" legacyBehavior>
              <a
                target="_blank"
                className="text-gray-200 hover:text-gray-200"
              >
                <FaFacebookSquare />
              </a>
              </Link>

              <Link href="/" legacyBehavior>
              <a
                target="_blank"
                className="text-gray-200 hover:text-gray-200"
              >
                <FaInstagram />
              </a>
              </Link>

              <Link href="/" legacyBehavior>
              <a
                href=""
                target="_blank"
                className="text-gray-200 hover:text-gray-200"
              >
                <SiWhatsapp />
              </a>
              </Link>
            </div>
          </div>

          <div>
          <span className="mb-3 flex size-10 flex-col items-center justify-center rounded-full bg-accent">
              <Mail className="h-5 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold text-white">Email Us</p>
            <p className="mb-3 text-gray-400">
              For feedbacks & assistance.
            </p>

            <Link href="mailto:yes4save@gmail.com" legacyBehavior>
            <a className="font-semibold hover:underline text-white">
            yes4save@gmail.com
            </a>
            </Link>
          </div>

          <div className="mr-8 mb-5">
          <span className="mb-3 flex size-10 flex-col items-center justify-center rounded-full bg-accent">
              <Phone className="h-5 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold text-white"> Call Us</p>
            <p className="mb-3 text-gray-400">
              We&apos;re available Mon-Fri, 9am-5pm.
            </p>

            <Link href="tel:8123678440" legacyBehavior>
            <a className="font-semibold hover:underline text-white">
             +91 8123 678440
            </a>
            </Link>
          </div>

          <div>
            <span className="mb-3 flex size-10 flex-col items-center justify-center rounded-full bg-accent">
              <MapPin className="h-5 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold text-white">Visit Us</p>
            <p className="mb-3 text-gray-400">
              Drop by our office for a chat.
            </p>

            <Link href="/" legacyBehavior>
            <a href="#" className="font-semibold hover:underline text-white">
              1234 Street Name, City Name
            </a>
            </Link>
          </div>
        </div>

        <h3 className="text-md font-semibold leading-6 text-white pt-10 underline underline-offset-2">Useful links</h3>

        
                    <div className="md:grid md:grid-cols-3 grid-cols-3 md:gap-8 pb-5">
                        <div>
                            
                            <ul role="list" className="mt-6 space-y-4">
                                <li>
                                <Link href="/donate?modal=1" legacyBehavior>
                                    <a
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Donate
                                    </a>
                                    </Link>
                                </li>
                                <li>
                                <Link href="/volunteer" legacyBehavior>
                                    <a
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Volunteer
                                    </a>
                                </Link>
                                </li>
                                <li>
                                <Link href="/prayer" legacyBehavior>
                                    <a
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Prayer Request
                                    </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-10 md:mt-0">
                            
                            <ul role="list" className="mt-6 space-y-4">
                                <li>

                                <Link href="/about/y4s" legacyBehavior>
                                    <a
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Yes4Save Foundation
                                    </a>
                                    </Link>
                                </li>
                                <li>
                                <Link href="/about/effm" legacyBehavior>
                                    <a
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Elijah&apos;s Fire Faith Ministry
                                    </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-10 md:mt-0">
                            
                            <ul role="list" className="mt-6 space-y-4">
                                <li>
                                <Link href="/gallery" legacyBehavior>
                                    <a 
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Image Gallery
                                    </a>
                                    </Link>
                                </li>
                                <li>
                                <Link href="/contact" legacyBehavior>
                                    <a
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Contact details
                                    </a>
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    
                
            

        <p className="text-gray-200 text-xs mt-5">
          for websites & webapps contact @ JAI - 8610636851
        </p>
        <hr />
        <p className="text-gray-200 text-sm mt-5">
          © Yes4Save Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
