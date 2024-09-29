import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Outlet } from "react-router-dom"

const HomeLayout = () => {
    return (
        <div className='w-full h-max relative min-h-screen flex flex-col'>
            <Header />
            <div className="lg:pt-[75px]">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default HomeLayout