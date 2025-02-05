import { useShoppingCartStore } from "../../../../state/shoppingCart/useShoppingCartStore";
import "./shopping-cart.css"

type Component = {
    modelo: string,
    precio: number,
    marca: string,
    categoria: string,
    sub_categoria: string,
    descripcion: string,
    img: string[],
    id: string
};

type Product = {
    quantity: number,
    product: Component
};

export const ShoppingCart = ({ data }: { data: Product }) => {
    const { addToCart, removeToCart, deleteToCart } = useShoppingCartStore()
    const cart = data.product

    const addCart = () => {
        addToCart({ ...data, quantity: 1 })
    }
    const removeCart = () => {
        removeToCart({ ...data, quantity: 1 })
    }

    return (
        <div className="shopping-cart">
            <div className="s-c-body-img">
                <img className="s-c-img" src={cart.img[0]} alt="img cart" />
            </div>
            <div className="s-c-data">
                <span>{cart.modelo}</span>
            </div>
            <div className="s-c-price">
                <span>US${cart.precio}</span>
            </div>
            <div className="s-c-buttons">
                <div className="s-c-total-price">
                    <span>US${data.product.precio * data.quantity}</span>
                </div>
                <div className="s-c-buttons-body">
                    <button onClick={addCart}>+</button>
                    <span>{data.quantity}</span>
                    <button onClick={removeCart}>-</button>
                </div>
                <button onClick={() => deleteToCart(data)}>delete</button>
            </div>
        </div>
    )
}