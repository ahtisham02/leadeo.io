import { useRef } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import google from "@/assets/svg/google-ar21.svg"
import okta from "@/assets/svg/okta-ar21.svg"
import zap from "@/assets/svg/zapier-ar21.svg"
import lev from "@/assets/svg/leverco-ar21.svg"
import air from "@/assets/svg/airtable-ar21.svg"
import orc from "@/assets/svg/oracle-ar21.svg"
import slack from "@/assets/svg/slack-ar21.svg"
import work from "@/assets/svg/workato-ar21.svg"
import hero from "@/assets/images/cover-image.webp"

const logos = [google, okta, zap, air, lev, orc, slack, work];

const Hero = () => {
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    return (
        <section className="flex justify-center flex-col items-center bg-[#F8F8F8]">
            <div className="container">
                {/* <div className="flex justify-center items-center lg:py-12 flex-col lg:flex-row lg:gap-16 gap-4">
                    <div className="flex-1 flex flex-col gap-8 lg:items-start items-center">
                        <h1 className="text-[28px] leading-7 sm:text-[64px] sm:leading-[60px] font-bold text-purple-black max-lg:text-center">Empowering Corporate Decisions with Verified Data & AI-Driven Insights</h1>
                        <h5 className="text-lg text-purple-black max-lg:text-center">Unlock the potential of your data with AI-powered tools for actionable business intelligence.</h5>
                        <div className="flex gap-2 max-sm:flex-col">
                            <button className="bg-secondary-background text-white px-8 py-4 rounded-sm">For enterprise</button>
                            <button className="bg-transparent border-2 border-secondary-background text-secondary-background px-8 py-4 rounded-sm">For individuals</button>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img src={hero} alt="hero" />
                    </div>
                </div> */}
                <div className="flex flex-col lg:flex-row justify-center items-center py-12">
                    <div className="flex max-w-[540px] flex-1">
                        <div>
                            <h1 className="font-gibson text-purple-black text-center text-4xl font-semibold lg:text-left lg:text-5xl">People &amp; Company Data</h1>
                            <h2 className="font-gibson text-purple-black mt-6 text-center text-2xl font-light lg:text-left">We handle the heavy-lifting of data collection, so you can build innovative and compliant data solutions at scale.</h2>
                            <div className="mb-6 mt-8 flex flex-col sm:flex-row justify-center space-x-6 lg:mb-0 lg:justify-start gap-4">
                                <button aria-disabled="false" aria-label="TRY FOR FREE" className="justify-center font-gibson text-base not-italic font-medium leading-6 whitespace-nowrap uppercase border-2 border-solid rounded px-[0.875rem] py-2 cursor-pointer text-white bg-api-violet border-api-violet hover:bg-purple-black hover:border-purple-black hover:shadow-purple-black active:shadow-none active:bg-api-violet active:border-pdl-purple-new">
                                    <div className="flex items-center justify-center gap-2">TRY FOR FREE</div>
                                </button>
                                <button aria-disabled="false" aria-label="TALK TO AN EXPERT" className="justify-center !m-0 font-gibson text-base not-italic font-medium leading-6 whitespace-nowrap uppercase border-2 border-solid rounded px-[0.875rem] py-2 cursor-pointer text-api-violet bg-white border-pdl-purple-new hover:border-purple-black hover:shadow-purple-black active:shadow-none active:border-pdl-purple-new active:bg-[#F6F1FF]">
                                    <div className="flex items-center justify-center gap-2">TALK TO AN EXPERT</div>
                                </button>
                            </div>
                        </div>
                    </div>'
                    <div className="flex flex-1">
                        <div className="w-full px-5">
                            <img alt="PDL Dashboard Screenshot" fetchPriority="high" decoding="async" data-nimg="fill" className="!static" sizes="100vw" src={hero} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "contain", color: "transparent" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-white">
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full"
                    opts={{
                        loop: true,
                    }}
                >
                    <CarouselContent className="w-full">
                        {logos.map((item, index) => (
                            <CarouselItem className="basis-1/3 lg:basis-1/5" key={index}>
                                <div className="min-h-[120px] min- flex items-center">
                                    <img src={item} alt="logo" />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
};

export default Hero;
