import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CountryService } from '../../core/services/country.service';
import { WeatherResponse } from '../interfaces/weather.interfaces';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  BASE_URL = environment.weatherAPI_URL;
  WEATHER_API_KEY = environment.WEATHER_API_KEY;

  get country$(){
    return this.countryService.country$.pipe(
      filter(country => !!Boolean(country)),
    );
  }

  weatherData!: WeatherResponse;

  constructor(private http: HttpClient, private countryService:CountryService) { }

  getWeatherData(lat:number,lng:number):Observable<WeatherResponse>{
    return this.http.get<WeatherResponse>(`${this.BASE_URL}/weather?lat=${lat}&lon=${lng}&units=metric&lang=sp&appid=${this.WEATHER_API_KEY}`);
  }
}
