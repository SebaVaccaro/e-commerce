import { menuData } from "../../../data/menuData"
import { CategoriaItem } from "../../components/buttons/btnCategoriaItem/CategoriaItem"
import "./categoriaItemContainer.css"
export const CategoriaItemContainer = ({data}: {data:menuData[]}) =>{
    return(
        <>
            {
                data.map(item=>(
                    <CategoriaItem data={item}/>
                ))
            }
        </>
    )
}