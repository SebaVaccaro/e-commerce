import { tarjetasGraficas } from "../../../../data/tarjetasGraficas"
import { PageContainer } from "../../../containers/page/PageContainer"

export const TarjetasGraficasIntel = () =>{
    const tarjetasGraficasIntel = tarjetasGraficas.filter(item=> item.sub_categoria ==="tarjeta gráfica Intel")
    return(
        <PageContainer data={tarjetasGraficasIntel}/>
    )
}