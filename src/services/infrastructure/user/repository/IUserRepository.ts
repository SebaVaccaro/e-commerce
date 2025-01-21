import { UserInterface } from "../../../../domain/user/entity/UserInterface"

export interface IUserRepository{
    getUserById(id:string): Promise<UserInterface | string>
    saveUser(user:UserInterface): void
    getUserByEmail(email:string): Promise<UserInterface | string>
    getUserByUsername(username:string): Promise<UserInterface | string>
    updateUser(user: UserInterface): void
    deleteUser(id:string): void
}