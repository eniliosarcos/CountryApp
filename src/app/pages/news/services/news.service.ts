import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CountryService } from '../../core/services/country.service';
import { NewsResponse } from '../interfaces/news.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  BASE_URL = environment.newsApi_URL;

  get newsCountry$(){
    return this.countryService.country$.pipe(
      filter(country => !!Boolean(country)),
    );
  }

  constructor(private http: HttpClient, private countryService: CountryService) { }

  getNews(countryName:string):Observable<NewsResponse>{

    const headers = new HttpHeaders().set('x-api-key', 'JVOjT55hOQLvN8VCd1076vWV64FjiY6Pa5S4JEkEMbY');

    return this.http.get<NewsResponse>(`https://api.newscatcherapi.com/v2/search?q=${countryName}`, {headers});
    // return this.http.get<NewsResponse>(`${this.BASE_URL}/everything?q=${countryName}&apiKey=5e55477be7b649fba66a4b59bf95c647`);
  }
}
