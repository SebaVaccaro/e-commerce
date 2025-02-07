import { UserInterface } from "../../../../domain/user/entity/UserInterface"

export interface IUserRepository{
    register(username: string, email:string, password:string): Promise<UserInterface | string>
    login(email:string, password:string): Promise<UserInterface | string>
}