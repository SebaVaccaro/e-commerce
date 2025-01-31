import "./side-body.css"
import { MenuData } from "../../../data/menuData"
import { CategorysSideBody } from "../../components/category/CategorysSideBody"


export const SideBody = () => {
    return (
        <div className="side-body">
            {
                MenuData.map((item, index) => (
                    <CategorysSideBody key={index} data={item} />
                ))
            }
        </div>
    )
}