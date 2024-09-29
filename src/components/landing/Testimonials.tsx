import React from 'react';
import TestimonialSlider from './Slider';
import Img from "@/assets/images/home-testimonial.webp"

const Testimonials: React.FC = () => {
    return (
        <div className="w-full flex justify-center items-center py-10">
            <div className="container flex flex-col lg:flex-row justify-between gap-8">
                <div className="lg:w-[570px] w-full">
                    <div className="w-full">
                        <h2 className="text-4xl font-bold mb-4">You’re in good company</h2>
                        <a className="text-blue-500 hover:underline">SEE ALL STORIES &rarr;</a>
                    </div>

                    {/* Testimonial Card */}
                    <div className="w-full relative">
                        <button className="text-gray-400 hover:text-gray-600 absolute top-14 left-24">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <TestimonialSlider />
                        <button className="text-gray-400 hover:text-gray-600 absolute top-14 right-24">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Image */}
                <div className="flex-1 max-w-[600px] flex flex-col gap-6">
                    <img
                        src={Img}
                        alt="Customer Story"
                        className="xl:min-w-[570px] w-full h-auto rounded-md "
                    />
                    <div className="p-6 rounded-lg flex flex-col gap-12 bg-[#1062fb]">
                        <h1 className='text-[48px] text-white'>Results our customers have seen</h1>
                        <div className="flex gap-12">
                            <div className="flex flex-col gap-1">
                                <h2 className='text-2xl text-white'>15K+</h2>
                                <p className='text-xl text-white'>Hours saved annually</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className='text-2xl text-white'>2x</h2>
                                <p className='text-xl text-white'>Candidates evaluated</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
