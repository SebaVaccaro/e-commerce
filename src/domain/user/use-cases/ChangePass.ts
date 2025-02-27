import { UserApi } from "../../../services/infrastructure/user/api/UserApi";

export class ChangePass{
    private userApi: UserApi;

    constructor(){
        this.userApi = new UserApi();

    }
    async execute(password: string, _id: string):Promise<string | null>{
        const res = await this.userApi.password(password, _id)
        if(!res)return res

        return res
    }
}