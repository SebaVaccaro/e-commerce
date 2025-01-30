import "./page-container.css"
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
   
    return(
        <div className="page-container"> 
            {data? data.map((item,index) => <MinCarts key={item.id + index} data={item} />): (
                <div>
                    <span>404</span>
                </div>
            )}
        </div>
    )
}