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
type Product = {
    quantity: number,
    product: Component
}
export const useShoppingCart = () => {
    const [cartState, setCartState] = useState<Product[]>([])
    const [specsCartState, setSpecsCartState] = useState<{items: number, price: number}>({ items: 0, price: 0})

    useEffect(()=>{
        const specs = {items: 0, price: 0}
        cartState.forEach(i=>{
            const itemSpecs = {items: i.quantity, price: i.product.precio}
            specs.items += itemSpecs.items
            specs.price += itemSpecs.price * itemSpecs.items
        })
        setSpecsCartState(specs)
    },[cartState])
    

    const addToCart = (product: Product) => {
        if (product.quantity >= 1) {

            const exist = cartState.find(i => i.product.id === product.product.id)
            if (!exist) return setCartState([...cartState, product])

            const newState = cartState.map(i => i.product.id === product.product.id ?
                { ...i, quantity: i.quantity + product.quantity } :
                i
            )
            setCartState(newState)


            return
        }
    }

    const removeToCart = (item: Product) => {
        if (item.quantity === 1) {
            const product = cartState.find(i => i.product.id === item.product.id)
            if(product && product.quantity > 1){
                const newState = cartState.map(i=> i.product.id === item.product.id?
                    {...i, quantity: i.quantity - 1 }:
                    i
                )
                return setCartState(newState)
            }
            if(product && product.quantity === 1){
                const newState = cartState.filter(i=> i.product.id !== item.product.id)
                return setCartState(newState)
            }
        }
    }

    const deleteToCart = (item: Product) =>{
        const newState = cartState.filter(i=> i.product.id !== item.product.id)
        setCartState(newState)
    }

    return { cartState, specsCartState, addToCart, removeToCart, deleteToCart }
}