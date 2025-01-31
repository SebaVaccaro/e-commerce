import { useEffect, useState } from "react"
import { AppData } from "../../../data/data"
import { PageContainer } from "../../containers/page/PageContainer"
import { useLocation } from "react-router-dom"
import { SideBody } from "../../containers/sidebody/SideBody"
import "./product-page.css"

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

type Component = {
    modelo: string,
    precio: number,
    marca: string,
    categoria: string,
    sub_categoria: string,
    descripcion: string,
    img: string[],
    id: string
}

export const ProductPage = () => {
    const location = useLocation()
    const [data, setData] = useState<Component[] | null>(null)

    useEffect(() => {
        const src: Src = location.pathname as Src
        const appData = AppData(src)
        setData(appData)
    }, [location])


    return (
        <div className="product-page">
            <div className="product-page-nav">
                <SideBody />
            </div>
            {
                !data ? (<span>No hay data</span>) : (
                    <>
                        <PageContainer data={data} />
                    </>
                )
            }
        </div>
    )
}
