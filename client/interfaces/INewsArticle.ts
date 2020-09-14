export type NewsApiResponse = {
  articles: INewsArticle[];
  status: string;
  totalResults: number;
};

export interface INewsArticle {
  source: ISource;
  author?: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface ISource {
  id?: string;
  name?: string;
}
