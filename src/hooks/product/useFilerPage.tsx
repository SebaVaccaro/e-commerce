import { useEffect, useState } from "react"

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

export const useFilterPage = ({ data }: { data: Component[] }) => {
    
    const [dataPage, setDataPage] = useState<Component[][]>([])
    const [pages, setPages] = useState<{value:number, key:number}[]>()
    const [view, _] = useState([12, 24])
    const [selectView, setSelectView] = useState<number>(12)
    const [selectPage, setSelectPages] = useState<number>(0)

    const newData = () => {
        const arrayNum = Math.ceil(data.length / selectView)
        const newDataPage = Array.from({ length: arrayNum }, (_, index) => {
            return data.slice(index * selectView, selectView * (index + 1))
        })
        const pages = newDataPage.map((_,index)=>({value: index,key: Math.random()}))
        console.log(pages)
        setDataPage(newDataPage)
        setPages(pages)
    }

    useEffect(() => {
        setSelectPages(0)
        newData()  
    }, [data, selectView])

    return { dataPage: dataPage[selectPage], view, setSelectView, pages, setSelectPages}
}
