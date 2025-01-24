import "./min-carts-container.css"
import { MinCarts } from "../../../components/carts/min/Min-Carts"
import { useState } from "react"
import { cpus } from "../../../../data/cpus"
type Cart = {
    modelo: string,
    precio: number,
    marca: string,
    categoria: string,
    sub_categoria: string,
    descripcion: string,
    img: string[],
    id: string
}
export const MinCartsContainer = () =>{
    const [dataState, setDataState] = useState<Cart[]>(cpus)
    const handleButtonRigth = () =>{
        const list = [...dataState]
        const firstCart = list.shift()
        if(firstCart){
            list.push(firstCart)
            setDataState(list)
        }
    }
    const handleButtonLeft = () =>{
        const list = [...dataState]
        const lastCard = list[list.length - 1]
        if(lastCard){
            list.pop()
            list.unshift(lastCard)
            setDataState(list)
        }
    }
    return(
        <div className="min-carts-container">
            <div className="min-carts-container-button" onClick={handleButtonLeft}>
                <span>{"<"}</span>
            </div>
            <div className="min-carts-container-body">
            {
                dataState.map(item=><MinCarts data={item}/>)
            }
            </div>
            <div className="min-carts-container-button" onClick={handleButtonRigth}>
                <span>{">"}</span>
            </div>
        </div>
    )
}