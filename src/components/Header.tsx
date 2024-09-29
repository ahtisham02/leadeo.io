import { FaArrowRightLong } from "react-icons/fa6";
import logo from "@/assets/svg/Logo.svg"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Separator } from "./ui/separator";
import NavItem from "./ui/nav-items";
import NavCardItem from "./ui/nav-card-item";
import { Icons } from "./Icons";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Header = () => {
    return (
        <header className="w-full lg:fixed top-0 z-50">
            <div className="flex justify-center items-center w-full h-max bg-[#F8F8F8] pl-4 pr-6 xl:p-0 ">
                <div className="flex justify-between items-center h-full w-full xl:w-[1280px]">
                    <Link to={"/"}>
                        <img src={logo} />
                    </Link>
                    <div className="lg:flex items-center gap-1 xl:gap-4 flex-1 justify-end z-10 max-lg:hidden">
                        <HoverCard>
                            <div className="group">
                                <HoverCardTrigger>
                                    <NavItem>Products</NavItem>
                                </HoverCardTrigger>
                                <HoverCardContent className="!rounded-none flex flex-col min-w-max !p-0" align="start">
                                    <div className="flex justify-center cursor-default p-4">
                                        <div className="flex flex-col flex-1 gap-2 p-8">
                                            <div className="group relative overflow-hidden w-max h-[40px] flex items-center">
                                                <div className="absolute w-7/12 h-0.5 bg-primary-background bottom-0 left-0"></div>
                                                <p className="font-bold text-purple-black uppercase">Hire Suite</p>
                                            </div>
                                            <div className="flex flex-col">
                                                <NavCardItem description="Identify top talent at the top of the funnel" title="Pre Screen" logo={<Icons.preScreen />} />
                                                <Separator orientation="horizontal" className="bg-gray-300" />
                                                <NavCardItem description="Assess advanced skills in the most advanced IDE" title="Interview" logo={<Icons.interView />} />
                                            </div>
                                        </div>
                                        <div className="bg-gray-300 h-full w-[1px] min-h-[320px]" ></div>
                                        <div className="flex flex-col flex-1 gap-2 p-8">
                                            <div className="relative overflow-hidden w-max h-[40px] flex items-center">
                                                <div className="absolute w-7/12 h-0.5 bg-primary-background bottom-0 left-0"></div>
                                                <p className="font-bold text-purple-black uppercase">Develop Suite</p>
                                            </div>
                                            <div className="flex flex-col gap-4">
                                                <NavCardItem description="Build skills for your entire technical org" title="Develop" logo={<Icons.develop />} />
                                                <div className="p-4 bg-gradient-to-r from-[#1D263E] from-[40%] to-[#0051C6] rounded-sm">
                                                    <div className="flex flex-col gap-1">
                                                        <h5 className="hover:text-secondary-background text-white transition-all duration-700 text-lg">CodeSignal Learn</h5>
                                                        <p className="text-xs text-nowrap text-white">Level up your skills and advance your career</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-[#F8F8F8] py-4 px-12">
                                        <a className="uppercase font-bold flex gap-2 items-center hover:text-secondary-background transition-all duration-700">Explore all products <FaArrowRightLong /> </a>
                                    </div>
                                </HoverCardContent>
                            </div>
                        </HoverCard>
                        <HoverCard>
                            <HoverCardTrigger>
                                <NavItem>Solutions</NavItem>
                            </HoverCardTrigger>
                            <HoverCardContent className="!rounded-none flex flex-col min-w-max !p-0" align="start">
                                <div className="flex flex-col flex-1 gap-2 p-12">
                                    <div className="group relative overflow-hidden w-max h-[40px] flex items-center">
                                        <div className="absolute w-7/12 h-0.5 bg-primary-background bottom-0 left-0"></div>
                                        <p className="font-bold text-purple-black uppercase">By Role</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <NavCardItem description="From high-volume to hard-to-fill, you’ve got this" title="For Talent Acquisition" logo={<Icons.preScreen />} />
                                        <Separator orientation="horizontal" className="bg-gray-300" />
                                        <NavCardItem description="Because technical interviewing isn’t your full-time job" title="For Engineering Leaders." logo={<Icons.interView />} />
                                        <Separator orientation="horizontal" className="bg-gray-300" />
                                        <NavCardItem description="Validated & research-backed technical skills assessments" title="For IO Psychologists." logo={<Icons.interView />} />
                                    </div>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                        <HoverCard>
                            <HoverCardTrigger><NavItem>Resources</NavItem></HoverCardTrigger>
                            <HoverCardContent className="!rounded-none flex flex-col min-w-max !p-0" align="start"></HoverCardContent>
                        </HoverCard>
                        <HoverCard>
                            <HoverCardTrigger>
                                <NavItem to={"/about"}>About</NavItem>
                            </HoverCardTrigger>
                            <HoverCardContent className="!rounded-none flex flex-col min-w-max !p-0" align="start">
                                <div className="flex flex-col flex-1 gap-2 p-12">
                                    <div className="group relative overflow-hidden w-max h-[40px] flex items-center">
                                        <div className="absolute w-7/12 h-0.5 bg-primary-background bottom-0 left-0"></div>
                                        <p className="font-bold text-purple-black uppercase">By Role</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <NavCardItem to="/about" description="Learn about CodeSignal & our culture" title="About CodeSignal" logo={<Icons.preScreen />} />
                                        <Separator orientation="horizontal" className="bg-gray-300" />
                                        <NavCardItem description="The latest CodeSignal news & press" title="Newsroom" logo={<Icons.interView />} />
                                        <Separator orientation="horizontal" className="bg-gray-300" />
                                        <NavCardItem description="Meet our leadership team" title="Leadership" logo={<Icons.interView />} />
                                        <Separator orientation="horizontal" className="bg-gray-300" />
                                        <NavCardItem description="Meet our team of scientists & assessment researchers" title="Talent Science" logo={<Icons.interView />} />
                                    </div>
                                </div>
                            </HoverCardContent>
                        </HoverCard>

                        <NavItem to={"/pricing"}>Pricing</NavItem>
                        <div className="w-[1px] h-4 border rounded-sm"></div>
                        <NavItem>For Individuals</NavItem>

                        <HoverCard>
                            <HoverCardTrigger>
                                <NavItem to={"/auth/login"}>Log In</NavItem>
                            </HoverCardTrigger>
                            <HoverCardContent className="!rounded-none flex flex-col min-w-max !p-0" align="start">
                                <div className="flex flex-col flex-1 gap-2 p-8">
                                    <div className="flex flex-col">
                                        <NavCardItem description="Access your company account." title="Company Login" logo={<Icons.preScreen />} />
                                        <Separator orientation="horizontal" className="bg-gray-300" />
                                        <NavCardItem description="Access your individual account." title="Individual Login" logo={<Icons.interView />} />
                                    </div>
                                </div>
                            </HoverCardContent>
                        </HoverCard>

                        <Link className="px-4 py-2 text-white bg-secondary-background rounded-lg" to={"/auth/register"}>Get Started</Link>
                    </div>
                    <div className="lg:hidden h-[75px] flex items-center">
                        <Sheet>
                            <SheetTrigger>Burgger</SheetTrigger>
                            <SheetContent side={"left"}>

                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
