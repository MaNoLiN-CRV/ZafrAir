import ApiFactory, { HTTP_TYPE } from "../api/factory";
import Http from "../api/http/http";

export default class Config {
    public static readonly API_URL = '';
    private static readonly httpType : HTTP_TYPE = 'fetch';
    
    public static api : Http = ApiFactory.createHttp(this.httpType, Config.API_URL);
}