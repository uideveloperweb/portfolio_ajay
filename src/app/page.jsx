import { Button } from "@/components/ui/button";
import { FiDownload, FIDownload } from "react-icons/fi"

import dynamic from 'next/dynamic';

//Components
const Social = dynamic(() => import('@/components/Social'));
const Photo = dynamic(() => import('@/components/Photo'));
const Stats = dynamic(() => import('@/components/Stats'));

//import Social from "@/components/Social";
//import Photo from "@/components/Photo";
//import Stats from "@/components/Stats";

export default function Home() {
  return (
      <section>
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">Frontend Developer</span>
              <h1 className="h1 mb-6">Hello I&apos;m <br /> <span className="text-accent">Ajay Gupta</span> </h1>
              <p className="max-w-[500px] mb-9 text-white/80">A skilled Frontend Developer specializing in React.js, Node.js, Next.js, ReactNative, Tailwind CSS and creating responsive, user-friendly web applications. I turn ideas into seamless digital experiences. Let&apos;s build something great together!</p>
              {/** Button and socials */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                {/* <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 hover:transition-all duration-500">
                  <span>Contact</span>
                  <FiDownload className="text-xl" />
                </Button> */}
                <div className="mb-8 xl:mb-0">
                  <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
                </div>
                <div></div>
              </div>
            </div>
            <div>
              <Photo className="order-1 xl:order-none mb-8 xl:mb-0" />
            </div>
          </div>
        </div>
        <Stats />
      </section>
  );
}
