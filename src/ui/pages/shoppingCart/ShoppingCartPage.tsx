import "./shopping-cart-page.css"
import { useShoppingCartStore } from "../../../state/shoppingCart/useShoppingCartStore"
import { ShoppingCart } from "../../components/carts/shopping-carts/ShoppingCart"

export const ShoppingCartPage = () =>{
    const {cartState, specsCartState} = useShoppingCartStore()
    return(
        <div className="shopping-cart-page">
            <span>precio total:{specsCartState.price}</span>
            <span>cantidad de productos:{specsCartState.items}</span>
            {cartState.map((product, index)=><ShoppingCart key={index} data={product}/>)}
        </div>
    )
}