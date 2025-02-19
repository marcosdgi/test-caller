export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    id: string;
}

export interface RegisterRequest {
    email: string;
    password: string;
    name: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
}