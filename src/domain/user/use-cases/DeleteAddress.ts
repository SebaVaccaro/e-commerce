import { UserApi } from "../../../services/infrastructure/user/api/UserApi";
import { UserInterface } from "../interface/UserInterface";

export class DeleteAddress {
    private userApi: UserApi;

    constructor() {
        this.userApi = new UserApi();
    }
    async execute(userId: string, addressId: string): Promise<UserInterface | string> {
        
        const user = await this.userApi.deleteAddress(userId, addressId)
        
        if (!user) {
            return user
        }

        return user
    }
}