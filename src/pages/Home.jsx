import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/core/HomePage/CodeBlocks';

export default function Home() {
    return (
        <div>
            {/* section 1 */}
            <section className='relative mx-auto flex flex-col w-11/12 items-center text-white justify-between max-w-maxContent'>
                <Link to={"/signup"}>
                    <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit shadow-[inset_-2px_-2px_0_0_rgba(255,255,255,0.2)]'>

                        <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
                            <p>Become an Instructor</p>
                            <span><FaArrowRight /></span>

                        </div>
                    </div>
                </Link>


                <div className='text-center text-4xl font-semibold mt-7'>
                    Empower Your Future with <HighlightText text={"Coding Skills"}></HighlightText>
                </div>

                <div className='w-[90%] text-center text-lg font-bold text-richblack-300 mt-4'>
                    With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
                </div>

                <div className='flex flex-row gap-7 mt-8'>
                    <CTAButton active={true} linkTo={"/signup"}>
                        Learn More
                    </CTAButton>

                    <CTAButton active={false} linkTo={"/login"}>
                        Book a Demo
                    </CTAButton>
                </div>

                {/* video */}
                <div className='mx-3 my-12 shadow-[10px_10px_0_0_white] lg:w-[1035px] lg:h-[515px] relative'>

                    {/* gradient */}
                    <div className='absolute video-gradient z-10'></div>
                    <video className='absolute z-20' muted loop autoPlay>
                        <source src={Banner} type='video/mp4' />

                    </video>
                </div>



                {/* code section 1 */}
                <div>
                    <CodeBlocks position={"lg:flex-row"} heading={
                        <div className='text-4xl font-semibold'>
                            Unlock your <HighlightText text={"coding potential"} /> with our online courses.
                        </div>
                    }
                        subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}

                        ctabtn1={
                            {
                                btnText: "try it yourself",
                                linkTo: "/signup",
                                active: true
                            }
                        }

                        ctabtn2={
                            {
                                btnText: "learn more",
                                linkTo: "/login",
                                active: false
                            }
                        }

                        codeblock={`<!DOCTYPE html>\n<html>\n<head><title>Example</title><linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><a href="/">Header</a>\n</h1>\n<nav><a href="one/">One</a><a href="two/">Two</a><ahref="three/">Three</a>\n</nav>`}

                        codeColor={"text-yellow-25"}

                        bgGradient={<div className="codeblock1 absolute"></div>}

                    />

                    <CodeBlocks position={"lg:flex-row-reverse"} heading={
                        <div className='text-4xl font-semibold'>
                            Unlock your <HighlightText text={"coding potential"} /> with our online courses.
                        </div>
                    }
                        subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}

                        ctabtn1={
                            {
                                btnText: "try it yourself",
                                linkTo: "/signup",
                                active: true
                            }
                        }

                        ctabtn2={
                            {
                                btnText: "learn more",
                                linkTo: "/login",
                                active: false
                            }
                        }

                        codeblock={`<!DOCTYPE html>\n<html>\n<head><title>Example</title><linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><a href="/">Header</a>\n</h1>\n<nav><a href="one/">One</a><a href="two/">Two</a><ahref="three/">Three</a>\n</nav>`}

                        codeColor={"text-yellow-25"}
                        bgGradient={<div className="codeblock2 absolute"></div>}


                    />



                </div>
            </section>


            {/* section 2 */}
            <div className='bg-pure-greys-5 text-richblack-700'>
                <div className='homepage-bg'>

                </div>
            </div>



            {/* section 3 */}



            {/* footer */}
        </div>
    )
}
