import axios from "axios";
import { ResponseDto } from "../../../../domain/user/interface/dtos/ResponseDto";
import { IUserRepository } from "../../../../domain/user/interface/repository/IUserRepository";

 
export class UserApi implements IUserRepository {
    private API_LOGIN_URL = "https://e-commerce-back-end-z4c9.onrender.com/user/login";
    private API_REGISTER_URL = "https://e-commerce-back-end-z4c9.onrender.com/user/register";
    private API_CHANGE_PASSWORD_URL = "https://e-commerce-back-end-z4c9.onrender.com/user/password";
    private API_ADDRESS = "https://e-commerce-back-end-z4c9.onrender.com/user/address"

    async login(email: string, password: string): Promise<ResponseDto> {
        try {
            const res = await axios.post<ResponseDto>(this.API_LOGIN_URL, { email, password });
            return res.data
        } catch (err) {
            console.error(err);
            return {
                success: false,
                message: "error de sistema"
            }
        }
    }

    async register(username:string, email: string, password: string): Promise<ResponseDto> {
        try {
            const res = await axios.post<ResponseDto>(this.API_REGISTER_URL, { username, email, password });

            return res.data;
        } catch (err) {
            console.error(err);
            return {
                success: false,
                message: "error de sistema"
            }
        }
    }

    async password(password: string, _id: string): Promise<ResponseDto> {
        try{
            const res = await axios.post<ResponseDto>(this.API_CHANGE_PASSWORD_URL, {password, _id});
            return res.data
        }catch(err){
            console.error(err)
            return {
                success: false,
                message: "error de sistema"
            }
        }
    }

    async addAddress(_id: string, street: string, city: string, state: string, country: string): Promise<ResponseDto>{
        try{
            const res = await axios.post<ResponseDto>(this.API_ADDRESS, { _id, street, city, state, country});
            return res.data
        }catch(err){
            console.error(err)
            return {
                success: false,
                message: "error de sistema"
            }
        }
    }

    async deleteAddress(userId: string, addressId: string): Promise<ResponseDto> {
        try{
            const res = await axios.put<ResponseDto>(this.API_ADDRESS, {userId, addressId})
            return res.data
        }catch(err){
            console.error(err)
            return {
                success: false,
                message: "error de sistema"
            }
        }
    }
}
