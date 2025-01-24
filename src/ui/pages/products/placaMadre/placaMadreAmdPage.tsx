import { mothers } from "../../../../data/mothers"
import { PageContainer } from "../../../containers/page/PageContainer"

export const PlacaMadreAmdPage = () =>{
    const placasIntel = mothers.filter(item=>item.sub_categoria === "Motherboards AMD")
    return(
        <PageContainer data={placasIntel}/>
    )
}