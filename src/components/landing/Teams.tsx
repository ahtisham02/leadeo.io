import TeamImg from "@/assets/images/learn-skills.webp"
import hireImg from "@/assets/images/hire-top-talent-faster-1024x853.webp"
import upskill from "@/assets/images/develop-upskill-reskill.webp"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Icons } from "../Icons";
import { FaArrowRight } from "react-icons/fa6";

const Teams = () => {
    return (
        <section className="flex justify-center items-center py-10">
            <div className="container">
                <div className="w-full flex justify-center items-center bg-muted rounded-md overflow-hidden">
                    <Tabs defaultValue={"learn"}>
                        <div className="overflow-x-auto w-[85vw] md:hidden" style={{ scrollbarWidth: "none" }}>
                            <TabsList className="min-h-[75px] min-w-[800px]" >
                                <TabsTrigger value="learn" className="text-purple-black font-bold !py-4 !px-8 data-[state=active]:shadow-none data-[state=active]:!text-secondary-background data-[state=active]:!bg-[#E5E8ED]">Learn new skills</TabsTrigger>
                                <TabsTrigger value="hire" className="text-purple-black font-bold !py-4 !px-8 data-[state=active]:shadow-none data-[state=active]:!text-secondary-background data-[state=active]:!bg-[#E5E8ED]">Hire top talent, faster</TabsTrigger>
                                <TabsTrigger value="upskill" className="text-purple-black font-bold !py-4 !px-8 data-[state=active]:shadow-none data-[state=active]:!text-secondary-background data-[state=active]:!bg-[#E5E8ED]">Upskill or reskill your team</TabsTrigger>
                            </TabsList>
                        </div>
                        <TabsList className="min-h-[75px] max-md:hidden w-full" >
                            <TabsTrigger value="learn" className="text-purple-black font-bold !py-4 !px-8 data-[state=active]:shadow-none data-[state=active]:!text-secondary-background data-[state=active]:!bg-[#E5E8ED]">Learn new skills</TabsTrigger>
                            <TabsTrigger value="hire" className="text-purple-black font-bold !py-4 !px-8 data-[state=active]:shadow-none data-[state=active]:!text-secondary-background data-[state=active]:!bg-[#E5E8ED]">Hire top talent, faster</TabsTrigger>
                            <TabsTrigger value="upskill" className="text-purple-black font-bold !py-4 !px-8 data-[state=active]:shadow-none data-[state=active]:!text-secondary-background data-[state=active]:!bg-[#E5E8ED]">Upskill or reskill your team</TabsTrigger>
                        </TabsList>
                        <TabsContent value="learn">
                            <div className="flex gap-4 sm:p-16 p-2 lg:flex-row flex-col" >
                                <div className="flex-1">
                                    <div className="flex gap-4 items-center py-4">
                                        <div className="max-sm:hidden">
                                            <Icons.learn />
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <h5 className="hover:text-secondary-background transition-all duration-700 font-bold">Learn</h5>
                                            <p className="text-xs font-semibold">Level up and advance your career with practice-based learning that meets you where you are and adapts to your unique skills journey.</p>
                                            <div className="flex gap-2 items-center group cursor-pointer text-secondary-background font-bold">
                                                <h5>Get started</h5>
                                                <FaArrowRight className="group-hover:animate-arrow-right transition-all duration-700" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <img src={TeamImg} alt="logo" />
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="hire">
                            <div className="flex gap-4 sm:p-16 p-2 lg:flex-row flex-col">
                                <div className="flex-1 flex flex-col">
                                    <div className="flex gap-4 items-center py-4">
                                        <div className="max-sm:hidden">
                                            <Icons.learn />
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <h5 className="hover:text-secondary-background transition-all duration-700 font-bold">Pre-Screen</h5>
                                            <p className="text-xs font-semibold">Ditch the resume screens and hone in on skilled candidates early with our top-of-funnel evaluations for high-volume pipelines. </p>
                                            <div className="flex gap-2 items-center group cursor-pointer text-secondary-background font-bold">
                                                <h5>Get started</h5>
                                                <FaArrowRight className="group-hover:animate-arrow-right transition-all duration-700" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-center py-4">
                                        <div className="max-sm:hidden">
                                            <Icons.learn />
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <h5 className="hover:text-secondary-background transition-all duration-700 font-bold">Interview</h5>
                                            <p className="text-xs font-semibold">Deliver the best candidate experience in a realistic coding environment, while accurately evaluating skill and fit.</p>
                                            <div className="flex gap-2 items-center group cursor-pointer text-secondary-background font-bold">
                                                <h5>Get started</h5>
                                                <FaArrowRight className="group-hover:animate-arrow-right transition-all duration-700" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <img src={hireImg} alt="logo" />
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="upskill">
                            <div className="flex gap-4 sm:p-16 p-2 lg:flex-row flex-col">
                                <div className="flex-1">
                                    <div className="flex gap-4 items-center py-4">
                                        <div className="max-sm:hidden">
                                            <Icons.learn />
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <h5 className="hover:text-secondary-background transition-all duration-700 font-bold">Develop</h5>
                                            <p className="text-xs font-semibold">Improve team performance with personalized, practice-based, technical learning that delivers real, measurable results.</p>
                                            <div className="flex gap-2 items-center group cursor-pointer text-secondary-background font-bold">
                                                <h5>Get started</h5>
                                                <FaArrowRight className="group-hover:animate-arrow-right transition-all duration-700" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <img src={upskill} alt="logo" />
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    );
};

export default Teams;
