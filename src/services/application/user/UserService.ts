import { ResponseDto } from "../../../domain/user/interface/dtos/ResponseDto";
import { AddAddress } from "../../../domain/user/use-cases/AddAddress";
import { ChangePass } from "../../../domain/user/use-cases/ChangePass";
import { DeleteAddress } from "../../../domain/user/use-cases/DeleteAddress";
import { Login } from "../../../domain/user/use-cases/Login";
import { Register } from "../../../domain/user/use-cases/Register";



export class UserService{
    private registerUseCase: Register;
    private loginUseCase: Login;
    private changePasswordUseCase: ChangePass; 
    private addAddressUseCase: AddAddress;
    private deleteAddressUseCase: DeleteAddress;

    constructor(){
        this.loginUseCase = new Login()
        this.registerUseCase = new Register()
        this.changePasswordUseCase = new ChangePass()
        this.addAddressUseCase = new AddAddress()
        this.deleteAddressUseCase = new DeleteAddress()
    }
    
    async register(username: string, email: string, password: string): Promise<ResponseDto> {
        return await this.registerUseCase.execute(username, password, email);
    }

    async login(email: string, password: string): Promise<ResponseDto> {
        return await this.loginUseCase.execute(email, password)
    }

    async changePassword(password: string, _id: string): Promise<ResponseDto> {
        return await this.changePasswordUseCase.execute(password, _id)
    }

    async addAddress(_id: string, street: string, city: string, state: string, country: string): Promise<ResponseDto> {
        return await this.addAddressUseCase.execute(_id, street, city, state, country)
    }

    async deleteAddress(userId: string, addressId: string): Promise<ResponseDto> {
        return await this.deleteAddressUseCase.execute(userId, addressId)
    }
}