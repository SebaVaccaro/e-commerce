import { useParams } from "react-router-dom"
import { ProductDataBase } from "../../../../data/productDataBase"
import { MaxCarts } from "../../../components/carts/max/MaxCarts"
import "./max-cart-container.css"
export const MaxCartContainer = () =>{
    
    const {id} = useParams()
    const db = new ProductDataBase()
    
    if(!id){
        return(
            <p>402</p>
        )
    }
    
    const product = db.getProduct(id)
    
    if(!product){
        return(
            <p>402</p>
        )
    }

    return(
        <div className="max-cart-container">
            <MaxCarts data={product}/>
        </div>
    )
}