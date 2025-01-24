import { cpus } from "./cpus"
import { mothers } from "./mothers"
import { tarjetasGraficas } from "./tarjetasGraficas"
import { equipos } from "./torres"
type Product = {
    modelo: string,
    precio: number,
    marca: string,
    categoria: string,
    sub_categoria: string,
    descripcion: string,
    img: string[],
    id: string
}
type Src = "/componentes/procesadores" |
    "/componentes/placa-madre" |
    "/componentes/equipos" |
    "/componentes/tarjetas-graficas" |
    "/componentes/tarjetas-graficas/amd" |
    "/componentes/tarjetas-graficas/nvidia" |
    "/componentes/tarjetas-graficas/intel" |
    "/componentes/procesadores/intel" |
    "/componentes/procesadores/amd" |
    "/componentes/placa-madre/intel" |
    "/componentes/placa-madre/amd"

    export const AppData = (src: Src) => {
        const filterByCategory = (category: string, array: any[]) => {
            return array.filter(item => item.sub_categoria === category);
        }
    
        const data = {
            "/componentes/procesadores": cpus,
            "/componentes/placa-madre": mothers,
            "/componentes/equipos": equipos,
            "/componentes/tarjetas-graficas": tarjetasGraficas,
            "/componentes/tarjetas-graficas/amd": filterByCategory("tarjeta gráfica AMD", tarjetasGraficas),
            "/componentes/tarjetas-graficas/nvidia": filterByCategory("tarjeta gráfica NVIDIA", tarjetasGraficas),
            "/componentes/tarjetas-graficas/intel": filterByCategory("tarjeta gráfica Intel", tarjetasGraficas),
            "/componentes/procesadores/intel": filterByCategory("Procesadores Intel", cpus),
            "/componentes/procesadores/amd": filterByCategory("Procesadores AMD", cpus),
            "/componentes/placa-madre/intel": filterByCategory("Motherboards Intel", mothers),
            "/componentes/placa-madre/amd": filterByCategory("Motherboards AMD", mothers),
        }
        const appData:Product[] = data[src]
        return appData
    }
    