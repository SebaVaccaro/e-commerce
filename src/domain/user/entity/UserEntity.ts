export class UserEntity{
    username: string;
    password: string;
    email: string;
    id: string;
    constructor ( username: string, password:string, email:string, id: string){
    this.username = username,
    this.password = password,
    this.email = email
    this.id = id
    }

    setPassword(newPassword: string){
        this.password = newPassword
    }
}