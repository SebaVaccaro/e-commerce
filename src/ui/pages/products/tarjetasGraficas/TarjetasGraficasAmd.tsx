import { tarjetasGraficas } from "../../../../data/tarjetasGraficas"
import { PageContainer } from "../../../containers/page/PageContainer"

export const TarjetasGraficasAmd = () =>{
    const tarjetasGraficasAmd = tarjetasGraficas.filter(item=> item.sub_categoria ==="tarjeta gráfica AMD")
    return(
        <PageContainer data={tarjetasGraficasAmd}/>
    )
}