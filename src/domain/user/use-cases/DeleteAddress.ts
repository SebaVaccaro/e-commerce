import { UserApi } from "../../../services/infrastructure/user/api/UserApi";
import { ResponseDto } from "../interface/dtos/ResponseDto";

export class DeleteAddress {
    private userApi: UserApi;
    constructor() {
        this.userApi = new UserApi();
    }
    async execute(userId: string, addressId: string): Promise<ResponseDto> {
        const res = await this.userApi.deleteAddress(userId, addressId)
        return res
    }
}