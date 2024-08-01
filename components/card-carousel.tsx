"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";


export function AppleCardsCarouselDemo() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} layout={true} />
    ));

    return (
        <div className="w-full h-full py-20">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white dark:text-white font-sans">
                About our Services
            </h2>
            <Carousel items={cards} />
        </div>
    );
}

const DummyContent = ({ src, desc }: { src: string, desc: string }) => {
    return (
        <>

            <div
                key={"dummy-content"}
                className=" p-8 md:p-14 rounded-3xl mb-4 bg-gray-800"
            >
                <p className="text-white  text-base md:text-2xl font-sans max-w-3xl mx-auto ">
                    <p>{desc}</p>

                </p>
                <Image
                    src={src}
                    alt="Macbook mockup from Aceternity UI"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-8 rounded-3xl"
                />
            </div>

        </>
    );
};

const data = [
    {
        category: "Artificial Intelligence",
        title: "Empowering Minds, Shaping Futures",
        src: "/aboutus/mission.png",
        content: <DummyContent
            src="/aboutus/mission.png"
            desc="At [Institute Name], our mission is to empower students globally with accessible and comprehensive online education. We are dedicated to providing dynamic courses that foster intellectual growth, critical thinking, and lifelong learning."
        />,
    },
    {
        category: "Productivity",
        title: "Inspiring Excellence, Cultivating Leaders",
        src: "/aboutus/leaders.png",
        content: <DummyContent 
        src="/aboutus/mission.png"
            desc="At [Institute Name], our mission is to empower students globally with accessible and comprehensive online education. We are dedicated to providing dynamic courses that foster intellectual growth, critical thinking, and lifelong learning."/>,
    },
    {
        category: "Product",
        title: "Integrity, Innovation, Inclusivity",
        src: "/aboutus/innovation.png",
        content: <DummyContent 
            src="/aboutus/innovation.png" 
            desc="At [Institute Name], our mission is to empower students globally with accessible and comprehensive online education. We are dedicated to providing dynamic courses that foster intellectual growth, critical thinking, and lifelong learning."/>,
    },

    {
        category: "Product",
        title: "A Legacy of Excellence",
        src: "/aboutus/legacy.png",
        content: <DummyContent 
        src="/aboutus/mission.png"
            desc="At [Institute Name], our mission is to empower students globally with accessible and comprehensive online education. We are dedicated to providing dynamic courses that foster intellectual growth, critical thinking, and lifelong learning."
            />,
    },
    {
        category: "iOS",
        title: "A Vibrant Learning Community",
        src: "/aboutus/community.png",
        content: <DummyContent 
        src="/aboutus/mission.png"
            desc="At [Institute Name], our mission is to empower students globally with accessible and comprehensive online education. We are dedicated to providing dynamic courses that foster intellectual growth, critical thinking, and lifelong learning."
            />,
    },
    {
        category: "Hiring",
        title: "Digital Experts, Mentors, Innovators",
        src: "/aboutus/mentors.png",
        content: <DummyContent 
        src="/aboutus/mission.png"
            desc="At [Institute Name], our mission is to empower students globally with accessible and comprehensive online education. We are dedicated to providing dynamic courses that foster intellectual growth, critical thinking, and lifelong learning."
            />,
    },
];
