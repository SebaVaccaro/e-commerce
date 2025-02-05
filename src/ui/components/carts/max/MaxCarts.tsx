import { useState } from "react"
import { useShoppingCartStore } from "../../../../state/shoppingCart/useShoppingCartStore"
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
    const {addToCart} = useShoppingCartStore()

    const [inputState, setInputState] = useState(1)
    
    const desciptionList = data.descripcion.split(";").filter(item => item)
    
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if(inputState>0)addToCart({product: data, quantity: inputState})
    }
    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const value = Number(e.target.value)
        setInputState(value)
    }

    return (
        <div className="max-cart">
            <img className="max-cart-img" src={data.img[0]} alt="imagen del producto" />
            <span className="max-cart-data-model">{data.modelo}</span>
            <span className="max-cart-data-sub-category">{data.sub_categoria}</span>
            <span className="max-cart-data-brand">{data.marca}</span>
            <span className="max-cart-data-price">US${data.precio}</span>
            <form onSubmit={(e)=>onSubmit(e)} action="submit" className="max-cart-data-form">
                <input 
                    className="max-cart-data-form-input"
                    type="number"
                    onChange={(e)=>onChange(e)}
                    value={inputState}
                    min={0}
                    max={10}
                />
                <button className="max-cart-data-form-button">AGREGAR AL CARRITO</button>
            </form>

            <div className="max-cart-description">

                <ul>
                    {
                        desciptionList.map((item,index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}