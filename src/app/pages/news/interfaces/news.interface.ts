export interface NewsResponse {
  articles:    Article[];
}
export interface Article {
  title:                    string;
  author:                   null | string;
  link:                     string;
  summary:                  string;
  media:                    string;
}
