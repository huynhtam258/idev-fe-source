import { AxiosInstance, AxiosResponse } from 'axios';
import { AxiosInterceptor } from './../../interceptor/axios.interceptor';

export class HttpService {
  private axiosInstance: AxiosInstance;

  constructor() {
    const interceptor = new AxiosInterceptor();
    this.axiosInstance = interceptor.getInstance();
  }

  public async get(url: string): Promise<AxiosResponse> {
    return this.axiosInstance.get(url);
  }

  public async post(url: string, data: any): Promise<AxiosResponse> {
    return this.axiosInstance.post(url, data);
  }

  public async put(url: string, data: any): Promise<AxiosResponse> {
    return this.axiosInstance.put(url, data);
  }

  public async delete(url: string): Promise<AxiosResponse> {
    return this.axiosInstance.delete(url);
  }
}
