import React from "react";
import {motion, useScroll, useTransform, useSpring} from "framer-motion";
import {IoArrowUp} from "react-icons/io5";
import {TbBrain} from "react-icons/tb";
import {SPRING_OPTIONS} from "@/constants/animation-constants";


const NAVBAR_SCROLL_THRESHOLD = 300;

export default function Navbar(): React.JSX.Element {


    const navbarOptions: Array<{ name: string; link: string; }> = [
        {name: "Start Learning", link: "/chat"},
        {name: "Why Debate?", link: "/why-debate"},
        {name: "Reviews", link: "/reviews"},
        {name: "About", link: "/about"},
    ];
    return (
        <React.Fragment>
            <FullFunctionalNavbar navbarOptions={navbarOptions}/>
        </React.Fragment>
    )
}

function FullFunctionalNavbar({navbarOptions}: {
    navbarOptions: Array<{ name: string; link: string; }>
}): React.JSX.Element {

    return (
        <motion.header
            variants={{
                hidden: {
                    y: "-110%"
                },
                visible: {
                    y: "0%"
                }
            }}
            animate={{
                y: 0
            }}
            initial={{
                y: "-150%"
            }}
            transition={{
                duration: 1.25,
                delay: 0.5,
                ease: [0.85, 0, 0.15, 1],
            }}
            className={"fixed top-[1.5rem] left-1/2 -translate-x-1/2 !p-[0.75rem] text-white w-[calc(100vw-3rem)] bg-white/10 backdrop-blur-2xl rounded-full flex justify-between items-center z-[12]"}>


            <div className={"flex gap-[5rem] items-center"}>
                {/*MARK: Name and Logo*/}
                <span className={"flex gap-[1rem] items-center"}>
                    <div
                        className={"h-[40px] aspect-square bg-secondary-background rounded-full flex justify-center items-center"}>
                        <TbBrain size={30} className={"text-black"}/>
                    </div>
                    <h1 className={"font-family-montserrat font-bold uppercase text-[1.2rem]"}>Arg.AI</h1>
                </span>


                {/*MARK: Navbar links*/}
                <ul className={"flex gap-[1.5rem]"}>
                    {
                        navbarOptions.map((listItem: {
                            name: string;
                            link: string;
                        }, index: number): React.JSX.Element => {
                            return (
                                <li
                                    aria-label={listItem.name}
                                    className={"hover:text-white text-white/60 cursor-pointer transition-colors duration-200"}
                                    key={index}>
                                    {listItem.name}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>


            {/*MARK: Contact Us Button*/}
            <motion.button
                whileTap={{
                    opacity: 0.25
                }}
                className={"font-family-montserrat w-[150px] hover:w-[200px] group font-medium text-black text-[1rem] bg-white rounded-full !py-[0.6rem] !px-[1.1rem] flex items-center gap-[0.5rem] cursor-pointer justify-center transition-all duration-300"}>
                Contact Us
                <IoArrowUp size={20}
                           className={"rotate-[45deg] group-hover:rotate-[90deg] transition-transform duration-200"}/>
            </motion.button>
        </motion.header>
    )
}