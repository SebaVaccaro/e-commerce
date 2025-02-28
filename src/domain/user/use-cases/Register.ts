import { UserApi } from "../../../services/infrastructure/user/api/UserApi";
import { ResponseDto } from "../interface/dtos/ResponseDto";


export class Register{
    private userApi: UserApi;
    constructor() {
        this.userApi = new UserApi();
    }
    async execute(username: string, password: string, email: string): Promise<ResponseDto> {
        const res = await this.userApi.register(username, password, email)
        return res
    }
}