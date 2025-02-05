import { create } from "zustand";

type Component = {
    modelo: string,
    precio: number,
    marca: string,
    categoria: string,
    sub_categoria: string,
    descripcion: string,
    img: string[],
    id: string
};

type Product = {
    quantity: number,
    product: Component
};

interface ShoppingCartStore {
    cartState: Product[];
    specsCartState: { items: number, price: number };
    addToCart: (item: Product) => void;
    removeToCart: (item: Product) => void;
    deleteToCart: (item: Product) => void;
}

export const useShoppingCartStore = create<ShoppingCartStore>((set) => ({
    cartState: [],
    specsCartState: { items: 0, price: 0 },

    addToCart: (item: Product) => set((state) => {
        const updatedCart = [...state.cartState];
        const exist = state.cartState.find(i => i.product.id === item.product.id)
        if (!exist) {
            updatedCart.push(item)
            const { items, price } = state.specsCartState
            const newSpecs = { items: items + item.quantity, price: price + item.quantity * item.product.precio }
            return { cartState: updatedCart, specsCartState: newSpecs }
        }

        const newCartState = updatedCart.map(i => i.product.id === item.product.id ?
            { ...i, quantity: i.quantity + item.quantity } :
            i)
        const { items, price } = state.specsCartState
        const newSpecs = { items: items + item.quantity, price: price + item.quantity * item.product.precio }
        return { cartState: newCartState, specsCartState: newSpecs }

    }),

    removeToCart: (item: Product) => set((state) => {
        const updatedCart = [...state.cartState];
        const itemCart = state.cartState.find(i => i.product.id === item.product.id)
        if (!itemCart) return state
        if (itemCart && itemCart.quantity > 1) {
            const newUpdateCart = updatedCart.map(i => i.product.id === item.product.id ?
                { ...i, quantity: i.quantity - item.quantity } :
                i
            )
            const { items, price } = state.specsCartState
            const newSpecs = { items: items - item.quantity, price: price - item.quantity * item.product.precio }
            return { cartState: newUpdateCart, specsCartState: newSpecs }
        }
        return state
    }),

    deleteToCart: (item: Product) => set((state) => {
        const itemCart = state.cartState.find(i => i.product.id === item.product.id)
        const newSpecs = {...state.specsCartState}
        if (itemCart) {
            const itemCartQuantity = itemCart.quantity
            const itemCartPrice = itemCart.product.precio
            newSpecs.price = newSpecs.price - (itemCartPrice * itemCartQuantity)
            newSpecs.items = newSpecs.items - itemCartQuantity
            const newState = state.cartState.filter(i => i.product.id !== item.product.id)
            return { cartState: newState, specsCartState: newSpecs }
        }
        return state
    })
}));
