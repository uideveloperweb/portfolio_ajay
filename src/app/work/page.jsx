"use client";

import React, {useState} from "react";

import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import {BsArrowUpRight, BsGithub } from 'react-icons/bs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { IoMdAdd } from "react-icons/io";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magni nihil dolorem voluptates consequuntur soluta saepe optio, consectetur doloribus natus sit itaque, odit molestiae laborum temporibus cumque voluptas iusto ab!",
    stack: [
      {name: "Html 5"}, {name: "Css 3"}, {name: "javascript"}
    ],
    image:"",
    live:"",
    github: ""
  },
  {
    num: "02",
    category: "Node js",
    title: "project 2",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magni nihil dolorem voluptates conseq",
    stack: [
      {name: "Node js"}, {name: "Next js"}
    ],
    image:"",
    live:"",
    github: ""
  },
]


const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex])
  }
  
    return (
        <div className="container mx-auto">
          <div className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                {/**outline num */}
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>

                {/**project category */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {project.category} project
                </h2>

                {/**project description */}
                <p className="text-white/60">{project.description}</p>

                {/**stack */}
                <ul className="flex gap-4">
                  {project.stack.map((item, index)=>{
                    return (
                      <li key={index} className="text-xl text-accent">
                        {item.name}
                        {index !== project.stack.length-1 && ','}
                      </li>
                    )
                  })}
                </ul>
                {/**border */}
                <div className="border border-white/20"></div>
                {/**buttons */}
                <div className="flex items-center gap-4">
                  {/**Live project button */}
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  {/**github project button */}
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                {projects.map((project, index)=>{
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/**overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 "></div>
                      {/**image */}
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-cover" />
                      </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
                {/**Slider button */}
                <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-30 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
              </Swiper>
            </div>
          </div>
          
          </div>
        </div>
    );
}

export default Work;
