import React from 'react';
import Cosmo from "@/assets/svg/cosmo-1.svg"


const CosmoComponent: React.FC<any> = () => {
    return (
        <div className="w-full flex justify-center items-center py-20">
            <div className="container">
                <div className="bg-[#1D263E] rounded-xl md:p-10 p-4 flex flex-col-reverse gap-4 md:flex-row items-center justify-between shadow-lg">
                    {/* Left Section (Text) */}
                    <div className="text-white md:w-1/2 space-y-4">
                        <h2 className="md:text-4xl text-3xl leading-7 font-bold">
                            Meet Cosmo: The smartest AI guide in the universe
                        </h2>
                        <p className="md:text-lg leading-5">
                            Our built-in AI guide and tutor, Cosmo, prompts you with challenges that are built just for you and unblocks you when you get stuck.
                        </p>
                        <button className=" text-white max-md:w-full bg-transparent !border-2 border-white px-6 py-3 mt-4 font-semibold rounded-md">
                            GROW WITH COSMO
                        </button>
                    </div>

                    {/* Right Section (Image with Layered Borders) */}
                    <div className="md:w-1/2 flex justify-center items-center">
                        <img src={Cosmo } alt="" className='rounded-lg' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CosmoComponent;
