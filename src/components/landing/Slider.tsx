import Slider from "react-slick";
import { Avatar } from '../ui/avatar';
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
    {
        text: "By incorporating CodeSignal into our process and having a large number of folks opt into it, either passive candidates or applicants, we’re able to free up roughly 40 to 60 percent of our engineers’ time.",
        author: "Michael Leggett",
        position: "Tech Recruiter at Outreach"
    },
    {
        text: "CodeSignal has drastically improved our recruitment process, saving us countless hours and helping us find the right talent faster.",
        author: "Jane Doe",
        position: "HR Manager at TechCorp"
    }
];
function TestimonialSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true
    };
    return (
        <Slider {...settings} className="py-8 px-4">
            {
                testimonials.map((item: any, index: number) => (
                    <div key={index} className="bg-transparent text-center px-10 !flex justify-between items-center min-h-[480px] flex-col h-full">
                        <div className="flex items-center justify-between mb-4">
                            <div className="rounded-full bg-indigo-500 p-4">
                                <Avatar />
                            </div>
                        </div>

                        <p className="text-gray-700 text-xl font-medium mb-4">
                            {item.text}
                        </p>

                        <div className="text-blue-500 mb-2">
                            <FaQuoteLeft size={48} />
                        </div>
                        <div className="">
                            <div className="text-gray-900 font-semibold text-xl">{item.author}</div>
                            <div className="text-gray-500">{item.position}</div>
                        </div>
                    </div>
                ))
            }
        </Slider>
    );
}

export default TestimonialSlider;
