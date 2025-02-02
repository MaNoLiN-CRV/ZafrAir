import Http from "./http";

export default class Fetch extends Http {

    constructor(protected baseUrl: string, protected token?: string) {
        super(baseUrl, token);
    }
    async get(endpoint: string): Promise<Response> {
        try {
            const response = await fetch(this.baseUrl + endpoint, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.token}`
                }
            });
            return await response.json();
        } catch (error) {
            throw error;
        }
    }

    async post(endpoint: string, body: any): Promise<Response> {
        try {
            const response = await fetch(this.baseUrl + endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.token}`
                },
                body: JSON.stringify(body),
            });
            return await response.json();
        } catch (error) {
            throw error;
        }
    }
}