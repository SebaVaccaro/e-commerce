import { UserApi } from "../../../services/infrastructure/user/api/UserApi";
import { UserInterface } from "../interface/UserInterface";


export class Register{
    private userApi: UserApi;

    constructor() {
        this.userApi = new UserApi();
    }

    async execute(username: string, password: string, email: string): Promise<UserInterface | string> {
        
        
        
        const res = await this.userApi.register(username, password, email)
        return res
    }

}