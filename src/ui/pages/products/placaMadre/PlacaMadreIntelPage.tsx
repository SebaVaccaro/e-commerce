import { mothers } from "../../../../data/mothers"
import { PageContainer } from "../../../containers/page/PageContainer"

export const PlacaMadreIntelPage = () =>{
    const placasIntel = mothers.filter(item=>item.sub_categoria === "Motherboards Intel")
    return(
        <PageContainer data={placasIntel}/>
    )
}