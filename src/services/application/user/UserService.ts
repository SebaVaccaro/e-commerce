import { UserInterface } from "../../../domain/user/entity/UserInterface";
import { Login } from "../../../domain/user/use-cases/Login";
import { Register } from "../../../domain/user/use-cases/Register";



export class UserService{
    private registerUseCase: Register;
    private loginUseCase: Login;
    constructor(){
        this.loginUseCase = new Login()
        this.registerUseCase = new Register()
    }
    
    async register(username: string, email: string, password: string): Promise<UserInterface | string> {
        return await this.registerUseCase.execute(username, password, email);
    }

    async login(email: string, password: string): Promise<UserInterface | string> {
        const res = await this.loginUseCase.execute(email, password)
        return res
    }

}