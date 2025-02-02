import Http from "./http";

export default class Fetch extends Http {

    constructor(protected baseUrl: string) {
        super(baseUrl);
    }
    async get(endpoint: string): Promise<Response> {
        try {
            const response = await fetch(this.baseUrl + endpoint);
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
                },
                body: JSON.stringify(body),
            });
            return await response.json();
        } catch (error) {
            throw error;
        }
    }
}