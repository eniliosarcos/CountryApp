import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, delay, filter, switchMap, tap } from 'rxjs';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {

  boxtextInfo:string = "Debes seleccionar un país para ver la información del clima."

  loading$ = new BehaviorSubject<boolean>(false);
  country$ = this.weatherService.country$;
  weatherData$ = this.country$.pipe(
    tap(() => this.loading$.next(true)),
    delay(1000),
    switchMap((resp) => this.weatherService.getWeatherData(resp!.latlng[0], resp!.latlng[1])),
    tap(() => this.loading$.next(false))
  );

  constructor(
    private weatherService: WeatherService
  ) {}

  iconWeather(icon: string): string {
    return `http://openweathermap.org/img/w/${icon}.png`;
  }
  ngOnInit(): void {}
}
