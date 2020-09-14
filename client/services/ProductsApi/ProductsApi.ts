import { BaseApi } from 'services/BaseApi/BaseApi';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { IProduct } from 'interfaces/IProduct';

class ProductsApi<T> extends BaseApi {
  private readonly resource = '/products';

  constructor(config: AxiosRequestConfig) {
    super(config);
  }

  async find(): Promise<AxiosResponse<T[]>> {
    return await this.get(this.resource);
  }

  async findOne(config: AxiosRequestConfig): Promise<AxiosResponse<T[]>> {
    return await this.get(this.resource, config);
  }
}

const productsApi = new ProductsApi<IProduct>({
  baseURL: 'http://localhost:1337',
});

export { productsApi };
