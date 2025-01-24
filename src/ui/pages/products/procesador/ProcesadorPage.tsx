import { useState } from "react"
import { cpus } from "../../../../data/cpus"
import { MinCarts } from "../../../components/carts/min/Min-Carts"

export const ProcesadorPage = () =>{
    const [cpusData, setCpusData] = useState(cpus)
    return(
        <div className="product-page">
                    {cpusData.map(item=> <MinCarts key={item.id} data={item} />)}
        </div>
    )
}