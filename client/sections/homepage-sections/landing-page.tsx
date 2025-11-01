import React from "react";
import {FaBrain, FaMicrochip} from "react-icons/fa6";
import {HiMiniComputerDesktop} from "react-icons/hi2";
import {RiVoiceprintFill} from "react-icons/ri";
import {IoArrowDown, IoArrowUp} from "react-icons/io5";
import {motion} from "framer-motion";
import {TbBrain} from "react-icons/tb";
import {twMerge} from "tailwind-merge";
import Image from "next/image";
import GrayBackground from "@/public/images/Grey_Background.jpeg";
import DarkBackground from "@/public/images/Dark_Background.jpg";


export default function LandingPage(): React.JSX.Element {

    interface GridItemInter {
        backgroundColor: string;
        textColor: string;
        customRounding: string;
        content: React.ReactNode;
        customStyling: string;
        customRoundingAnimation?: number;
    }

    const gridItems: Array<GridItemInter> = [
        {
            backgroundColor: "bg-secondary-background",
            textColor: "text-black",
            customRounding: "rounded-[10rem]",
            customStyling: "flex flex-col items-center justify-center",
            customRoundingAnimation: "7rem",
            content: <React.Fragment>
                <motion.div
                    animate={{
                        rotate: 360
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatDelay: 0,
                        ease: "linear",
                        duration: 10
                    }}
                    className={"h-[75px] aspect-square bg-black rounded-full flex justify-center items-center"}>
                    <TbBrain size={40} className={"text-white"}/>
                </motion.div>

                <p className={"text-[1rem] leading-[1.1rem] font-medium !mt-[1rem]"}>Welcome to <span
                    className={"font-bold"}>Arg.AI</span>, <br/> your learning partner.</p>
            </React.Fragment>
        },
        {
            backgroundColor: "bg-secondary-background",
            textColor: "text-black",
            customRounding: "rounded-tl-[7rem] rounded-br-[7rem] rounded-bl-[7rem] rounded-tr-[1rem]",
            customStyling: "",
            content: <React.Fragment>
            </React.Fragment>
        },
        {
            backgroundColor: "bg-white",
            textColor: "text-black",
            customRounding: "rounded-xl rounded-br-[7rem] hover:rounded-[1rem]",
            customStyling: "",
            content: <React.Fragment>
                <div className={"w-full flex items-center justify-start relative"}>

                    <motion.div
                        animate={{
                            x: ["0%", "100%", "0%"],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatDelay: 2,
                        }}
                        className={"h-[30px] aspect-square bg-black rounded-full"}/>
                    <motion.div
                        animate={{
                            x: ["0%", "-100%", "0%"],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatDelay: 2,
                        }}
                        className={"h-[30px] aspect-square bg-black rounded-full"}/>
                </div>

                <p className={"font-family-roboto text-black !mt-[2rem]"}>
                    <span className={"font-black"}>50 - 80%</span> increase in overall learning speed due the
                    the structured format.
                </p>
            </React.Fragment>
        },
        {
            backgroundColor: "bg-gray-400",
            textColor: "text-black",
            customRounding: "rounded-bl-[1rem] rounded-tr-[7rem] rounded-tl-[1rem] rounded-br-[1rem]",
            customStyling: "",
            content: <React.Fragment>
            </React.Fragment>
        },
        {
            backgroundColor: "bg-black",
            textColor: "text-white",
            customRounding: "rounded-[1rem] hover:rounded-xl rounded-br-[7rem]",
            customStyling: "flex gap-[2rem] items-center",
            content: <React.Fragment>
                <div className={"flex flex-col items-center justify-center"}>
                    <motion.div
                        animate={{
                            y: ["0%", "100%", "0%"],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatDelay: 2,
                        }}
                        className={"h-[30px] aspect-square bg-white rounded-full"}/>
                    <motion.div
                        animate={{
                            y: ["0%", "-100%", "0%"],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatDelay: 2,
                        }}
                        className={"h-[30px] aspect-square border-white border-[1px] rounded-full"}/>
                </div>


                <p className={"font-family-roboto text-white"}>Why do customers choose <span
                    className={"font-bold underline underline-offset-2 cursor-pointer"}>Arg.AI</span>?</p>
            </React.Fragment>
        }
    ];
    return (
        <section className={"h-screen w-screen flex"}>

            <div
                className={"h-full flex-1 flex flex-col justify-center items-start !px-[2.25rem] !mt-[4rem] md:!mt-[0]"}>


                {/*MARK: Main Heading*/}
                <h1 className={"text-white md:w-auto w-full font-family-roboto font-medium text-[2rem] bp-1135:text-[3rem] bp-1410:text-[4rem] leading-[2.5rem] bp-1135:leading-[3.5rem] bp-1410:leading-[4.5rem] relative"}>


                    <span className={"md:flex hidden items-center absolute top-[0.7rem]"}>
                        <motion.div
                            animate={{
                                scale: 1
                            }}
                            initial={{
                                scale: 0
                            }}
                            transition={{
                                duration: 1.25,
                                delay: 0.4,
                                ease: [0.83, 0, 0.17, 1]
                            }}
                            className={"h-[50px] bg-white rounded-full aspect-square flex justify-center items-center"}>
                            <FaMicrochip size={20} className={"text-primary-background"}/>
                        </motion.div>
                        <motion.div
                            animate={{
                                scale: 1
                            }}
                            initial={{
                                scale: 0
                            }}
                            transition={{
                                duration: 1.25,
                                delay: 0.5,
                                ease: [0.83, 0, 0.17, 1]
                            }}
                            className={"h-[50px] border-white border-[1px] rounded-full aspect-square flex justify-center items-center"}>
                            <HiMiniComputerDesktop size={20} className={"text-white"}/>
                        </motion.div>
                    </span>


                    <motion.span
                        animate={{
                            x: 0
                        }}
                        initial={{
                            x: "-150%"
                        }}
                        transition={{
                            duration: 1.25,
                            ease: [0.83, 0, 0.17, 1]
                        }}
                        className={"md:!ml-[7.5rem] md:w-auto md:text-left w-full text-center inline-block"}>
                        Intelligent Debates,
                    </motion.span>


                    <br/>

                    <motion.span
                        animate={{
                            x: 0
                        }}
                        initial={{
                            x: "-150%"
                        }}
                        transition={{
                            duration: 1.25,
                            delay: 0.05,
                            ease: [0.83, 0, 0.17, 1]
                        }}
                        className={"inline-block text-center md:text-left w-full"}>
                        Deeper Understanding.
                    </motion.span>
                    <span className={"flex items-center justify-center md:justify-start"}>

                        <motion.span
                            animate={{
                                x: 0
                            }}
                            initial={{
                                x: "-150%"
                            }}
                            transition={{
                                duration: 1.25,
                                delay: 0.1,
                                ease: [0.83, 0, 0.17, 1]
                            }}
                            className={"inline-block"}>
                        With AI.
                    </motion.span>

                        <motion.div
                            animate={{
                                scale: 1
                            }}
                            initial={{
                                scale: 0
                            }}
                            transition={{
                                duration: 1.25,
                                delay: 0.6,
                                ease: [0.83, 0, 0.17, 1]
                            }}

                            className={"h-[50px] border-white border-[1px] rounded-full aspect-square md:flex justify-center items-center !ml-[1.5rem] hidden"}>
                            <HiMiniComputerDesktop size={20} className={"text-white"}/>
                        </motion.div>

                        <motion.div
                            animate={{
                                scale: 1
                            }}
                            initial={{
                                scale: 0
                            }}
                            transition={{
                                duration: 1.25,
                                delay: 0.7,
                                ease: [0.83, 0, 0.17, 1]
                            }}
                            className={"h-[50px] bg-white rounded-full aspect-square hidden md:flex justify-center items-center -translate-x-1/2"}>
                            <RiVoiceprintFill size={20} className={"text-black"}/>
                        </motion.div>

                        <motion.div
                            animate={{
                                scale: 1
                            }}
                            initial={{
                                scale: 0
                            }}
                            transition={{
                                duration: 1.25,
                                delay: 0.8,
                                ease: [0.83, 0, 0.17, 1]
                            }}
                            className={"h-[50px] bg-secondary-background rounded-full aspect-square hidden md:flex justify-center items-center -translate-x-full"}>
                            <FaBrain size={20} className={"text-primary-background"}/>
                        </motion.div>
                    </span>
                </h1>


                {/*MARK: Page Description*/}
                <motion.h3
                    animate={{
                        x: 0
                    }}
                    initial={{
                        x: "-150%"
                    }}
                    transition={{
                        duration: 1.25,
                        delay: 0.3,
                        ease: [0.83, 0, 0.17, 1]
                    }}
                    className={"text-white/80 md:text-left text-center md:!pr-[15rem] !mt-[2.5rem] bp-1410:text-[1.3rem] text-[1rem]"}>
                    Engage with intelligent AI debates that challenge perspectives, simplify complex topics, and
                    accelerate deep understanding through argument-driven learning. <span
                    className={"underline underline-offset-2 text-white cursor-pointer"}>Trust us with your knowledge!</span>
                </motion.h3>


                {/*MARK: Mian Page Button*/}
                <motion.div
                    animate={{
                        opacity: 1,
                        filter: "blur(0px)"
                    }}
                    initial={{
                        opacity: 0,
                        filter: "blur(3px)"
                    }}
                    transition={{
                        duration: 1.25,
                        delay: 0.5,
                        ease: "linear"
                    }}
                    className={"flex items-center justify-center md:w-auto w-full !mt-[2.5rem]"}>
                    <motion.button
                        whileTap={{
                            opacity: 0.25
                        }}
                        className={"bg-secondary-background group rounded-full !px-[1.25rem] !py-[0.75rem] text-black font-family-roboto cursor-pointer font-normal flex items-center gap-[0.5rem]"}>
                        Discover Clean Learning
                        <IoArrowUp size={25}
                                   className={"rotate-[45deg] group-hover:rotate-[90deg] transition-transform duration-200"}/>
                    </motion.button>


                    <motion.button
                        className={"rounded-full !px-[1.25rem] !py-[0.75rem] text-white font-family-roboto cursor-pointer font-normal flex items-center gap-[0.5rem] border-white border-[1px] hover:text-black hover:bg-white transition-colors "}>
                        See Pricing
                    </motion.button>
                </motion.div>


                <motion.p
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    initial={{
                        y: "20vh",
                        opacity: 0
                    }}
                    transition={{
                        duration: 1.25,
                        delay: 0.6,
                        ease: [0.83, 0, 0.17, 1]
                    }}
                    className={"text-white font-family-roboto font-normal !mt-[5rem] flex items-center gap-[1rem] bg-white/10 !px-[1.25rem] !py-[0.75rem] rounded-[0.25rem]"}>
                    Scroll Down For More Info
                    <motion.span
                        animate={{
                            y: [0, 10, 5, 10, 5, 10, 0]
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatDelay: 2,
                            duration: 2,
                        }}
                        className={"inline-block"}>
                        <IoArrowDown size={20}/>
                    </motion.span>
                </motion.p>
            </div>


            {/*MARK: Second Half*/}

            <div className={"h-full flex-1 hidden md:flex justify-center items-center !mt-[2rem]"}>

                <div className={"grid grid-cols-2 grid-rows-3 gap-[0.25rem]"}>
                    {
                        gridItems.map((item: GridItemInter, index: number): React.JSX.Element => {
                            return (
                                <motion.div
                                    animate={{
                                        x: 0,
                                    }}
                                    initial={{
                                        x: "80vw"
                                    }}
                                    transition={{
                                        x: {
                                            duration: 1.25,
                                            delay: 0.4 + (index * 0.05),
                                            ease: [0.83, 0, 0.17, 1]
                                        },
                                        borderRadius: {
                                            duration: 0.25,
                                            ease: [0.83, 0, 0.17, 1]
                                        }
                                    }}
                                    whileHover={{
                                        borderRadius: "5rem"
                                    }}
                                    className={twMerge(item.backgroundColor, item.textColor, item.customStyling, "bp-1410:h-[14rem] bp-1410:w-[18rem] w-[15rem] h-[12rem] !p-[2rem] relative overflow-hidden rounded-2xl")}
                                    key={index}>
                                    {item.content}
                                    {index == 2 ?
                                        <Image src={GrayBackground} alt={"Background"} fill
                                               className={"opacity-[40%]"}/>
                                        : index == 4 ?
                                            <Image src={DarkBackground} alt={"Background"} fill
                                                   className={"opacity-[30%] pointer-events-none"}/>
                                            : <span></span>}
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}