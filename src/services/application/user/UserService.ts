import { Login } from "../../../domain/user/use-cases/Login";
import { Register } from "../../../domain/user/use-cases/Register";
type UserType = {
    username: string;
    email: string;
    id: string;
    password: string;
};
export class UserService{
    private registerUseCase: Register;
    private loginUseCase: Login;
    constructor(){
        this.loginUseCase = new Login()
        this.registerUseCase = new Register()
    }
    
    async register(username: string, password: string, email: string): Promise<UserType | string> {
        return await this.registerUseCase.execute(username, password, email);
    }

    async login(username: string, password: string): Promise<UserType | string> {
        return await this.loginUseCase.execute(username, password)
    }

}