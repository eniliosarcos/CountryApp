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
  NEWS_API_KEY = environment.NEWS_API_KEY;

  get newsCountry$(){
    return this.countryService.country$.pipe(
      filter(country => !!Boolean(country)),
    );
  }

  constructor(private http: HttpClient, private countryService: CountryService) { }

  getNews(countryName:string):Observable<NewsResponse>{

    const headers = new HttpHeaders().set('x-api-key', this.NEWS_API_KEY);

    return this.http.get<NewsResponse>(`https://api.newscatcherapi.com/v2/search?q=${countryName}`, {headers});
  }
}
