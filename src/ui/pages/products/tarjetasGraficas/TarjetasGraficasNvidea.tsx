import { tarjetasGraficas } from "../../../../data/tarjetasGraficas"
import { PageContainer } from "../../../containers/page/PageContainer"

export const TarjetasGraficasNvidea = () =>{
    const tarjetasGraficasNvidea = tarjetasGraficas.filter(item=> item.sub_categoria ==="tarjeta gráfica NVIDIA")
    return(
        <PageContainer data={tarjetasGraficasNvidea}/>
    )
}