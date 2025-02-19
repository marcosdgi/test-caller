import { UserRespository } from "@/repository/auth/userRepository";
import { LoginRequest, LoginResponse, RegisterRequest, User } from "@/types/auth";

export class TaskService {
    private userRepository: UserRespository;

    constructor(userService: UserRespository) {
        this.userRepository = userService;
    }

    async login(formLoginData: LoginRequest): Promise<LoginResponse> {
        return await this.userRepository.login(formLoginData)
    }

    async register(formSignupData: RegisterRequest): Promise<any> {
        return await this.userRepository.register(formSignupData)
    }

    async users(): Promise<User[]> {
        return await this.userRepository.users()
    }

    async user(id: string): Promise<User> {
        return await this.userRepository.user(id)
    }
}