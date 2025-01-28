import "./max-carts.css"
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
export const MaxCarts = ({ data }: { data: Cart }) => {
    const desciptionList = data.descripcion.split(";").filter(item => item)
    return (
        <div className="max-cart">
            <img className="max-cart-img" src={data.img[0]} alt="imagen del producto" />
            <span className="max-cart-data-model">{data.modelo}</span>
            <span className="max-cart-data-sub-category">{data.sub_categoria}</span>
            <span className="max-cart-data-brand">{data.marca}</span>
            <span className="max-cart-data-price">US${data.precio}</span>
            <form action="submit" className="max-cart-data-form">
                <input type="number" className="max-cart-data-form-input" />
                <button className="max-cart-data-form-button">AGREGAR AL CARRITO</button>
            </form>

            <div className="max-cart-description">

                <ul>
                    {
                        desciptionList.map(item => (
                            <li>{item}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}