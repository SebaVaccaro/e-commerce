import axios from "axios";
import { UserInterface } from "../../../../domain/user/interface/UserInterface";
import { IUserRepository } from "../../../../domain/user/interface/IUserRepository";

export class UserApi implements IUserRepository {
    private API_LOGIN_URL = "https://e-commerce-back-end-z4c9.onrender.com/user/login";
    private API_REGISTER_URL = "https://e-commerce-back-end-z4c9.onrender.com/user/register";
    private API_CHANGE_PASSWORD_URL = "https://e-commerce-back-end-z4c9.onrender.com/user/password";
    private API_ADDRESS = "https://e-commerce-back-end-z4c9.onrender.com/user/address"

    async login(email: string, password: string): Promise<UserInterface | string> {
        try {
            const res = await axios.post<UserInterface>(this.API_LOGIN_URL, { email, password });

            if (!res.data) return "error axios";
            return res.data;
        } catch (err) {
            console.error(err);
            return "error en la petición";
        }
    }

    async register(username:string, email: string, password: string): Promise<UserInterface | string> {
        try {
            const res = await axios.post<UserInterface>(this.API_REGISTER_URL, { username, email, password });

            if (!res.data) return "error axios";
            return res.data;
        } catch (err) {
            console.error(err);
            return "error en la petición";
        }
    }

    async password(password: string, _id: string): Promise<string | null> {
        try{
            const res = await axios.post<string|null>(this.API_CHANGE_PASSWORD_URL, {password, _id});
            console.log(res)
            if(!res.data)return "error axios"
            return res.data
        }catch(err){
            console.log(err)
            return null
        }
    }

    async addAddress(_id: string, street: string, city: string, state: string, country: string): Promise<UserInterface | string>{
        try{
            const res = await axios.post<UserInterface>(this.API_ADDRESS, { _id, street, city, state, country});

            if(!res.data)return "error axios"
            return res.data
        }catch(err){
            console.log(err)
            return "error de sistema"
        }
    }

    async deleteAddress(userId: string, addressId: string): Promise<UserInterface | string> {
        try{
            const res = await axios.put<UserInterface>(this.API_ADDRESS, {userId, addressId})

            if(!res.data)return "error axios"
            return res.data
        }catch(err){
            console.log(err)
            return "error de sistema"
        }
    }
}
