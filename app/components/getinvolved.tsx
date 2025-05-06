import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";



const GetInvolved = ({
  heading = "HOW CAN YOU HELP?",

  posts = [
    {
      id: "post-1",
      title: "Provide Hope",
      summary:"Transform lives with your generosity. Your gift helps provide food, shelter and spiritual hope, allowing us to reach the lost and serve communities with the unwavering love of Christ.",
      url: "/donate?modal=1",
      image: "/7.jpg",
      footer: "to donate",
    },
    {
      id: "post-2",
      title: "Join Us",
      summary:"Answer the call to serve. Use your gifts to impact lives, uplift the brokenhearted, and reflect Christ’s compassion through hands-on ministry, outreach events, and support for those in need.",
      url: "/volunteer",
      image: "/2.jpg",
      footer: "to volunteer",
    },
    {
      id: "post-3",
      title: "Need Prayer?",
      summary:"We believe in the power of prayer. If you’re going through a difficult time or need spiritual support, our prayer team is here for you. Submit your prayer request and we will stand in faith with you.",
      url: "/prayer",
      image: "/5.jpg",
      footer: "for prayer request",
    },
  ],
}) => {
  return (
    <section className="pt-10 bg-[url('/bg2.jpg')] bg-fixed bg-cover">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-36">
        <div className="text-center">
          <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-2 lg:max-w-3xl lg:text-3xl text-blue-900 underline-offset-8 underline shadow-md">
            {heading}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 -mt-8 pb-8">
          {posts.map((post) => (
            <Link href={post.url} key={post.id} legacyBehavior>
            <a
            className="transition-opacity duration-200 fade-in"
          >
            <Card className="grid grid-rows-[auto_auto_1fr_auto] rounded-sm group overflow-hidden hover:bg-gradient-to-r from-[#fde68a]  to-[#f59e0b] transition duration-500 ease-in-out mx-3">
              <div className="w-full">
                
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover object-center -mt-6 group-hover:scale-105 transition duration-500 ease-in-out"
                    width={0}
  height={0}
                  />
                
              </div>
              <CardHeader>
                <h2 className="text-4xl md:text-xl lg:text-3xl text-blue-900 font-medium -mt-5">
                  
                    {post.title}

                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 text-sm lg:text-base md:text-base">{post.summary}</p>
              </CardContent>
              <CardFooter className="text-red-700 items-center">
                
              {post.footer}
                  <ArrowRight className="ml-2 size-4" />
                
              </CardFooter>
            </Card>
            </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export { GetInvolved };
