import { Component, OnInit } from '@angular/core';
import { filter, map, switchMap, tap } from 'rxjs';
import { CountryService } from '../core/services/country.service';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  weatherData$ = this.countryService.country$.pipe(
    filter((country) => !!Boolean(country)),
    switchMap((resp) =>
      this.weatherService.getWeatherData(resp!.latlng[0], resp!.latlng[1])
    )
  );

  constructor(
    private countryService: CountryService,
    private weatherService: WeatherService
  ) {}

  iconWeather(icon: string): string {
    return `http://openweathermap.org/img/w/${icon}.png`;
  }
  ngOnInit(): void {}
}
