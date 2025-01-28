import { UserInterface } from "../../../domain/user/entity/UserInterface";
import { Login } from "../../../domain/user/use-cases/Login";
import { Register } from "../../../domain/user/use-cases/Register";

type Response = 
    {success: true, message: string, data: UserInterface}
    | {success: false, message: string, error: string};

export class UserService{
    private registerUseCase: Register;
    private loginUseCase: Login;
    constructor(){
        this.loginUseCase = new Login()
        this.registerUseCase = new Register()
    }
    
    async register(username: string, password: string, email: string): Promise<Response> {
        return await this.registerUseCase.execute(username, password, email);
    }

    async login(username: string, password: string): Promise<Response> {
        return await this.loginUseCase.execute(username, password)
    }

}