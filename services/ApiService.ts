import axios, {AxiosInstance} from "axios"
import {BASE_URL} from "@/constants/urls";
import {PREFIX} from "@/constants/prefix";

class ApiService {
    private static instance: ApiService;
    private axiosInstance: AxiosInstance;

    private constructor() {
        this.axiosInstance = axios.create({
            baseURL: BASE_URL + PREFIX,
            timeout: 5000,
            headers: {
                "Content-Type": "application/json",
            }
        })
    }
    public static getInstance() {
        if(!ApiService.instance){
            ApiService.instance = new ApiService();
        }
        return ApiService.instance;
    }
    public async getData(endpoint: string) {
        try {
            const response = await this.axiosInstance.get(endpoint);
            return response.data;
        } catch (error) {
            console.warn(error);
            throw error;
        }
    }
    public async postData(endpoint: string, data: any) {
        try{
            const response = await this.axiosInstance.post(endpoint, data);
            return response.data;
        } catch (error) {
            console.warn(error);
            throw error;
        }
    }
}

export default ApiService;