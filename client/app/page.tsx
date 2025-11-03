"use client";
import React from "react";
import Navbar from "@/components/shared/navbar";
import LandingPage from "@/sections/homepage-sections/landing-page";
import OfferSection from "@/sections/homepage-sections/offer-section";
import {useScroll} from "framer-motion";


export default function Home(): React.JSX.Element {

    React.useEffect(() => {
        (
            async () => {
                const locomotiveScroll = (await import("locomotive-scroll")).default;
                const LocomotiveScroll = new locomotiveScroll();
            }
        )()
    }, []);

    const secondSectionRef = React.useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: secondSectionRef,
        offset: ["start start", "end 120%"]
    })
    return (
        <React.Fragment>
            <Navbar/>
            <main className={"min-h-screen w-screen bg-primary-background"}>


                {/*MARK: Landing SCreen*/}
                <LandingPage/>




                {/*MARK: FEatures Screen*/}
                <div
                    ref={secondSectionRef}
                    className={"w-screen h-[300vh] bg-blue-300"}>
                    <OfferSection scrollProgress={scrollYProgress}/>
                </div>



                {/*MARK: Pricing Screen*/}
                <section className={"h-screen w-screen"}>

                </section>
            </main>
        </React.Fragment>
    );
};



