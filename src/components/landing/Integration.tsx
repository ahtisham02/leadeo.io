import React from 'react';
import google from "@/assets/svg/google-ar21.svg"
import okta from "@/assets/svg/okta-ar21.svg"
import one from "@/assets/svg/OneLogin-Logo.wine.svg"
import zap from "@/assets/svg/zapier-ar21.svg"
import lev from "@/assets/svg/leverco-ar21.svg"
import air from "@/assets/svg/airtable-ar21.svg"
import orc from "@/assets/svg/oracle-ar21.svg"
import slack from "@/assets/svg/slack-ar21.svg"
import work from "@/assets/svg/workato-ar21.svg"
import green from "@/assets/svg/greenhouse-software-vector-logo-2023.svg"

const logosLeft = [google, okta, one, zap, air];
const logosRight = [lev, orc, slack, work, green];

const IntegrationComponent: React.FC<any> = () => {
    return (
        <div className="flex justify-center items-center py-10">
            <div className="container">
                <div className="relative flex justify-between items-center md:gap-12 py-16 flex-col md:flex-row">
                    {/* Left Container with Decorations */}
                    <div className="relative w-full md:w-1/2 gap-4 flex items-center justify-center">

                        <div className="absolute inset-0">
                        </div>

                        {/* Left Scrolling Logos */}
                        <div className="overflow-hidden relative w-max h-[300px]">
                            <div id="left-scroll" className="scroll-wrapper">
                                {logosLeft.concat(logosLeft).map((logo, index) => (
                                    <div key={index} className="scroll-item">
                                        <div className="bg-white rounded-lg shadow-lg p-4 flex justify-center items-center w-32 min-[480px]:w-[220px] md:w-40 h-20">
                                            <img src={logo} alt={"logo"} className="max-w-full max-h-full" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Scrolling Logos */}
                        <div className="overflow-hidden relative w-max h-[300px]">
                            <div id="right-scroll" className="scroll-wrapper reverse-scroll">
                                {logosRight.concat(logosRight).map((logo, index) => (
                                    <div key={index} className="scroll-item">
                                        <div className="bg-white rounded-lg shadow-lg p-4 flex justify-center items-center w-32 min-[480px]:w-[220px] md:w-40 h-20">
                                            <img src={logo} alt={"logo"} className="max-w-full max-h-full" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Section (Text and Button) */}
                    <div className="md:w-1/2 w-full flex flex-col max-md:items-center gap-4">
                        <h2 className="text-5xl font-bold text-purple-black max-md:text-center">
                            All of your favorite tools, connected
                        </h2>
                        <p className="text-lg text-gray-500 max-md:text-center">
                            Our ecosystem of deep integrations makes it easy to streamline your technical hiring processes.
                        </p>
                        <button className="bg-secondary-background sm:max-w-[280px] text-white px-6 py-3 font-semibold rounded-md transition">
                            SEE ALL INTEGRATIONS
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntegrationComponent;
