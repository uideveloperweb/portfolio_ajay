"use client";

import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs} from 'react-icons/fa';

import {SiTailwindcss, SiNextdotjs} from "react-icons/si";

const about = {
    title: 'About me',
    description: 'Innovative Front-End Developer with experience in designing and building high-performance, user-centric web solutions.',
    info: [
        {
            itemName: "Name", 
            itemValue: "Ajay Gupta"
        },
        {
            itemName: "Phone", 
            itemValue: "(+91) 981 011 9075"
        },
        {itemName: "Experience", itemValue: '19+ Years'},
        {itemName: "Nationality", itemValue: 'Indian'},
        {itemName: "Email", itemValue: "ashvweb@gmail.com"},
        {itemName: "Freelance", itemValue: "Available"},
        {itemName: "Language", itemValue: "English, Hindi"}
        
    ]
}

//experience data
const experience = {
    icons: '/assets/resume/Badge.svg',
    title: 'My experience',
    description: "Innovative Front-End Developer with experience in designing and building high-performance, user-centric web solutions.",
    items: [
        {
            company : "",
            position : "Freelancer",
            duration : "Dec 2024 - Till date"
        },
        {
            company : "Infoedge India Ltd.",
            position : "VP Engineering",
            duration : "May 2018 - Dec 2024"
        },
        {
            company : "Infoedge India Ltd.",
            position : "Senior UI Manager",
            duration : "Nov 2007 - Sep 2017"
        },
        {
            company : "Synapse Communication Pvt. Ltd.",
            position : "HTML Programmer",
            duration : "Jun 2006 - Nov 2007"
        },
        {
            company : "Vlead",
            position : "Web Designer",
            duration : "Jan 2006 - Jul 2006"
        },
        {
            company : "Shakti IT Consultant",
            position : "Graphic Artist",
            duration : "May 2005 - Jan 2006"
        },

    ]
}

//education data
//experience data
const education = {
    icons: '/assets/resume/cap.svg',
    title: 'My education',
    description: "Innovative Front-End Developer with experience in designing and building high-performance, user-centric web solutions.",
    items: [
        {
            institution : "IGNOU",
            degree : "MCA",
            duration : "2002 - 2005"
        },
        {
            institution : "Aggarwal College",
            degree : "B.Com",
            duration : "1997 - 2000"
        },

    ]
}

const skills = {
    title:'My Skills',
    description: 'description here',
    skillList: [
        {
            icon: <FaHtml5 />,
            name: 'html 5',
        },
        {
            icon: <FaCss3 />,
            name: 'css 3',
        },
        {
            icon: <FaJs />,
            name: 'javascript',
        },
        {
            icon: <FaReact />,
            name: 'react',
        },
        {
            icon: <FaReact />,
            name: 'reactNative',
        },
        {
            icon: <FaNodeJs />,
            name: 'nodejs',
        },
        {
            icon: <SiNextdotjs />,
            name: 'next.js',
        },
        {
            icon: <SiTailwindcss />,
            name: 'tailwind css',
        },
        
    ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';

const Resume = () => {
    return (
        <div className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
            <div className='container mx-auto'>
                <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills"> Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/**content */}
                    <div className='min-h-[70vh] w-full'>
                        {/**experience */}
                        <TabsContent value = "experience" className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experience.items.map((item,index)=>{
                                            return  (
                                                <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        {/**dot */}
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/**education */}
                        <TabsContent value = "education" className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{education.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.items.map((item,index)=>{
                                            return  (
                                                <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        {/**dot */}
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/**skills */}
                        <TabsContent value = "skills" className='w-full'>
                            <div className="flex flex-col gap-[30px]">
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                    {skills.skillList.map((skill, index)=>{
                                        return (
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                        <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                                        
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className='capitalize'>{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/**about */}
                        <TabsContent value = "about" className='w-full text-center xl:text-left'>
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-4xl font-bold'>{about.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:m-0'>
                                    {about.info.map((item,index)=>{
                                        console.log(item.itemName)
                                        return (
                                            <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                                                <span className="text-white/60">{item.itemName}</span>
                                                <span className="text-xl">{item.itemValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </div>
    );
}

export default Resume;
