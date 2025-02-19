import { request } from "../request";
import { LoginRequest, LoginResponse, RegisterRequest, User } from "@/types/auth";

export class UserRespository {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async login(loginFormData: LoginRequest): Promise<LoginResponse> {
        return request<LoginResponse>(`${this.baseUrl}/auth/login`, {
            body: JSON.stringify(loginFormData),
            method: 'POST'
        })
    }

    async register(registerFormData: RegisterRequest): Promise<any> {
        return request<any>(`${this.baseUrl}/auth/register`, {
            body: JSON.stringify(registerFormData),
            method: 'POST'
        })
    }

    async users(): Promise<User[]> {
        return request<User[]>(`${this.baseUrl}/auth/users`, {
            method: 'GET'
        })
    }

    async user(id: string): Promise<User> {
        return request<User>(`${this.baseUrl}/auth/userById/${id}`, {
            method: 'GET'
        })
    }
}