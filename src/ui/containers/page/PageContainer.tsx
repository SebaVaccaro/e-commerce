import "./page-container.css"
import { useState } from "react"
import { MinCarts } from "../../components/carts/min/Min-Carts"

type Component = {
    modelo: string,
    precio: number,
    marca: string,
    categoria: string,
    sub_categoria: string,
    descripcion: string,
    img: string[],
    id: string
}

export const PageContainer = ({data}: {data: Component[]}) =>{
    const [componentsData, setComponentsData] = useState<Component[]>(data)
    return(
        <div className="product-page">
            {componentsData.map(item => <MinCarts key={item.id} data={item} />)}
        </div>
    )
}