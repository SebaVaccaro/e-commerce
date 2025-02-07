import { UserRepository } from "../../../services/infrastructure/user/repository/UserRepository";
import { UserInterface } from "../entity/UserInterface";


export class Register{
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async execute(username: string, password: string, email: string): Promise<UserInterface | string> {
        
        
        
        const res = await this.userRepository.register(username, password, email)
        return res
    }

}