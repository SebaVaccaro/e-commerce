import "./categorys-side-body.css"
import { useState } from "react"
import { menuData } from "../../../data/menuData"
import { Link } from "react-router-dom"

export const CategorysSideBody = ({ data }: { data: menuData }) => {
    const [state, setState] = useState<boolean>(false)
    return (
        <div className="category-side-body">
            <div className="category-side-body-header">
                <Link to={data.src}>
                    <span className="category-side-body-header-name">{data.name}</span>
                </Link>
                {
                    data.children && (
                    <button className="category-side-body-button" onClick={() => setState(!state)}>
                        {state? "-" : "+"}
                    </button>
                )}
            </div>
            {data.children && state && (
                <ul>
                    {data.children.map(subItem => (
                        <Link to={subItem.src}>
                            <li className="side-body-sub-category">{subItem.name}</li>
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    )
}