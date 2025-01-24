import { equipos } from "../../../../data/torres"
import { PageContainer } from "../../../containers/page/PageContainer"

export const Equipos= ()=>{
    return(
        <div className="product-page">
            <PageContainer data={equipos}/>
        </div>
    )
}