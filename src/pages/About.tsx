import about1 from "@/assets/images/fortalentacq-hero@2x.jpg"
import about2 from "@/assets/images/fortalentacq-features.jpg"
import { Plus, Minus } from 'lucide-react'
import {  useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const AboutPage = () => {

    const [openItems, setOpenItems] = useState<string[]>(['item-1'])

    const handleToggle = (value: string) => {
        setOpenItems((prev: any) =>
            prev.includes(value)
                ? prev.filter((item: any) => item !== value)
                : [...prev, value]
        )
    }

    const autoplay = useRef(
        Autoplay({ delay: 5000, stopOnInteraction: false })
    )

    const items = [
        {
            id: 'item-1',
            title: 'Data Integrity',
            content: 'We only offer data that meets strict accuracy and relevance standards.'
        },
        {
            id: 'item-2',
            title: 'AI-Driven Insights',
            content: 'Our AI-powered tools enable seamless interaction with data, giving you deeper insights and more accurate predictions.'
        },
        {
            id: 'item-3',
            title: 'Tailored Corporate Solutions',
            content: 'We focus on corporate clients, understanding their unique challenges and providing customized data and AI solutions to meet their specific needs.'
        },
        {
            id: 'item-4',
            title: 'Customer-Centric Support',
            content: 'Our team of experts works closely with you to ensure your data and AI initiatives deliver maximum impact on your business.'
        }
    ]

    const teamMembers = [
        {
            name: "John Matthews",
            role: "CEO & Co-Founder",
            description: "With a passion for data and innovation, John brings over 15 years of experience in corporate data strategies and AI integration. He leads Leadeo.io with a commitment to transforming business decision-making through technology.",
            avatar: "/placeholder.svg?height=100&width=100"
        },
        {
            name: "Sarah Patel",
            role: "Chief Data Scientist",
            description: "Sarah is the architect of our rigorous data verification system. Her extensive background in data science ensures that our clients always receive the most accurate and reliable data available.",
            avatar: "/placeholder.svg?height=100&width=100"
        },
        {
            name: "Marcus Brooks",
            role: "Head of AI Development",
            description: "A pioneer in AI, Marcus has designed our proprietary AI models, helping businesses leverage AI to make sense of their data and predict future trends.",
            avatar: "/placeholder.svg?height=100&width=100"
        },
        {
            name: "Emily Carter",
            role: "VP of Business Development",
            description: "Emily drives our client relations, ensuring that every corporate partner finds value in our services. She specializes in aligning our data and AI solutions with corporate needs to achieve measurable growth.",
            avatar: "/placeholder.svg?height=100&width=100"
        },
        {
            name: "Laura Kim",
            role: "Director of Product Innovation",
            description: "Laura oversees the development of our user-friendly platform, ensuring a seamless experience for our clients as they interact with their data.",
            avatar: "/placeholder.svg?height=100&width=100"
        }
    ]
    return (
        <div className="flex flex-col gap-8 lg:gap-16 w-full justify-center items-center pb-10">
            <div className="container">
                <div className="flex justify-center items-center py-12 flex-col gap-16">
                    <h1 className="text-[48px] leading-7 sm:text-[64px] sm:leading-[60px] font-bold text-purple-black max-lg:text-center text-purple-black">Who We Are</h1>
                    <div className="flex-1">
                        <div className="flex justify-center items-center lg:py-12 flex-col-reverse lg:flex-row lg:gap-16 gap-4">
                            <div className="flex-1">
                                <img src={about1} alt="hero" className="rounded-lg" />
                            </div>
                            <div className="flex-1 flex flex-col gap-2 lg:gap-8 items-start">
                                <h1 className="text-[28px] leading-7 sm:text-[64px] sm:leading-[60px] font-bold text-purple-black max-lg:text-center text-purple-black">Our Mission:</h1>
                                <h5 className="text-lg font-semibold max-lg:text-sm text-purple-black max-lg:text-center">At <b className="text-secondary-background">Leadeo.io</b>, we believe that the future of business lies in the power of <b className="text-secondary-background">verified data</b> and <b className="text-secondary-background">AI-driven insights</b>. Our mission is simple yet profound: to enable corporate companies to make smarter, faster, and more informed decisions by giving them access to <b className="text-secondary-background">accurate</b>, <b className="text-secondary-background">high-quality data</b> and empowering them with tools that leverage <b className="text-secondary-background">artificial intelligence</b>. We aim to bridge the gap between raw data and actionable insights, helping businesses thrive in today’s competitive market.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container flex flex-col gap-8">
                <div className="flex justify-center items-center lg:py-12 flex-col lg:flex-row lg:gap-16 gap-4">
                    <div className="flex-1 flex flex-col gap-2 lg:gap-8 items-start">
                        <h1 className="text-[28px] leading-7 sm:text-[64px] sm:leading-[60px] font-bold text-purple-black max-lg:text-center text-purple-black">Our Approach:</h1>
                        <h5 className="text-lg font-semibold max-lg:text-sm text-purple-black max-lg:text-center">We provide <b className="text-secondary-background">verified data</b> that is curated through a rigorous verification process, ensuring that your business decisions are based on <b className="text-secondary-background">facts</b>, not assumptions. Our advanced <b className="text-secondary-background">AI tools</b> transform your data into meaningful insights, enabling you to understand, interact with, and predict trends with ease.</h5>
                    </div>
                    <div className="flex-1">
                        <img src={about1} alt="hero" className="rounded-lg" />
                    </div>
                </div>
                <div className="flex justify-center items-start lg:py-12 flex-col lg:flex-row lg:gap-16 gap-4">
                    <div className="flex-1 h-[500px] hidden lg:flex justify-start items-center relative ">
                        <img src={about2} alt="hero" className="h-full rounded-lg" />
                        <div className="absolute p-4 flex gap-4 justify-center items-start flex-col min-h-[220px] max-w-[240px] bg-secondary-background bottom-8 right-[300px] rounded-md">
                            <div className="text-white text-5xl font-bold">45%</div>
                            <div className="text-white font-semibold">Increase in onsite to offer rate</div>
                        </div>
                        <div className="absolute p-4 flex justify-center items-start gap-4 flex-col min-h-[220px] max-w-[240px] bg-black bottom-8 right-10 rounded-md">
                            <div className="text-white text-5xl font-bold">2x</div>
                            <div className="text-white font-semibold">Candidates evaluated with the same resources</div>
                        </div>
                    </div>
                    <div className="lg:flex-[0.7] w-full flex flex-col items-center gap-2 lg:gap-8">
                        <h1 className="text-[28px] leading-7 sm:text-[48px] sm:leading-[60px] font-bold text-purple-black max-lg:text-center">What Sets Us Apart</h1>
                        <div className="w-full">
                            {items.map((item) => (
                                <div key={item.id} className="border-b border-gray-200">
                                    <button
                                        onClick={() => handleToggle(item.id)}
                                        className="flex gap-4 items-center py-4 w-full text-left text-lg font-medium focus:outline-none"
                                    >
                                        {openItems.includes(item.id) ? (
                                            <Minus className="h-5 w-5 text-primary flex-shrink-0" />
                                        ) : (
                                            <Plus className="h-5 w-5 text-primary flex-shrink-0" />
                                        )}
                                        {item.title}
                                    </button>
                                    {openItems.includes(item.id) && (
                                        <div className="py-4 text-xl text-gray-600">
                                            {item.content}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-8">
                <div className="container">
                    <div className="flex-1">
                        <div className="flex justify-center items-center lg:py-12 flex-col lg:flex-row lg:gap-16 gap-4">
                            <div className="flex-1 flex flex-col gap-2 lg:gap-8 items-start">
                                <h1 className="text-[28px] leading-7 sm:text-[64px] sm:leading-[60px] font-bold text-purple-black max-lg:text-center">Our Vision:</h1>
                                <h5 className="text-lg font-semibold max-lg:text-sm text-purple-black max-lg:text-center">We envision a future where businesses of all sizes can harness the <b className="text-secondary-background">power of data and AI</b> to drive innovation, growth, and success. By providing verified data and cutting-edge AI tools, we help companies unlock the full potential of their information, leading to smarter decisions and sustainable business growth.</h5>
                            </div>
                            <div className="flex-1">
                                <img src={about1} alt="hero" className="rounded-lg" />
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="text-4xl font-bold text-center mb-2 lg:mb-8 text-purple-black">The Team Behind Leadeo.io</h2>
                <Carousel
                    className="w-full max-w-[90%] lg:max-w-[80%]"
                    plugins={[autoplay.current]}
                    opts={{
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        {teamMembers.map((member, index) => (
                            <CarouselItem key={index} className="md:pl-4 md:basis-1/3 lg:basis-1/3">
                                <Card className="min-h-[360px] flex flex-col">
                                    <CardHeader className="flex-grow flex flex-col items-center justify-center">
                                        <Avatar className="w-32 h-32 mb-4">
                                            <AvatarImage src={member.avatar} alt={member.name} />
                                            <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                        </Avatar>
                                        <CardTitle className="text-2xl font-bold text-center text-purple-black">{member.name}</CardTitle>
                                        <CardDescription className="text-lg text-center">{member.role}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow flex items-center">
                                        <p className="text-sm text-muted-foreground text-center">{member.description}</p>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}

export default AboutPage