import "./min-carts-container.css"
import { torres } from "../../../../data/torres"
import { MinCarts } from "../../../components/carts/min/Min-Carts"
import { useState } from "react"
type Cart = {
    nombre: string,
    precio: number,
    description: string,
    categoria: string,
    subCategoria:string,
    src: string[]
}
export const MinCartsContainer = () =>{
    const [dataState, setDataState] = useState<Cart[]>(torres)
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