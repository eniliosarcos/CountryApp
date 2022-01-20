import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountryResponse } from '../interfaces/contries.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  country$ = new BehaviorSubject<CountryResponse | null>(null);

  constructor(private http: HttpClient) {
  }

  getCountries():Observable<CountryResponse[]>{

    return this.http.get<CountryResponse[]>('https://restcountries.com/v3.1/all').pipe(
      map(countries => {
        countries.sort((a,b)=>{
          if (a.name.common > b.name.common ) {
            return 1;
          }
          if (a.name.common < b.name.common) {
            return -1;
          }
          return 0;
        })
        return countries;
      })
    );
  }

}
