export default abstract class Http {
    constructor( protected baseUrl: string) {
    }

    abstract get(endpoint: string): Promise<any>
    abstract post(endpoint: string, body: any): Promise<any>
}