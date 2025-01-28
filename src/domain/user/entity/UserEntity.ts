export class UserEntity{
    username: string;
    password: string;
    email: string;
    id: string;
    favorite: string[];
    purchases: string[];
    constructor ( username: string, password:string, email:string, id: string, favorite: string[], purchases: string[]){
    this.username = username,
    this.password = password,
    this.email = email
    this.id = id
    this.favorite = favorite
    this.purchases = purchases
    }

    setPassword(newPassword: string){
        this.password = newPassword
    }
}