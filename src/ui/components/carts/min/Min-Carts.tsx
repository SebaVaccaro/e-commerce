import "./min-cart.css"

type Cart = {
    nombre: string,
    precio: number,
    description: string,
    categoria: string,
    subCategoria:string,
    src: string[]
}
export const MinCarts = ({data}: {data:Cart})=>{
    return(
        <div className="min-carts">
            <div className="min-carts-img-container">
                <img className="min-carts-img" src={data.src[0]}/>
            </div>
            <div className="min-carts-name">
                <span>{data.nombre}</span>
            </div>
            <div className="min-carts-price">
                <span>{data.precio}</span>
            </div>
        </div>
    )
}