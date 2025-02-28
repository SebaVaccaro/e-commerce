import { ResponseDto } from "../dtos/ResponseDto"

export interface IUserRepository{
    login(email:string, password:string): Promise<ResponseDto>
    register(username: string, email:string, password:string): Promise<ResponseDto>
    password(password:string, _id:string): Promise<ResponseDto>
    addAddress(_id: string, street: string, city: string, state: string, country: string): Promise<ResponseDto>
    deleteAddress(userId: string, addressId: string): Promise<ResponseDto>
}