import { UserInterface } from "../../../../domain/user/entity/UserInterface";
import { UserApi } from "../api/UserApi";
import { IUserRepository } from "./IUserRepository";

export class UserRepository implements IUserRepository{
    private userApi: UserApi

    constructor(){
        this.userApi = new UserApi()
    }

    async getUserById(id: string): Promise<UserInterface | string> {
        const res = await this.userApi.getUserById(id);
        return res
    }

    async getUserByUsername(username: string): Promise<UserInterface | string> {
        const res = await this.userApi.getUserByUsername(username);
        return res
    }

    async saveUser(user: UserInterface): Promise<UserInterface> {
        return await this.userApi.saveUser(user);
    }

    async getUserByEmail(email: string): Promise<UserInterface | string> {
        return await this.userApi.getUserByEmail(email);
    }

    async updateUser(user: UserInterface): Promise<string> {
        return await this.userApi.updateUser(user);
    }

    async deleteUser(id: string): Promise<string> {
        return await this.userApi.deleteUser(id);
    }
}