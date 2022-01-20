import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, delay, Observable, switchMap, tap } from 'rxjs';
import { CountryResponse } from '../core/interfaces/contries.interface';
import { WeatherResponse } from './interfaces/weather.interfaces';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {

  boxtextInfo:string = "Debes seleccionar un país para ver la información del clima."

  loading$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  country$:Observable<CountryResponse | null> = this.weatherService.country$;
  weatherData$:Observable<WeatherResponse> = this.country$.pipe(
    tap(() => this.loading$.next(true)),
    delay(1000),
    switchMap((country) => this.weatherService.getWeatherData(country!.latlng[0], country!.latlng[1])),
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
