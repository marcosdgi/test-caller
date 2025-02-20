export interface ILoginRequest {
    email: string;
    password: string;
}

export interface ILoginResponse {
    token: string;
    user: IUser;
}

export interface IRegisterRequest {
    email: string;
    password: string;
    name: string;
}

export interface IUser {
    id: string;
    name: string;
}