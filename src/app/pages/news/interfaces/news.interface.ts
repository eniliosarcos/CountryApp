export interface NewsResponse {
  status:       string;
  totalResults: number;
  articles:     Article[];
}

export interface Article {
  source:      Source;
  author:      null | string;
  title:       string;
  description: string;
  url:         string;
  urlToImage:  null | string;
  publishedAt: Date;
  content:     string;
}

export interface Source {
  id:   ID | null;
  name: string;
}

export enum ID {
  BbcNews = "bbc-news",
  BusinessInsider = "business-insider",
  Reuters = "reuters",
}
