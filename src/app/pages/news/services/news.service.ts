import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { filter } from 'rxjs/operators';
import { CountryService } from '../../core/services/country.service';
import { NewsResponse } from '../interfaces/news.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  get newsCountry$(){
    return this.countryService.country$.pipe(
      filter(country => !!Boolean(country)),
    );
  }

  constructor(private http: HttpClient, private countryService: CountryService) { }

  getNews(countryName:string):Observable<NewsResponse>{

    return this.http.get<NewsResponse>(`https://newsapi.org/v2/everything?q=${countryName}&apiKey=5e55477be7b649fba66a4b59bf95c647`);
  }
}
