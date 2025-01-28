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
export class ProductDataBase{
    private data : Product[] = [...cpus, ...mothers, ...equipos, ...tarjetasGraficas]
    getProduct(id:string): Product | undefined{
        return this.data.find(item=> item.id === id)
    }
}