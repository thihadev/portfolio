'use client'
import TypeWriter from '@/components/TypeWriter'
import {
    RiArrowDownSLine
} from 'react-icons/ri'
import Socials from "./Socials";
import DevImg from "./DevImg";
import Skills from './Skills';

export default function Hero() {
    return (
        <>
            <section className="py-12 xl:py-24 h-[82vh] xl:pt-28">
                <div className="container mx-auto">
                    <div className="flex justify-center">
                        <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center">
                            <h3 className="text-4xl font-semibold mb-4 text-primary tracking-[2px]"> 
                                Hello World {" "}
                                <span role="img" aria-labelledby="wave" className="wave">👋</span>
                            </h3>
                            <h1 className="text-4xl font-semibold mb-4 text-primary py-3">I&apos;m 
                                <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-right bg-[length:200%_auto] animate-gradient"> 
                                    &nbsp; THIHA SOE
                                </span>
                            </h1>

                            <h5 className="font-semibold text-primary mb-8 lg:text-4xl text-3xl max-w-full mx-auto xl:mx-0">
                                <TypeWriter />
                            </h5>

                            <p className="subtitle max-w-full mx-auto xl:mx-0">
                                Web Developer with 5+ years of experience in web application development using PHP and Laravel framework.
                                Proficient in developing databases, user interfaces, testing, and debugging.
                            </p>

                            {/* <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                                <Link href='/contact'>
                                    <Button className="gap-x-2">Contact me</Button>
                                </Link>

                                <Button variant="secondary" className="gap-x-2">Download</Button>

                            </div> */}
                            {/* <div className="gap-x-3 mx-auto xl:mx-0 mb-12">
                                <Skills/>
                            </div>  */}

                            <Socials 
                                containerStyles="flex gap-x-6 justify-center mx-auto xl:mx-0"
                                iconsStyles="text-foreground text-[20px] border border-muted p-3 rounded-full border-primary hover:bg-secondary"
                            />
                        </div>
                        

                        <div className="hidden xl:flex relative">
                            {/* <div>
                                <DevImg 
                                    containerStyles="w-[510px] h-[420px] bg-no-repeat relative bg-bottom" 
                                    imgSrc='/hero/thiha3.png'
                                />
                            </div> */}
                        </div>
                    </div>

                    {/* <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
                        <RiArrowDownSLine className="text-3xl text-primary"/>
                    </div> */}
                </div>
            </section>
        </>
    )
}