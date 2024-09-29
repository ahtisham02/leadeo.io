import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { FaCheck, FaPlus } from "react-icons/fa"

const hireTalent = ["Validated pre-screen assessments", "Advanced live interviewing tool", "Industry-leading IDE", "Industry-leading IDE", "ATS integrations", "API support", "SSO & SCIM integrations"]
const Learn = ["Built-in AI guide, Cosmo", "Personalized skills paths", "Practice-based learning", "Bite-sized modules", "Skills profile employers trust"]
const DevForInd = ["Unlimited Cosmo use", "Team & subscription management", "Team level performance & engagement insights"]
const DevForEnt = ["Advanced learning content", "Org & team level goals setting", "Custom skills mapping", "Custom skills advanced analytics & benchmarks", "Advanced roles & user permission management", "LMS integrations", "API support", "SSO & SCIM integrations"]

const PricingPage = () => {
    return (
        <div className="flex justify-center items-center w-full h-max py-16 bg-[#F8F8F8]">
            <div className="max-w-[1248px] flex flex-col items-center justify-center gap-8">
                <h1 className="text-[48px] sm:text-[80px] font-bold text-purple-black text-center sm:max-w-[80%]">Choose a plan and solution aligned to your goals</h1>
                <h5 className="text-lg text-purple-black text-center sm:max-w-[55%]">Whether you're aiming to level up or to build the next great team, our solutions meet you there and get you where you need to go.</h5>
                <div className="flex gap-4 items-start justify-center w-full lg:flex-row flex-col px-4 lg:px-0">
                    <div className="flex-1 w-full flex flex-col border rounded-sm border-gray-300 overflow-hidden bg-white shadow-sm">
                        <div className="bg-black flex justify-center items-center py-2">
                            <span className="text-white uppercase font-bold">Hire Telent</span>
                        </div>
                        <div className="flex flex-col py-2 px-4">
                            <div className="flex flex-col gap-4 items-center py-8">
                                <h3 className="text-xl font-bold text-purple-black">Pre-Screen & Interview</h3>
                                <p className="text-xs text-purple-black text-center">Contact us for custom pricing tailored to your needs</p>
                                <Button className="bg-secondary-background w-full text-white uppercase rounded-sm" >Contact Sales</Button>
                            </div>
                            <Separator orientation="horizontal" className="bg-gray-300" />
                            <div className="py-8 flex flex-col gap-4">
                                <h3 className="text-[18px] font-bold text-purple-black">End-to-end tech hiring solution with:</h3>
                                {
                                    hireTalent.map((item, index) => (
                                        <div key={index} className="flex gap-2 h-max items-start w-full">
                                            <FaCheck className="text-secondary-background w-4 h-4 pt-1" />
                                            <p className="flex-1">{item}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex-[3] flex flex-col border rounded-sm border-gray-300 overflow-hidden bg-white shadow-sm w-full">
                        <div className="bg-black flex justify-center items-center py-2">
                            <span className="text-white uppercase font-bold">Develop Sills</span>
                        </div>
                        <div className="flex lg:flex-row flex-col">
                            <div className="flex flex-col flex-1 py-2 px-4 w-full">
                                <div className="flex flex-col gap-4 items-center py-8">
                                    <h3 className="text-xl font-bold text-purple-black">Learn (for Individuals)</h3>
                                    <p className="text-xs text-purple-black text-center">FREE or Upgrade to Cosmo+ for $24.99/month</p>
                                    <Button className="bg-secondary-background w-full text-white uppercase rounded-sm" >Sign Up</Button>
                                </div>
                                <Separator orientation="horizontal" className="bg-gray-300 block" />
                                <div className="py-8 flex flex-col gap-4">
                                    <h3 className="text-[18px] font-bold text-purple-black">Level up your technical skills with:</h3>
                                    {
                                        Learn.map((item, index) => (
                                            <div key={index} className="flex gap-2 h-max items-start w-full">
                                                <FaCheck className="text-secondary-background w-4 h-4 pt-1" />
                                                <p className="flex-1">{item}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <Separator orientation="vertical" className="h-[820px] max-h-full max-lg:hidden lg:block" />
                            <div className="flex flex-col flex-1 py-2 px-4 w-full">
                                <div className="flex flex-col gap-4 items-center py-8">
                                    <h3 className="text-xl font-bold text-purple-black">Develop (for Teams)</h3>
                                    <p className="text-xs text-purple-black text-center px-8">$24.29/month per user, billed annually</p>
                                    <Button className="bg-secondary-background w-full text-white uppercase rounded-sm" >Contact Sales</Button>
                                </div>
                                <Separator orientation="horizontal" className="bg-gray-300" />
                                <div className="py-8 flex flex-col gap-4">
                                    <h3 className="text-[18px] font-bold text-purple-black">Upskill or reskill your technical team with:</h3>
                                    <div className="flex gap-2 h-max items-start w-full">
                                        <FaPlus className="text-secondary-background w-4 h-4 pt-1" />
                                        <p className="flex-1">Everything for Individuals</p>
                                    </div>
                                    {
                                        DevForInd.map((item, index) => (
                                            <div key={index} className="flex gap-2 h-max items-start w-full">
                                                <FaCheck className="text-secondary-background w-4 h-4 pt-1" />
                                                <p className="flex-1">{item}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <Separator orientation="vertical" className="h-[820px] max-h-full max-lg:hidden lg:block" />
                            <div className="flex flex-col flex-1 py-2 px-4 w-full">
                                <div className="flex flex-col gap-4 items-center py-8">
                                    <h3 className="text-xl font-bold text-purple-black">Develop (for Enterprise)</h3>
                                    <p className="text-xs text-purple-black text-center">Contact us for custom pricing tailored to your needs</p>
                                    <Button className="bg-secondary-background w-full text-white uppercase rounded-sm" >Contact Sales</Button>
                                </div>
                                <Separator orientation="horizontal" className="bg-gray-300" />
                                <div className="py-8 flex flex-col gap-4">
                                    <h3 className="text-[18px] font-bold text-purple-black">Upskill or reskill your technical organization with:</h3>
                                    <div className="flex gap-2 h-max items-start w-full">
                                        <FaPlus className="text-secondary-background w-4 h-4 pt-1" />
                                        <p className="flex-1">Everything for Teams</p>
                                    </div>
                                    {
                                        DevForEnt.map((item, index) => (
                                            <div key={index} className="flex gap-2 h-max items-start w-full">
                                                <FaCheck className="text-secondary-background w-4 h-4 pt-1" />
                                                <p className="flex-1">{item}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingPage