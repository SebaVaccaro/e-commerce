import { UserRepository } from "../../../services/infrastructure/user/repository/UserRepository";
import { UserEntity } from "../entity/UserEntity";
type UserType = {
    username: string;
    email: string;
    id: string;
    password: string;
};
type Response =
    | {success: true, message: string, data: UserType}
    | {success: false, message: string, error: string};
export class Register{
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async execute(username: string, password: string, email: string): Promise<Response> {
        
        const existingUser = await this.userRepository.getUserByUsername(username);
        
        if(existingUser) {
            return{
                success: false,
                message: "register failed",
                error: "Email en uso"
            }
        }
        
        const id = Date.now().toString()
        
        const newUser = new UserEntity(username, password, email, id);
        
        const res = await this.userRepository.saveUser(newUser);

        return{
            success: true,
            message: "register succesfull",
            data: res
        }
    }

}