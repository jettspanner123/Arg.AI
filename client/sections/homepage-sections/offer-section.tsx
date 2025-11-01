import React from "react";
import {motion, MotionValue} from "framer-motion";
import {twMerge} from "tailwind-merge";
import {IoArrowUp} from "react-icons/io5";

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

    function cardAnimationOffsets(index: number): { start: number; end: number } {
        const start = index / 3;
        const end = start + (1 / 3);
        return {
            start,
            end
        }
    }

   return (
        <section
            className={"h-screen w-screen bg-primary-background !px-[2rem] flex flex-col gap-[2rem] !mt-[5rem] sticky top-0"}>

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
                        className={"!p-[1.85rem] bg-white group-hover/button:rotate-[15deg] rotate-[45deg] rounded-full text-black"}>
                        <IoArrowUp/>
                    </div>
                </motion.div>
            </div>


            {/*MARK: Some Features*/}
            <div
                ref={sectionRef}
                className={"w-full flex items-center gap-[1rem] flex-[0.9]"}>
                <div className={"bg-primary-accent h-full flex-1 rounded-2xl relative"}>
                    <FeatureCardBottomTextChip text={"Broad topics"}/>
                </div>
                <div className={"bg-primary-accent h-full flex-1 rounded-2xl relative"}>
                    <FeatureCardBottomTextChip text={"Thoughtfull learning"}/>
                </div>
                <div className={"bg-primary-accent h-full flex-1 rounded-2xl relative"}>
                    <FeatureCardBottomTextChip text={"Full Understanding"}/>
                </div>
            </div>
        </section>
    )
}


function FeatureCardBottomTextChip({text}: { text: string }): React.JSX.Element {
    return (
        <div
            className={"text-white bottom-[2rem] text-[1.25rem] left-[1.5rem] absolute bg-white/10 !px-[1rem] !py-[0.5rem] rounded-full"}>{text}</div>
    )
}