import { useState } from "react"
import { menuData } from "../../../../data/menuData"
import "./categoria-item.css"
import { Link } from "react-router-dom"
export const CategoriaItem = ({ data }: { data: menuData }) => {
    const [state, setState] = useState<boolean>(false)
    return (
        <div className="item-side">
            <div className="header-item-side">
                <Link className="header-item-body-side" to={data.src}>
                <span className="span-header-side">
                    {data.name}
                </span>
                </Link>
                {data.children && (
                    <button
                        className="button-moor-header-side"
                        onClick={() => setState(!state)}
                    >
                        {
                            state ? ("x") : ("+")
                        }
                    </button>
                )}
            </div>
            {state && (
                <ul className="ul-item-side">
                    {
                        data.children?.map(item => (
                            <Link to={item.src}>
                            <li className="li-item-side">{item.name}</li>
                            </Link>
                        ))
                    }
                </ul>
            )}
        </div>
    )
}