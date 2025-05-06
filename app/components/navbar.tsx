import { Menu, HeartHandshake, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FaGripfire, FaChild, FaPray } from "react-icons/fa";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar = ({
  logo = {
    url: "/",
    src: "/y4s.png",
    alt: "logo",
  },
  menu = [
    { title: "HOME", url: "/" },
    {
      title: "ABOUT",
      url: "#",
      items: [
        {
          title: "Yes4Save Foundation",
          description: "Learn about our foundation.",
          icon: <FaChild className="size-5 shrink-0" />,
          url: "/about/y4s",
        },
        {
          title: "EFF Ministry",
          description: "Learn about elijah's fire faith ministry.",
          icon: <FaGripfire className="size-5 shrink-0"/>,
          url: "/about/effm",
        },
      ],
    },
    {
      title: "GET INVOLED",
      url: "#",
      items: [
        {
          title: "Donate Now",
          description: "Your donations help provide food, education, and medical support.",
          icon: <HeartHandshake className="size-5 shrink-0" />,
          url: "/donate?modal=1",
        },
        {
          title: "Volunteer",
          description: "Volunteer and be part of life-changing missions.",
          icon: <ArrowRight className="size-5 shrink-0" />,
          url: "/volunteer",
        },
        {
          title: "Prayer Request",
          description: "Keep our mission and those in need in your prayers.",
          icon: <FaPray className="size-5 shrink-0"/>,
          url: "/prayer",
        },
      ],
    },
    {
      title: "GALLERY",
      url: "/gallery",
    },
    {
      title: "CONTACT",
      url: "/contact",
    },
  ],
  auth = {
    login: { title: "DONATE", url: "/donate?modal=1" },
    signup: { title: "VOLUNTEER", url: "/volunteer" },
  },
}: Navbar1Props) => {
  return (
    <section className="py-4 fixed w-full top-0 left-0 bg-white px-4 lg:px-20 z-50 shadow-md">
      <div className="container mx-auto">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link href={logo.url} legacyBehavior>
            <a className="flex items-center gap-2 pr-40 lg:-my-10">
              <Image src={logo.src} className="max-h-24" alt={logo.alt} width={0}
  height={0} style={{ width: '100%', height: 'auto' }}/>
            </a>
            </Link>
            <div className="flex items-center text-blue-900 font-(family-name:--font-geist-sans font-extrabold)">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
          <Link href={auth.login.url} legacyBehavior>
            <Button asChild className="w-full sm:w-auto bg-[#e91347] hover:text-white hover:bg-[#fc144d] py-6 text-lg transition duration-300 ease-in-out group">
            
              <a>{auth.login.title}<HeartHandshake className="size-6 transition-transform group-hover:scale-110 duration-300 ease-in-out"/></a>
             
            </Button>
            </Link>
            <Link href={auth.signup.url} legacyBehavior>
            <Button asChild className="w-full sm:w-auto bg-blue-900 hover:text-white hover:bg-blue-800 py-6 text-lg transition duration-300 ease-in-out group">
           
              <a>{auth.signup.title}<ArrowRight className="size-5 transition-transform group-hover:translate-x-1 duration-300 ease-in-out" /></a>
            
            </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={logo.url} legacyBehavior>
            <a className="flex items-center gap-2 -my-10">
              <Image src={logo.src} className="max-h-16" alt={logo.alt} width={0}
  height={0} style={{ width: '100%', height: 'auto' }}/>
            </a>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                  <Link href={logo.url} legacyBehavior>
                    <a className="flex items-center gap-2 -mb-10">
                      <Image src={logo.src} className="max-h-20" alt={logo.alt} width={0}
  height={0} style={{ width: 'auto', height: 'auto' }}/>
                    </a>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3 bg-amber-200">
                  <Link href={auth.login.url} legacyBehavior>
            <Button asChild className="w-full sm:w-auto bg-[#e91347] hover:text-white hover:bg-[#fc144d] py-6 text-xl transition duration-300 ease-in-out group">
            
              <a>{auth.login.title}<HeartHandshake className="size-6 transition-transform group-hover:scale-110 duration-300 ease-in-out"/></a>
             
            </Button>
            </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (

    <NavigationMenuItem key={item.title}>
      <Link href={item.url} legacyBehavior>
      <NavigationMenuLink
        
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground cursor-pointer"
      >
        {item.title}
      </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
   
    <Link key={item.title} href={item.url} className="text-md font-semibold cursor-pointer">
      {item.title}
    </Link>
  
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    
    <Link
      className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-yellow-200 hover:text-accent-foreground cursor-pointer" href={item.url} 
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-blue-700">
            {item.description}
          </p>
        )}
      </div>
    </Link>
        
    
  );
};

export { Navbar };