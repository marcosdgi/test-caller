import { request } from "../request";
import { ILoginRequest, ILoginResponse, IRegisterRequest, IUser } from "@/types/auth";

export class UserRespository {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async login(loginFormData: ILoginRequest): Promise<ILoginResponse> {
        return request<ILoginResponse>(`${this.baseUrl}/auth/login`, {
            body: JSON.stringify(loginFormData),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    async register(registerFormData: IRegisterRequest): Promise<IUser> {
        return request<IUser>(`${this.baseUrl}/auth/register`, {
            body: JSON.stringify(registerFormData),
            method: 'POST'
        })
    }

    async users(): Promise<IUser[]> {
        return request<IUser[]>(`${this.baseUrl}/auth/users`, {
            method: 'GET'
        })
    }

    async user(id: string): Promise<IUser> {
        return request<IUser>(`${this.baseUrl}/auth/userById/${id}`, {
            method: 'GET'
        })
    }
}