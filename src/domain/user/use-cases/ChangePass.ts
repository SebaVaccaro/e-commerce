import { UserApi } from "../../../services/infrastructure/user/api/UserApi";
import { ResponseDto } from "../interface/dtos/ResponseDto";

export class ChangePass{
    private userApi: UserApi;
    constructor(){
        this.userApi = new UserApi();
    }
    async execute(password: string, _id: string):Promise<ResponseDto>{
        const res = await this.userApi.password(password, _id)
        return res
    }
}