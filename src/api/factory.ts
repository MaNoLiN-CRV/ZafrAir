import Axios from "./http/axios";
import Fetch from "./http/fetch";
import Http from "./http/http";
export type HTTP_TYPE = "fetch" | "axios";
export default class ApiFactory {
    /**
     * Creates an instance of {@link Http} given the specified HTTP type and base URL.
     * @param type The type of HTTP client to use. Supported types are "fetch" and "axios".
     * @param baseUrl The base URL to use for making requests.
     * @returns An instance of {@link Http} with the specified configuration.
     * @throws {Error} If the specified type is not supported.
     */
    static createHttp(type: HTTP_TYPE, baseUrl: string, token?: string): Http {
        switch (type) {
            case "fetch":
                return new Fetch(baseUrl, token);
            case "axios":
                return new Axios(baseUrl, token);
            default:
                throw new Error(`Invalid http type: ${type}`);
        }
    }
}