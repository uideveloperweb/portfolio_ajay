"use client";

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";

const services = [
    {
        num: '01',
        title: 'Web Development',
        description: 'I provide professional web development services to transform your ideas into responsive, user-friendly, and visually stunning websites. Whether it’s a single-page app or a complex platform, I create scalable, fast, and high-quality digital solutions tailored to your business. Let’s build a standout website that meets your needs and drives success.'
    },
    {
        num: '02',
        title: 'Logo Design',
        description: 'Your logo represents your brand, and I’m here to make it memorable. I design distinctive, impactful logos that capture your brand’s identity and values. Whether launching a new venture or rebranding, I create designs that leave a lasting impression and make your business stand out. Let’s craft a logo that truly represents you!'
    },
    {
        num: '03',
        title: 'SEO',
        description: 'Enhance your online presence and attract organic traffic with professional SEO services. I optimize websites to rank higher on search engines, helping your business connect with the right audience. From keyword research and on-page optimization to technical SEO and link building, I deliver customized strategies to achieve your goals. Let’s boost your visibility and grow your business online!'
    },
    {
        num: '04',
        title: 'Digital Marketing',
        description: "Expand your brand and engage your audience with customized digital marketing strategies. I provide complete solutions, including social media marketing, email campaigns, content creation, and paid ads, to boost your online reach and engagement. Whether you aim to increase awareness, drive traffic, or boost conversions, I’ll use data-driven tactics to help you succeed. Let’s elevate your business!"
    },
    {
        num: '05',
        title: 'Performance',
        description: 'I optimize websites to deliver fast, seamless user experiences while meeting Google’s Core Web Vitals (CWV) standards. By improving key metrics like LCP, FID, and CLS, I enhance speed, responsiveness, and stability. Let’s create a high-performing website that delights users and boosts your search engine rankings effortlessly!'
    },
    {
        num: '06',
        title: 'Apps Development',
        description: 'Build powerful, user-friendly native apps with my React Native development services. I specialize in creating cross-platform mobile applications that deliver a seamless experience on both iOS and Android. From intuitive designs to robust functionality, I craft apps tailored to your needs. Let’s turn your ideas into fast, scalable, and feature-rich mobile solutions that engage your audience and drive results!'
    },
]

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
                {services.map((service, index)=>{
                    return (
                        <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                            <div>
                                <div className="w-full flex justify-between items-center">
                                    <span className="text-accent text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all delay-100">{service.num}</span>
                                    <span className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"><BsArrowDownRight className="text-primary text-3xl" /></span>
                                </div>
                                <h2 className="pt-6 text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500"> {service.title}</h2>
                                <p className="p-3 pl-0 pr-0 text-white/60">{service.description}</p>
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        </section>
    );
}

export default Services;
