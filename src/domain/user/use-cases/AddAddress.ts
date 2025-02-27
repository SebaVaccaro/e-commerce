import { UserApi } from "../../../services/infrastructure/user/api/UserApi";
import { UserInterface } from "../interface/UserInterface";

export class AddAddress {
    private userApi: UserApi;

    constructor() {
        this.userApi = new UserApi();
    }
    async execute(_id: string, street: string, city: string, state: string, country: string): Promise<UserInterface | string> {
        
        const user = await this.userApi.addAddress(_id, street, city, state,country)
        
        if (!user) {
            return user
        }

        return user
    }
}