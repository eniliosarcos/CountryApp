import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { switchMap, tap, map, delay } from 'rxjs/operators';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  boxtextInfo:string = "Debes seleccionar un país para ver las noticias."

  loading$ = new BehaviorSubject<boolean>(false);

  news$ = this.newService.newsCountry$.pipe(
    tap(() => this.loading$.next(true)),
    delay(1000),
    switchMap(resp => this.newService.getNews(resp!.translations['spa'].common)),
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
