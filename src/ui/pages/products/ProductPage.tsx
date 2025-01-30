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

    const [arrays, setArrays] = useState<Component[][]>([])
    useEffect(() => {
        if (data) {
            const newArrays: Component[][] = []
            const lengthCpus = data.length
            const cantidadDeArrays = Math.ceil(lengthCpus / 8)
            for (let i = 0; i < cantidadDeArrays; i++) {
                const newArray = data.slice(i * 8, (i + 1) * 8)
                newArrays.push(newArray)
            }
            setArrays(newArrays)
        }}, [data])


    const [page, setPage] = useState<number>(0)
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPage(Number(event.target.value))
    }

    
    return (
        <div className="product-page">
            <SideBody />
            {
                !arrays.length ? (<span>No hay data</span>) : (
                    <>
                        <select onChange={handleChange} value={page}>
                            {arrays.map((_, index) => (
                                <option key={index} value={index}>
                                    {index + 1}
                                </option>
                            ))}
                        </select>
                        <PageContainer data={arrays[page]} />
                    </>
                )
            }
        </div>
    )
}
