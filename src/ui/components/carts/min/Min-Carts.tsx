import "./min-cart.css"

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
export const MinCarts = ({ data }: { data: Cart }) => {
    return (
        <div className="min-carts">

            <div className="min-carts-img-container">
                <img className="min-carts-img" src={data.img[0]} />
            </div>
            <div className="min-carts-name">
                <span>{data.modelo}</span>
            </div>
            <div className="min-carts-price">
                <span>US${data.precio}</span>
            </div>
        </div>
    )
}