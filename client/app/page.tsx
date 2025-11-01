"use client";
import React from "react";
import Navbar from "@/components/shared/navbar";
import LandingPage from "@/sections/homepage-sections/landing-page";
import OfferSection from "@/sections/homepage-sections/offer-section";
import {useScroll} from "framer-motion";

export default function Home(): React.JSX.Element {

    const secondSectionRef = React.useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: secondSectionRef,
        offset: ["start start", "end end"]
    })

    scrollYProgress.on("change", (e) => {
        console.log(e);
    })
    return (
        <React.Fragment>
            <Navbar/>
            <main className={"min-h-screen w-screen bg-primary-background"}>
                <LandingPage/>

                <div
                    ref={secondSectionRef}
                    className={"w-screen h-[300vh] bg-blue-300"}>
                    <OfferSection scrollProgress={scrollYProgress}/>
                </div>
            </main>
        </React.Fragment>
    );
};



