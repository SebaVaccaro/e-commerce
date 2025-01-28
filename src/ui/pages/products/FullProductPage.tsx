import { useParams } from "react-router-dom"
import { ProductDataBase } from "../../../data/productDataBase"
import { MaxCarts } from "../../components/carts/max/MaxCarts"

export const FullProductPage = () =>{
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
        <MaxCarts data={product}/>
    )
}