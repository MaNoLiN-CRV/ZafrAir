import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import Http from "./http";

export default class Axios extends Http {
    private readonly instance: AxiosInstance; 
   

    constructor(protected baseUrl: string) {
        super(baseUrl);
        this.instance = axios.create({
            baseURL: this.baseUrl,
        });
    }
    
    /**
     * Makes a GET request to the given endpoint and returns the response data.
     * The request is made with the `axios` library, and the response is expected
     * to be a JSON object.
     * @param endpoint The URL of the endpoint to make the request to, relative
     * to the base URL.
     * @param config Optional AxiosRequestConfig object to customize the request.
     * @returns A Promise that resolves to the response data.
     */
    async get(endpoint: string,  config?: AxiosRequestConfig) : Promise<AxiosResponse> {
        return (await this.instance.get(endpoint, config)).data;
    }

    /**
     * Makes a POST request to the given endpoint with the provided data and optional configuration,
     * and returns the response data.
     * The request is made using the `axios` library, and the response is expected to be a JSON object.
     * @param endpoint The URL of the endpoint to make the request to, relative to the base URL.
     * @param data The data to be sent in the body of the POST request.
     * @param config Optional AxiosRequestConfig object to customize the request.
     * @returns A Promise that resolves to the response data.
     */
    async post(endpoint: string, data: any, config?: AxiosRequestConfig) : Promise<AxiosResponse> {
        return (await this.instance.post(endpoint, data, config)).data;
    }
}
