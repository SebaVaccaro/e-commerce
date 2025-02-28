import { UserApi } from "../../../services/infrastructure/user/api/UserApi";
import { ResponseDto } from "../interface/dtos/ResponseDto";


  export class Login {
    private userApi: UserApi;
    constructor() {
        this.userApi = new UserApi();
    }
    async execute(email: string, password: string): Promise<ResponseDto> {
        const res = await this.userApi.login(email, password);
        return res
    }
}