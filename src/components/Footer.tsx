import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Linkedin } from "lucide-react";

const FooterSection = ({ title, items, to }: { title: string; items: string[], to?: string }) => (
    <div className="space-y-4">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        <ul className="space-y-2">
            {items.map((item, index) => (
                <li className="text-white" key={index}>
                    <Link to={to || ""} className="hover:underline">
                        {item}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
)

const Footer = () => {
    return (
        <footer className="flex flex-col bg-black gap-6">
            <div className="w-full flex justify-center items-center">
                <div className="container py-20">
                    <div className="flex gap-4 lg:flex-row flex-col">
                        <div className="flex-1 py-8 px-4 border border-white rounded-md flex flex-col justify-center items-center gap-4">
                            <div className="flex flex-col items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                                    <path d="M57.7255 7.52923H52.7059V0.71875L39.0851 7.52923H17.5686C14.1089 7.52923 11.2941 10.344 11.2941 13.8037V18.8233H6.27451C2.81475 18.8233 0 21.6381 0 25.0979V50.1959C0 53.6557 2.81475 56.4704 6.27451 56.4704H11.2941V63.2809L24.915 56.4704H46.4314C49.8911 56.4704 52.7059 53.6557 52.7059 50.1959V47.0586H57.7255C61.1853 47.0586 64 44.2439 64 40.7841V13.8037C64 10.344 61.1853 7.52923 57.7255 7.52923ZM48.9412 50.1959C48.9412 51.5798 47.8153 52.7057 46.4314 52.7057H24.0262L15.0588 57.1893V52.7057H6.27451C4.8906 52.7057 3.76471 51.5798 3.76471 50.1959V25.0979C3.76471 23.714 4.8906 22.5881 6.27451 22.5881H46.4314C47.8153 22.5881 48.9412 23.714 48.9412 25.0979V50.1959ZM60.2353 40.7841C60.2353 42.168 59.1094 43.2939 57.7255 43.2939H52.7059V25.0979C52.7059 21.6381 49.8911 18.8233 46.4314 18.8233H15.0588V13.8037C15.0588 12.4198 16.1847 11.2939 17.5686 11.2939H39.9738L48.9412 6.8103V11.2939H57.7255C59.1094 11.2939 60.2353 12.4198 60.2353 13.8037V40.7841Z" fill="white"></path>
                                    <path d="M7.5293 43.2939H45.1764V47.0587H7.5293V43.2939Z" fill="white"></path><path d="M7.5293 35.7646H45.1764V39.5294H7.5293V35.7646Z" fill="white"></path>
                                    <path d="M7.5293 28.2354H26.3528V32.0001H7.5293V28.2354Z" fill="white"></path>
                                </svg>
                                <h4 className="text-white font-semibold text-3xl text-center px-8">Ready to optimize your tech recruiting process?</h4>
                            </div>
                            <a className="py-2 px-4 bg-secondary-background hover:bg-purple-black cursor-pointer text-white rounded-md border border-transparent">REQUEST A CALL</a>
                        </div>
                        <div className="flex-1 py-8 px-4 border border-white rounded-md flex flex-col justify-center items-center gap-4">
                            <div className="flex flex-col items-center justify-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                    <path d="M47.7969 41.2344V8.12197C47.7969 3.6435 44.1534 0 39.675 0H5.6875V0.00142188C2.54647 0.0309531 0 2.59427 0 5.74219V14.7656H8.20312V18.4031C3.55348 19.1866 0 23.2404 0 28.1094C0 31.0183 1.26864 33.636 3.28125 35.4397V49.2218L8.20312 45.9406V47.8781C8.20312 52.3566 11.8466 56 16.325 56H50.3125V55.9986C53.4535 55.9689 56 53.4057 56 50.2578V41.2344H47.7969ZM3.28125 5.74219C3.28125 4.38528 4.38517 3.28125 5.74219 3.28125C7.0992 3.28125 8.20312 4.38528 8.20312 5.74219V11.4844H3.28125V5.74219ZM9.84375 21.5469C13.4623 21.5469 16.4062 24.4908 16.4062 28.1094C16.4062 31.7279 13.4623 34.6719 9.84375 34.6719C6.22519 34.6719 3.28125 31.7279 3.28125 28.1094C3.28125 24.4908 6.22519 21.5469 9.84375 21.5469ZM6.5625 37.3901C8.62477 38.1216 10.9534 38.1604 13.125 37.3901V43.0908L9.84375 40.9033L6.5625 43.0908V37.3901ZM11.4844 47.878V45.9405L16.4062 49.2217V35.4397C18.4189 33.6361 19.6875 31.0183 19.6875 28.1094C19.6875 23.2404 16.134 19.1866 11.4844 18.4031C11.4844 17.0341 11.4844 7.30625 11.4844 5.74219C11.4844 4.86194 11.2848 4.02762 10.9292 3.28125H39.675C42.3441 3.28125 44.5156 5.45278 44.5156 8.12197V50.2578C44.5156 51.1381 44.7152 51.9724 45.0708 52.7188H16.325C13.6559 52.7188 11.4844 50.5473 11.4844 47.878V47.878ZM52.7188 50.2578C52.7188 51.6147 51.6147 52.7188 50.2578 52.7188C48.9009 52.7188 47.7969 51.6147 47.7969 50.2578V44.5156H52.7188V50.2578Z" fill="white"></path>
                                    <path d="M24.6094 9.84375H39.375V13.125H24.6094V9.84375Z" fill="white"></path>
                                    <path d="M24.6094 18.2656H39.375V21.5469H24.6094V18.2656Z" fill="white"></path>
                                    <path d="M24.6094 26.4688H39.375V29.75H24.6094V26.4688Z" fill="white"></path>
                                    <path d="M24.6094 34.6719H39.375V37.9531H24.6094V34.6719Z" fill="white"></path>
                                    <path d="M24.6094 42.875H39.375V46.1562H24.6094V42.875Z" fill="white"></path>
                                </svg>
                                <h4 className="text-white font-semibold text-3xl text-center px-8">Advance your career with practice-based learning</h4>
                            </div>
                            <a className="py-2 px-4 bg-secondary-background hover:bg-purple-black cursor-pointer text-white rounded-md border border-transparent">GET STARTED</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold text-white">Need product support?</h2>
                            <Button className="text-white border-2 bg-transparent border-white hover:bg-white hover:text-purple-black">
                                CONTACT US
                            </Button>
                            <div className="mt-8 flex justify-start space-x-6">
                                <Link to={""} className="text-white hover:text-gray-300">
                                    <Linkedin size={24} />
                                </Link>
                                <Link to={""} className="text-white hover:text-gray-300">
                                    <FaYoutube size={24} />
                                </Link>
                                <Link to={""} className="text-white hover:text-gray-300">
                                    <FaTwitter size={24} />
                                </Link>
                                <Link to={""} className="text-white hover:text-gray-300">
                                    <FaFacebook size={24} />
                                </Link>
                            </div>
                        </div>

                        <FooterSection
                            title="Products"
                            items={['Pre-Screen', 'Interview', 'Develop', 'Learn', 'IDE', 'Evaluations', 'Pricing']}
                        />

                        <FooterSection
                            title="Solutions"
                            items={['For Talent Acquisition', 'For Engineering Leaders', 'For IO Psychologists', 'For Individuals']}
                        />

                        <FooterSection
                            title="Resources"
                            items={['Resource Library', 'Blog', 'Customer Stories', 'Interview Prep', 'Knowledge Base', 'Integrations', 'API Docs']}
                        />

                        <FooterSection
                            title="Company"
                            items={['About CodeSignal', 'Newsroom', 'Leadership', 'Talent Science']}
                        />
                    </div>

                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <div className="container h-0.5 bg-white"></div>
            </div>
            <div className="w-full flex justify-center items-start h-[70px]">
                <div className="container">
                    <div className="flex justify-between">
                        <p className="text-white font-semibold">Copyright © 2024 CodeSignal, Inc.</p>
                        <div className="lg:flex hidden gap-4">
                            <Link to="" className="text-white hover:text-blue-700 transition-all duration-700">Privacy</Link>
                            <Link to="" className="text-white hover:text-blue-700 transition-all duration-700">Terms</Link>
                            <Link to="" className="text-white hover:text-blue-700 transition-all duration-700">Master Subscription Agreement</Link>
                            <Link to="" className="text-white hover:text-blue-700 transition-all duration-700">Security & Compliance</Link>
                            <Link to="" className="text-white hover:text-blue-700 transition-all duration-700">Cookie Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

