import { UserRepository } from "../../../services/infrastructure/user/repository/UserRepository";
import { UserEntity } from "../entity/UserEntity";
type UserType = {
    username: string;
    email: string;
    id: string;
    password: string;
};
export class Register{
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async execute(username: string, password: string, email: string): Promise<UserType | string> {
        
        const existingUser = await this.userRepository.getUserByUsername(username);
        
        if (typeof existingUser !== "string") {
            return "El email ya está registrado.";
        }
        
        const id = Date.now().toString()
        
        const newUser = new UserEntity(username, password, email, id);
        
        const res = await this.userRepository.saveUser(newUser);

        return res;
    }

}