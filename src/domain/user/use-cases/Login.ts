import { UserRepository } from "../../../services/infrastructure/user/repository/UserRepository";
import { UserInterface } from "../entity/UserInterface";

  type Response =
  | {success: true, message: string, data: UserInterface}
  | {success: false, message: string, error: string};

  export class Login {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }
    async execute(username: string, password: string): Promise<Response> {
        
        const user = await this.userRepository.getUserByUsername(username);
        
        if (!user) {
            return {
                success: false,
                message: "login filed",
                error: "No se encontro usuario"
            };
        }
        if (user.password !== password) {
            return {
                success: false,
                message: "login filed",
                error: "Contraseña incorrecta"
            };
        }

        return {
            success: true,
            message: "login succesfull",
            data: user
        };
    }
}