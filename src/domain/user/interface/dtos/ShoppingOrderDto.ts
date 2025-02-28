export type Product = {
    id:string,
    price:number,
    quantity:number
}
export interface ShoppingOrderDto{
    id: string;
    userId: string;
    date: Date;
    products: Product[];
    price: number;
    payment: string;
    state: "pending" | "shipped" | "delivered";
}