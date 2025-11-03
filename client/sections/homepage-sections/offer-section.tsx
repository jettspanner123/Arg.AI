import React from "react";
import {motion, MotionValue, useTransform, useSpring, useMotionTemplate} from "framer-motion";
import {twMerge} from "tailwind-merge";
import {IoArrowUp} from "react-icons/io5";
import {SPRING_OPTIONS} from "@/constants/animation-constants";
import SquareSVG from "@/public/svg/Square.svg";
import PlanningSVG from "@/public/svg/Planning.svg";
import Image from "next/image";
import {FaImage} from "react-icons/fa6";

function cardAnimationOffsets(index: number): { start: number; end: number } {
    const start = index / 3;
    const end = start + (1 / 3);
    return {
        start,
        end
    }
}

export default function OfferSection({scrollProgress}: { scrollProgress: MotionValue<number> }): React.JSX.Element {
    const sectionRef = React.useRef<HTMLDivElement | null>(null);

    const headingContent: Array<[string, string]> = [
        ["We offer a wide", "text-white/50"],
        [" range of ", "text-white"],
        [" services", "text-secondary-background"],
        [" designed", "text-white"],
        [" to optimize", "text-white/50"],
        [" your study", "text-white"],
        [" and achieve", "text-white/50"],
        [" your goals", "text-white"],
    ];


    return (
        <section
            className={"h-screen w-screen bg-primary-background !px-[2rem] flex flex-col gap-[2rem] !mt-[5rem] sticky top-0 !pt-[7rem]"}>

            <div className={"w-full flex font-family-roboto"}>
                <div className={"flex-[1.6] flex flex-wrap"}>
                    {headingContent.map((item: [string, string], index: number): React.JSX.Element => {
                        return (
                            <motion.p
                                key={index}
                                className={twMerge(item[1], "!ml-[0.5rem] text-[3rem] leading-[3.5rem]")}>
                                {item[0]}
                            </motion.p>
                        )
                    })}
                </div>
                <motion.div
                    className={"flex-1 flex justify-end items-end"}>
                    <motion.button
                        whileTap={{
                            opacity: 0.3
                        }}
                        className={"!px-[2rem] group/button hover:bg-white hover:text-black cursor-pointer !py-[1.5rem] rounded-full border-white border-[1px] text-white transition-colors duration-200"}>
                        Learn More
                    </motion.button>
                    <div
                        className={"h-[75px] aspect-square bg-white group-hover/button:rotate-[15deg] rotate-[45deg] rounded-full text-black flex justify-center items-center"}>
                        <IoArrowUp size={25}/>
                    </div>
                </motion.div>
            </div>


            {/*MARK: Some Features*/}
            <div
                ref={sectionRef}
                className={"w-full flex items-center gap-[1rem] flex-[0.9] relative flex-wrap"}>


                {/*MARK: Ghost Cards*/}
                <div className={"w-full h-full absolute left-0 top-0 flex gap-[1rem]"}>
                    {
                        Array.from({length: 3}).map((_, index: number): React.JSX.Element => {
                            return (
                                <div key={index}
                                     className={"flex-1 h-full rounded-2xl bg-[rgba(255,255,255,0.03)] flex flex-col !p-[1.5rem] justify-center items-start gap-[1rem]"}>

                                    <div
                                        className={"flex-1 w-full bg-[rgba(255,255,255,0.04)] rounded-2xl flex justify-center items-center"}>
                                        <FaImage size={40} className={"text-[rgba(255,255,255,0.15)]"}/>
                                    </div>

                                    <div
                                        className={"font-family-roboto text-white text-[1.25rem] bg-white/10 !px-[1rem] !py-[0.5rem] rounded-full opacity-40"}>
                                        <span className={"opacity-0"}>
                                            Hello, World
                                        </span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>



                {/*MARK: Feature 1*/}
                <FeatureCard
                    index={0}
                    scrollProgress={scrollProgress}
                    bottomText={"Strategic Planning"}
                >
                    <Image src={PlanningSVG} alt={"Planning Svg"} className={"w-full h-full"}/>
                </FeatureCard>




                {/*MARK: Feature 2*/}
                <FeatureCard
                    index={1}
                    scrollProgress={scrollProgress}
                    bottomText={"Advanced Analytics"}
                >
                    <Image src={SquareSVG} alt={"Square Svg"} className={"w-full h-full"}/>
                </FeatureCard>




                {/*MARK: Feature 3*/}
                <FeatureCard
                    index={2}
                    scrollProgress={scrollProgress}
                    bottomText={"Training & development"}
                >
                </FeatureCard>

            </div>
        </section>
    )
}


// MARK: Page Healper Components

function FeatureCard({children, index, scrollProgress, bottomText, wantPadding=true}: {
    children?: React.ReactNode,
    index: number,
    scrollProgress: MotionValue<number>,
    bottomText: string;
    wantPadding?: boolean;
}): React.ReactElement {
    const animationOffsets = cardAnimationOffsets(index);
    const y_raw = useSpring(useTransform(scrollProgress, [animationOffsets.start, animationOffsets.end], [120, 0]), SPRING_OPTIONS);
    const y = useMotionTemplate`${y_raw}%`;
    return (
        <motion.div
            style={{y}}
            className={`bg-primary-accent h-full flex-1 rounded-2xl ${wantPadding ? "!p-[1.5rem]" : ""} flex flex-col gap-[1rem] items-start justify-around relative`}>
            {children && children}
            <FeatureCardBottomTextChip text={bottomText}/>


        </motion.div>
    )
}

function FeatureCardBottomTextChip({text}: { text: string }): React.JSX.Element {
    return (
        <div
            className={"font-family-roboto text-white text-[1.25rem] bg-white/10 !px-[1rem] !py-[0.5rem] rounded-full"}>{text}</div>
    )
}