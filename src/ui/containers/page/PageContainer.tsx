import "./page-container.css"
import { MinCarts } from "../../components/carts/min/Min-Carts"
import { useFilterPage } from "../../../hooks/product/useFilerPage"
import React from "react"

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

export const PageContainer = ({ data }: { data: Component[] }) => {
    const { dataPage, view, setSelectView, pages, setSelectPages } = useFilterPage({data})
    
    const changeViewe = (e: React.ChangeEvent<HTMLSelectElement>)=>{
        setSelectView(Number(e.target.value))
    }
    const changePage = (e: React.ChangeEvent<HTMLSelectElement>)=>{
        setSelectPages(Number(e.target.value))
    }
    return (
        <div className="page-container">
            <select onChange={(e)=>changeViewe(e)}>
                {view.map(item=>(
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
            <div className="page-container-body">
                {dataPage ? dataPage.map((item) => <MinCarts key={item.id} data={item} />) : (
                    <div>
                        <span>404</span>
                    </div>
                )}
            </div>
            <select onChange={(e)=>changePage(e)}>
                {
                    pages?.map(({value, key})=>(
                        <option key={key} value={value}>{value + 1}</option>
                    ))
                }
            </select>
        </div>
    )
}