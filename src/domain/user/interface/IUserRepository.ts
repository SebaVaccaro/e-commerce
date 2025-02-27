import { UserInterface } from "./UserInterface"

export interface IUserRepository{
    login(email:string, password:string): Promise<UserInterface | string>
    register(username: string, email:string, password:string): Promise<UserInterface | string>
    password(password:string, _id:string): Promise<string | null>
    addAddress(_id: string, street: string, city: string, state: string, country: string): Promise<UserInterface| string>
    deleteAddress(userId: string, addressId: string): Promise<UserInterface|string>
}