import { Component, OnInit } from '@angular/core';
import { startWith, switchMap, take, tap, map,filter } from 'rxjs/operators';
import { CountryResponse } from '../core/interfaces/contries.interface';
import { CountryService } from '../core/services/country.service';
import { NewsResponse } from './interfaces/news.interface';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news$ = this.newService.newsCountry$.pipe(
    filter(country => !!Boolean(country)),
    switchMap(resp => this.newService.getNews(resp!.translations['spa'].common)),
    map(({articles}) => articles)
  )

  constructor(private newService: NewsService) { }

  ngOnInit(): void {
  }

  openNewInTab(newUrl: string): void{
    window.open(newUrl,  '_blank');
  }

}
