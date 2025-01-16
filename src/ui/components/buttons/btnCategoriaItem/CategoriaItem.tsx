import { useState } from "react"
import { menuData } from "../../../../data/menuData"
import "./categoria-item.css"
export const CategoriaItem = ({ data }: { data: menuData }) => {
    const [state, setState] = useState<boolean>(false)
    return (
        <div className="item-side">
            <div className="header-item-side">
                <span className="span-header-side">
                    {data.name}
                </span>
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
                            <li className="li-item-side">{item.name}</li>
                        ))
                    }
                </ul>
            )}
        </div>
    )
}