import axios from "axios";
import { UserInterface } from "../../../../domain/user/entity/UserInterface";
import { IUserRepository } from "./IUserRepository";

export class UserRepository implements IUserRepository {
    private API_LOGIN_URL = "https://e-commerce-back-end-phi-ten.vercel.app/user/login";
    private API_REGISTER_URL = "https://e-commerce-back-end-phi-ten.vercel.app/user/register";
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
}
