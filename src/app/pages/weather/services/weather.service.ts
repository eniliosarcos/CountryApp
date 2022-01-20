import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { CountryService } from '../../core/services/country.service';
import { WeatherResponse } from '../interfaces/weather.interfaces';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  get country$(){
    return this.countryService.country$.pipe(
      filter(country => !!Boolean(country)),
    );
  }

  weatherData!: WeatherResponse;

  constructor(private http: HttpClient, private countryService:CountryService) { }

  getWeatherData(lat:number,lng:number):Observable<WeatherResponse>{
    return this.http.get<WeatherResponse>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&lang=sp&appid=8163a2cb081337e670c7e2cea1137140`);
  }
}
