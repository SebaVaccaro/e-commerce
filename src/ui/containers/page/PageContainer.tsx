import "./page-container.css"
import { MinCarts } from "../../components/carts/min/Min-Carts"
import { useEffect, useState } from "react"

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
    const [localData, setLocalData] = useState<Component[] | null>([])
    useEffect(()=>{
        setLocalData(data)
    },[data])
    return(
        <div className="product-page"> 
            {localData? localData.map((item,index) => <MinCarts key={item.id + index} data={item} />): (
                <div>
                    <span>404</span>
                </div>
            )}
        </div>
    )
}