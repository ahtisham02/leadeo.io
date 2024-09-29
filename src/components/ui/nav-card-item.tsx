import { FC } from "react"
import { Link } from "react-router-dom"

const NavCardItem: FC<any> = (props) => {
    return (
        <Link to={props?.to || ""}>
            <div className="flex gap-4 items-center py-4">
                <div>
                    {props?.logo}
                </div>
                <div className="flex flex-col gap-1">
                    <h5 className="hover:text-secondary-background transition-all duration-700 text-lg">{props.title}</h5>
                    <p className="text-xs text-nowrap">{props.description}</p>
                </div>
            </div>
        </Link>
    )
}

export default NavCardItem