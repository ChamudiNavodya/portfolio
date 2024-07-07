"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link"

const services = [
    {
      num: "01",
      title: "Web development",
      description:
        "Transform your vision into reality with cutting-edge web development. Let's create engaging and responsive websites together!",
      href: "",
    },

    {
        num: "02",
        title: "UI/UX design",
        description:
          "Elevate your digital presence with intuitive and visually stunning UI/UX design. Let's craft exceptional user experiences together!",
        href: "",
      },

    {
      num: "03",
      title: "Mobile development",
      description:
        "Unlock the potential of your ideas with expert mobile development. Let's build seamless and innovative mobile experiences together!",
      href: "",
    },
  
    {
      num: "04",
      title: "Figma design",
      description:
        "Bring your concepts to life with expert Figma design. Let's create visually compelling and user-friendly interfaces together!",
      href: "",
    },
  ];

import { motion } from "framer-motion";



const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{opacity: 0}}
                    animate={{
                        opacity: 1,
                        transition: {delay:2.4, duration:0.4, ease: "easeIn"},
                    }}
            >
               {services.map((service, index)=>{
                return (
                <div key={index}>
                    {/* top */}
                    <div>
                        <div>{service.num}</div>
                        <Link href={service.href}>
                            <BsArrowDownRight/>
                        </Link>
                    </div>
                    {/* title */}
                    <h2>{service.title}</h2>
                    {/* description */}
                    <p>{service.description}</p>
                    {/* border */}
                    <div className="border-b border-white/20 w-full"></div>
                </div>
                );
               })} 
            </motion.div>
            </div>
        </section>
        
    )
};

export default Services;