import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class AxiosInterceptor {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create();
    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    this.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig): any => {
        console.log('Intercepting request:', config);
        return config
      },
      (error) => {
        console.error('Error while intercepting request:', error);
        return Promise.reject(error);
      }
    );

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        console.log('Intercepting response:', response);
        return response;
      },
      (error) => {
        console.error('Error while intercepting response:', error);
        return Promise.reject(error);
      }
    );
  }

  public getInstance(): AxiosInstance {
    return this.axiosInstance;
  }
}
