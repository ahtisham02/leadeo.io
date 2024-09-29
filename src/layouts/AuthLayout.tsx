import { Link, Outlet } from "react-router-dom";
import sideBg from "@/assets/images/sidebar.png";
import logo from "@/assets/svg/white-logo.svg";
import { FaArrowLeft, FaCheck } from "react-icons/fa6";

const AuthLayout = () => {
    return (
        <section className="h-max w-full min-h-screen flex">
            <div className="hidden md:block basis-1/4 max-w-xs min-h-screen h-full relative">
                <img src={sideBg} alt="" className="absolute h-full w-full" />
                <div className="flex flex-col justify-between min-h-screen h-full py-8 px-12">
                    <img className="z-10 w-[142px] h-auto" src={logo} alt="logo" />
                    <div className="flex flex-col gap-8 z-10">
                        <h4 className="text-white font-semibold font-gibson text-xl">
                            Self-service API tool
                        </h4>
                        <div className="">
                            <div className="text-white flex flex-col gap-4">
                                <div className="flex gap-2 items-center text-white text-base"> <FaCheck className="min-w-5 min-h-3.5" /> Access 1B+ employee, company, and job posting records</div>
                                <div className="flex gap-2 items-center text-white text-base"> <FaCheck className="min-w-5 min-h-3.5" /> Search and collect data via API</div>
                                <div className="flex gap-2 items-center text-white text-base"> <FaCheck className="min-w-5 min-h-3.5" /> Buy and manage API credits</div>
                                <div className="flex gap-2 items-center text-white text-base"> <FaCheck className="min-w-5 min-h-3.5" /> See the API data dictionary and samples</div>
                                <div className="flex gap-2 items-center text-white text-base"> <FaCheck className="min-w-5 min-h-3.5" /> Build and download custom datasets</div>
                            </div>
                        </div>
                    </div>
                    <Link className="flex gap-2 items-center text-white text-xs z-10 group" to={"/"}> <FaArrowLeft className="min-w-5 min-h-3.5 group-hover:animate-arrow-right" /> Back to homepage</Link>
                </div>
            </div>
            <div className="flex-1 h-full">
                <Outlet />
            </div>
        </section>
    );
};

export default AuthLayout;
