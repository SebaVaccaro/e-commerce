import { UserRepository } from "../../../services/infrastructure/user/repository/UserRepository";
type UserType = {
    username: string;
    email: string;
    id: string;
    password: string;
  };
export class Login {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }
    async execute(username: string, password: string): Promise<UserType | string> {
        
        const user = await this.userRepository.getUserByUsername(username);
        
        if (typeof user === "string") {
            return user;
        }
        if (user.password !== password) {
            return "invalid password";
        }

        return user;
    }
}