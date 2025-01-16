import { useState } from "react"
import { menuData } from "../../../../data/menuData"
import "./categoria-item.css"
export const CategoriaItem = ({ data }: { data: menuData }) => {
    const [state, setState] = useState<boolean>(false)
    return (
        <div className="categoria-item-body">
            <div className="categoria-item">
                <button className="categoria-item-button">
                    {data.name}
                </button>
                {data.children && (
                    <button
                        className="categoria-item-moor"
                        onClick={() => setState(!state)}
                    >
                        {
                            state ? ("-") : ("+")
                        }
                    </button>
                )}
            </div>
            {state && (
                <div className="categoria-item-list">
                    {
                        data.children?.map(item => (
                            <span>{item.name}</span>
                        ))
                    }
                </div>
            )}
        </div>
    )
}