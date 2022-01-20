import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, debounceTime, delay, filter, map, switchMap, tap } from 'rxjs';
import { CountryService } from '../core/services/country.service';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {

  loading$ = new BehaviorSubject<boolean>(false);
  country$ = this.weatherService.country$.pipe(
    tap(x => console.log(x))
  );

  weatherData$ = this.country$.pipe(
    filter((country) => !!Boolean(country)),
    tap(() => this.loading$.next(true)),
    delay(1000),
    switchMap((resp) => {
      return this.weatherService.getWeatherData(resp!.latlng[0], resp!.latlng[1])
    }),
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
