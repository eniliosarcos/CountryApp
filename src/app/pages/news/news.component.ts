import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap, tap, map, delay } from 'rxjs/operators';
import { Article } from './interfaces/news.interface';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  boxtextInfo:string = "Debes seleccionar un país para ver las noticias."

  loading$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  news$:Observable<Article[]> = this.newService.newsCountry$.pipe(
    tap(() => this.loading$.next(true)),
    delay(1000),
    switchMap(country => this.newService.getNews(country!.translations['spa'].common)),
    map(({articles}) => articles),
    tap(() => this.loading$.next(false))
  )

  constructor(private newService: NewsService) { }

  ngOnInit(): void {
  }

  openNewInTab(newUrl: string): void{
    window.open(newUrl,  '_blank');
  }

}
