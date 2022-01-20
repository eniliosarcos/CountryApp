export interface NewsResponse {
  status:      string;
  total_hits:  number;
  page:        number;
  total_pages: number;
  page_size:   number;
  articles:    Article[];
  user_input:  UserInput;
}

export interface Article {
  title:                    string;
  author:                   null | string;
  published_date:           Date;
  published_date_precision: PublishedDatePrecision;
  link:                     string;
  clean_url:                string;
  excerpt:                  string;
  summary:                  string;
  rights:                   string;
  rank:                     number;
  topic:                    string;
  country:                  string;
  language:                 Language;
  authors:                  string[];
  media:                    string;
  is_opinion:               boolean;
  twitter_account:          null | string;
  _score:                   number;
  _id:                      string;
}

export enum Language {
  En = "en",
  Es = "es",
  ID = "id",
  Tr = "tr",
  Vi = "vi",
}

export enum PublishedDatePrecision {
  Full = "full",
  TimezoneUnknown = "timezone unknown",
}

export interface UserInput {
  q:                        string;
  search_in:                string[];
  lang:                     null;
  not_lang:                 null;
  countries:                null;
  not_countries:            null;
  from:                     Date;
  to:                       null;
  ranked_only:              string;
  from_rank:                null;
  to_rank:                  null;
  sort_by:                  string;
  page:                     number;
  size:                     number;
  sources:                  null;
  not_sources:              null;
  topic:                    null;
  published_date_precision: null;
}
