import "./product-page.css"
import { MinCarts } from "../../components/carts/min/Min-Carts"

type Product = {
    modelo: string,
    precio: number,
    marca: string,
    categoria: string,
    sub_categoria: string,
    descripcion: string,
    img: string[],
    id: string
}
export const ProductPage = ({data}: {data: Product[]}) =>{
    return(
        <div className="product-page">
            {data.map(item=> <MinCarts key={item.id} data={item} />)}
        </div>
    )
}