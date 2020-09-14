import { BaseApi } from 'services/BaseApi/BaseApi';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { INewsArticle, NewsApiResponse } from 'interfaces/INewsArticle';

class NewsApi<T> extends BaseApi {
  private readonly resource = '/top-headlines?country=us';

  constructor(config: AxiosRequestConfig) {
    super(config);
  }

  async find(): Promise<AxiosResponse<T>> {
    return await this.get(this.resource);
  }

  async findOne(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return await this.get(this.resource, config);
  }
}

const newsApi = new NewsApi<NewsApiResponse>({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    'X-Api-Key': process.env.NEWS_API_KEY,
  },
});

export { newsApi };
