import CosmoComponent from "@/components/landing/Cosmo"
import Hero from "@/components/landing/Hero"
import IntegrationComponent from "@/components/landing/Integration"
import Powering from "@/components/landing/Powering"
import Resources from "@/components/landing/Resources"
// import Teams from "@/components/landing/Teams"
// import Testimonials from "@/components/landing/Testimonials"

const HomePage = () => {

    return (
        <div className="flex flex-col pb-10">
            <Hero />
            <Powering />
            {/* <Teams /> */}
            <CosmoComponent />
            <IntegrationComponent />
            {/* <Testimonials /> */}
            <Resources />
        </div>
    )
}

export default HomePage
