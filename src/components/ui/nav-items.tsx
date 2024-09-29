import { FC } from "react"
import { Link } from "react-router-dom"

const NavItem: FC<any> = ({ children, to }) => {
    return (
        <div className="relative overflow-hidden w-max h-[75px] flex items-center group">
            <div className="absolute scale-0 group-hover:scale-100 w-[300px] h-0.5 bg-primary-background bottom-0 left-0 transform -translate-x-1/2 transition-all duration-700"></div>
            <Link to={to || ""} className="mx-2 cursor-pointer text-purple-black font-bold">
                {children}
            </Link>
        </div>
    )
}

export default NavItem