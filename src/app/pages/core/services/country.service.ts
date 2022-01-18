import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { CountryResponse } from '../interfaces/contries.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  country$ = new BehaviorSubject<CountryResponse | null>(null);

  constructor(private http: HttpClient) {
  }

  getCountries():Observable<CountryResponse[]>{

    return this.http.get<CountryResponse[]>('https://restcountries.com/v3.1/all');
  }
}
