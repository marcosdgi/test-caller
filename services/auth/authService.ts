import { UserRespository } from "@/repository/auth/userRepository";

export class TaskService {
    private userRepository: UserRespository;

    constructor(userService: UserRespository) {
        this.userRepository = userService;
    }

    async login(formLoginData: any): Promise<any> {
        return await this.userRepository.login(formLoginData)
    }
}