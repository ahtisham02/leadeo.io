import hr from "@/assets/svg/hr-tech.svg";
import sales from "@/assets/svg/sales-marketing.svg";
import invest from "@/assets/svg/investment-intelligence.svg";
import fraud from "@/assets/svg/fraud-identity.svg";
import qoute from "@/assets/svg/quote.svg";
import owl from "@/assets/images/image.webp";

const Powering = () => {
    return (
        <>
            <section className="w-full h-max flex flex-col justify-center items-center py-8 sm:py-16 bg-[#F8F8F8]">
                <div className="container">
                    <div>
                        <h3 className="font-gibson text-purple-black mb-4 text-4xl font-medium">
                            Powering products across industries
                        </h3>
                        <h4 className="font-gibson text-purple-black mb-14 text-2xl font-light">
                            Our rich datasets power world-class solutions across multiple
                            verticals.
                        </h4>
                        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                            <div className="font-gibson flex flex-col justify-start">
                                <div className="mb-6">
                                    <img alt="use case" height="80" src={hr} width="80" />
                                </div>
                                <a className="inline-flex w-fit flex-row items-center hover:cursor-pointer text-pdl-purple-dark hover:text-api-violet visited:text-api-violet">
                                    <h5 className="text-base font-normal xl:text-xl !text-api-violet xl:!font-medium">
                                        HR Tech
                                    </h5>
                                    &nbsp;»
                                </a>
                                <p className="font-gibson text-sm xl:text-lg !text-purple-black !mt-6 !font-light">
                                    Enhance candidate data with deeper resume attributes, contact
                                    information, and more
                                </p>
                            </div>
                            <div className="font-gibson flex flex-col justify-start">
                                <div className="mb-6">
                                    <img alt="use case" height="80" src={sales} width="80" />
                                </div>
                                <a className="inline-flex w-fit flex-row items-center hover:cursor-pointer text-pdl-purple-dark hover:text-api-violet visited:text-api-violet">
                                    <h5 className="font-gibson text-base font-normal xl:text-xl !text-api-violet xl:!font-medium">
                                        Sales &amp; Marketing
                                    </h5>
                                    &nbsp;»
                                </a>
                                <p className="font-gibson text-sm xl:text-lg !text-purple-black !mt-6 !font-light">
                                    Clean, standardize, and enhance leads to supercharge sales and
                                    marketing platforms
                                </p>
                            </div>
                            <div className="font-gibson flex flex-col justify-start">
                                <div className="mb-6">
                                    <img alt="use case" height="80" src={invest} width="80" />
                                </div>
                                <a className="inline-flex w-fit flex-row items-center hover:cursor-pointer text-pdl-purple-dark hover:text-api-violet visited:text-api-violet">
                                    <h5 className="font-gibson text-base font-normal xl:text-xl !text-api-violet xl:!font-medium">
                                        Investment Intelligence
                                    </h5>
                                    &nbsp;»
                                </a>
                                <p className="font-gibson text-sm xl:text-lg !text-purple-black !mt-6 !font-light">
                                    Bring a competitive advantage to your investment strategy with
                                    market and company insights
                                </p>
                            </div>
                            <div className="font-gibson flex flex-col justify-start">
                                <div className="mb-6">
                                    <img alt="use case" height="80" src={fraud} width="80" />
                                </div>
                                <a className="inline-flex w-fit flex-row items-center hover:cursor-pointer text-pdl-purple-dark hover:text-api-violet visited:text-api-violet">
                                    <h5 className="font-gibson text-base font-normal xl:text-xl !text-api-violet xl:!font-medium">
                                        Fraud &amp; Identity
                                    </h5>
                                    &nbsp;»
                                </a>
                                <p className="font-gibson text-sm xl:text-lg !text-purple-black !mt-6 !font-light">
                                    Utilize customer information to flag synthetic identities during
                                    onboarding and registration
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex justify-center items-center py-24">
                <div className="container">
                    <div className="flex flex-col lg:flex-row justify-center items-center font-gibson">
                        <div className="flex max-w-6xl flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-start">
                            <img
                                alt="Old Well Labs Logo"
                                loading="lazy"
                                width="224"
                                height="224"
                                decoding="async"
                                data-nimg="1"
                                className="mr-16 size-56 rounded-full"
                                src={owl}
                                style={{ color: "transparent" }}
                            />
                            <div className="mt-16 lg:mt-0">
                                <img
                                    alt="Quote Mark"
                                    className="mb-6 h-8 w-14"
                                    height="32"
                                    src={qoute}
                                    width="56"
                                />
                                <div className="flex flex-col gap-y-3.5">
                                    <div className="text-purple-black text-4xl font-semibold leading-9">
                                        Old Well Labs (OWL)
                                    </div>
                                    <div className="text-purple-black text-xl leading-8">
                                        "The consistency of PDL updates, the{" "}
                                        <span className="text-pdl-purple-new font-semibold">
                                            quality
                                        </span>{" "}
                                        of the data are hard to find{" "}
                                        <span className="text-pdl-purple-new font-semibold">
                                            at scale
                                        </span>
                                        ."
                                    </div>
                                    <div>
                                        <div className="text-api-violet text-xl font-semibold">
                                            Grant Carney
                                        </div>
                                        <div>Head of Data</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Powering;
