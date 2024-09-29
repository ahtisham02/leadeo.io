import Dev from "@/assets/images/developer.jpg"
import Uni from "@/assets/images/2024-university-ranking-report-resource-cover.jpg"
import Cand from "@/assets/images/candidatexp.jpg"
import Cover from "@/assets/images/Resource-Cover.webp"
import { FaArrowRight } from "react-icons/fa6";

const Resources = () => {
    return (
        <section className="w-full flex justify-center items-center py-10">
            <div className="container flex flex-col gap-8">
                <div className="flex justify-between flex-col sm:flex-row sm:items-center">
                    <h2 className="text-[48px] font-semibold text-purple-black">Resources</h2>
                    <div className="flex gap-2 items-center text-lg group cursor-pointer text-secondary-background">
                        <h5>View All Resources</h5>
                        <FaArrowRight className="group-hover:animate-arrow-right transition-all duration-700" />
                    </div>
                </div>
                <div className="w-full h-0.5 bg-[#E2E2E2]"></div>
                <div className="flex w-full gap-8 lg:flex-row flex-col">
                    <div className="flex lg:w-[68%]">
                        <a href="" className="flex flex-col gap-4">
                            <img src={Cand} alt="" className="border border-transparent rounded-md" />
                            <span className="font-semibold text-purple-black text-xl">AI Skills Report: Meeting the demand for AI & ML engineers</span>
                        </a>
                    </div>
                    <div className="flex flex-col gap-6 flex-1">
                        <a href="" className="flex flex-col gap-4">
                            <img src={Cover} alt="" className="border border-transparent rounded-md" />
                            <span className="font-semibold text-purple-black text-xl">The AI Revolution in Tech: Trends and Impacts</span>
                        </a>
                        <a href="" className="flex flex-col gap-4">
                            <img src={Uni} alt="" className="border border-transparent rounded-md" />
                            <span className="font-semibold text-purple-black text-xl">CodeSignal University Ranking Report 2024</span>
                        </a>
                    </div>
                </div>
                <div className="flex gap-6 lg:flex-row flex-col">
                    <a href="" className="flex flex-col gap-4 flex-1">
                        <img src={Dev} alt="" className="border border-transparent rounded-md" />
                        <span className="font-semibold text-purple-black text-xl">Report: Developers and AI Coding Assistant Trends</span>
                    </a>
                    <a href="" className="flex flex-col gap-4 flex-1">
                        <img src={Cand} alt="" className="border border-transparent rounded-md" />
                        <span className="font-semibold text-purple-black text-xl">Putting Talent First: How to Optimize the Candidate Experience</span>
                    </a>
                    <a href="" className="flex flex-col gap-4 flex-1">
                        <img src={Uni} alt="" className="border border-transparent rounded-md" />
                        <span className="font-semibold text-purple-black text-xl">AI vs. human engineers: Benchmarking coding skills head-to-head</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Resources;
