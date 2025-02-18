import { request } from "../request";

export class UserRespository {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async login(loginFormData: any): Promise<any> {
        return request<any>(``, {
            body: JSON.stringify({ loginFormData }),
            method: 'POST'
        })
    }

}