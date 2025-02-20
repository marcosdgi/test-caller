export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    user: User;
}

export interface RegisterRequest {
    email: string;
    password: string;
    name: string;
}

export interface User {
    id: string;
    name: string;
}