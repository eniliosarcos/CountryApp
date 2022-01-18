import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { CountryResponse } from '../../core/interfaces/contries.interface';
import { CountryService } from '../../core/services/country.service';
import { Article, NewsResponse } from '../interfaces/news.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  get newsCountry$(){
    return this.countryService.country$;
  }

  constructor(private http: HttpClient, private countryService: CountryService) { }

  getNews(countryName:string):Observable<NewsResponse>{

    return this.http.get<NewsResponse>(`https://newsapi.org/v2/everything?q=${countryName}&apiKey=5e55477be7b649fba66a4b59bf95c647`);
  }
}
