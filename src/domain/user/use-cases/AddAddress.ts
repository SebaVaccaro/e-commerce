import { UserApi } from "../../../services/infrastructure/user/api/UserApi";
import { ResponseDto } from "../interface/dtos/ResponseDto";

export class AddAddress {
    private userApi: UserApi;
    constructor() {
        this.userApi = new UserApi();
    }
    async execute(_id: string, street: string, city: string, state: string, country: string): Promise<ResponseDto> {
        const res = await this.userApi.addAddress(_id, street, city, state,country)
        return res
    }
}