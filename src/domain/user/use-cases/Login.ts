import { UserRepository } from "../../../services/infrastructure/user/repository/UserRepository";
import { UserInterface } from "../entity/UserInterface";


  export class Login {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }
    async execute(email: string, password: string): Promise<UserInterface | string> {
        
        const user = await this.userRepository.login(email, password);
        
        if (!user) {
            return user
        }

        return user
    }
}