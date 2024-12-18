"use client";
import React, {useState} from 'react';
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from "@/components/ui/select";

import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa';

const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Phone',
        description: '(+91) 981 011 9075'
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        description: 'ashvweb@gmail.com'
    },
    {
        icon: <FaMapMarkerAlt />,
        title: 'Address',
        description: 'Faridabad, Haryana, India'
    },
]

const Contact = () => {

    const [formData, setFormData] = useState({
        firstName:"",
        lastName: "",
        email: "",
        subject: "",
        message: "",
        phone:"",
        service:"",
      });

      const [status, setStatus] = useState({ success: null, message: "" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSelectChange = (value) => {
        setFormData((prevData) => ({ ...prevData, service: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ success: null, message: "" });
        try {
            const response = await fetch("/api/sendEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
              });

        const result = await response.json();

        if (result.success) {
            ['firstName', 'lastName', 'email', 'subject', 'message', 'phone', 'service'].map((name)=>{
                setFormData({ ...formData, [name]: '' });
            })
            setStatus({ success: true, message: "Email sent successfully!" });
        } else {
            setStatus({ success: false, message: result.message });
        }
        } catch (error) {
        setStatus({ success: false, message: "Error occurred: " + error.message });
        }
    };

    return (
        <div className="py-6">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/**form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"  onSubmit={handleSubmit}>
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aperiam totam reiciendis, dicta in nisi, maxime obcaecati accusantium corporis qui quae ab reprehenderit fugiat, ratione architecto cupiditate corrupti minima tempore?</p>
                            {/**input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} />
                                <Input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} />
                                <Input type="text" name="email" placeholder="Email address" value={formData.email} onChange={handleInputChange} />
                                <Input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} />
                            </div>
                            {/**select */}
                            <Select onValueChange={handleSelectChange}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="est">Web Development</SelectItem>
                                        <SelectItem value="cst">UI/UX Design</SelectItem>
                                        <SelectItem value="mst">Logo Design</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/**textarea */}
                            <Textarea className="h-[200px]" name="message" placeholder="Type your message here." value={formData.message} onChange={handleInputChange} />
                            {/**button */}
                            <Button size="md" className="max-w-40" type="submit">Send message</Button>
                            {status.success !== null && (
                                <p style={{ color: status.success ? "green" : "red" }}>{status.message}</p>
                            )}
                        </form>
                    </div>
                    {/**info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index)=>{
                                return (
                                    <li key={index} className="flex items-center gap6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center mr-6">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
