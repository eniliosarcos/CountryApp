import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../interfaces/weather.interfaces';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(lat:number,lng:number):Observable<WeatherResponse>{
    return this.http.get<WeatherResponse>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&lang=sp&appid=8163a2cb081337e670c7e2cea1137140`)
  }
}
