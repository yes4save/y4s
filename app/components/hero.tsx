import { ArrowRight, HeartHandshake} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";



const Hero = ({
  heading = "Elijah's Fire Faith Ministry and Yes4save Foundation",
  description = `"Whoever brings blessing will be enriched, and one who waters will himself be watered." - Proverbs 11:25`,
  buttons = {
    primary: {
      text: "DONATE",
      url: "/donate?modal=1",
    },
    secondary: {
      text: "VOLUNTEER",
      url: "/volunteer",
    },
  },
  image = {
    src: "/main.jpg",
    alt: "Hero section demo image showing interface components",
  },
}) => {
  return (
    <section className="pt-22 pb-10 bg-[url('/bg.jpg')] bg-no-repeat bg-cover lg:px-20 px-6 lg:pt-34 lg:pb-16 bg-fixed">
      <div className="container mx-auto">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            
            <h1 className="my-6 text-4xl text-pretty lg:text-6xl text-white font-medium font-(family-name:--font-oswald) leading-14 lg:leading-16">
              {heading}
            </h1>
            <p className="mb-8 max-w-xl text-gray-200 lg:text-xl font-(family-name:--font-unna) italic">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons.primary && (
                <Link href={buttons.primary.url} legacyBehavior>
                <Button asChild className="w-full sm:w-auto bg-[#e91347] hover:text-white hover:bg-[#fc144d] py-6 text-lg transition duration-300 ease-in-out group">
                  <a>{buttons.primary.text}<HeartHandshake className="size-6 transition-transform group-hover:scale-110 duration-300 ease-in-out"/></a>
                </Button>
                </Link>
              )}
              {buttons.secondary && (
                <Link href={buttons.secondary.url} legacyBehavior>
                <Button asChild className="w-full sm:w-auto bg-blue-900 hover:text-white hover:bg-blue-800 py-6 text-lg transition duration-300 ease-in-out group ">
                  <a>
                    {buttons.secondary.text}
                    <ArrowRight className="size-5 transition-transform group-hover:translate-x-1 duration-300 ease-in-out" />
                  </a>
                </Button>
                </Link>
              )}
            </div>
          </div>
          <Image
            src={image.src}
            alt={image.alt}
            className="max-h-96 w-full rounded-sm object-cover"
            width={0}
  height={0}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;