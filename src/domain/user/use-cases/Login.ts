import { UserApi } from "../../../services/infrastructure/user/api/UserApi";
import { UserInterface } from "../interface/UserInterface";


  export class Login {
    private userApi: UserApi;

    constructor() {
        this.userApi = new UserApi();
    }
    async execute(email: string, password: string): Promise<UserInterface | string> {
        
        const user = await this.userApi.login(email, password);
        
        if (!user) {
            return user
        }

        return user
    }
}