import { UserInterface } from "../../../../domain/user/entity/UserInterface"

export interface IUserRepository{
    getUserById(id:string): Promise<UserInterface | false>
    getUserByEmail(email:string): Promise<UserInterface | false>
    getUserByUsername(username:string): Promise<UserInterface | false>
    saveUser(user:UserInterface): Promise<UserInterface>
    updateUser(user: UserInterface): Promise<UserInterface>
    deleteUser(id:string): Promise<boolean>
}