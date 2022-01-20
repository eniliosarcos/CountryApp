import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CountryResponse } from '../interfaces/contries.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  BASE_URL = environment.countriesApi_URL;

  country$:BehaviorSubject<CountryResponse | null> = new BehaviorSubject<CountryResponse | null>(null);

  constructor(private http: HttpClient) {
  }

  getCountries():Observable<CountryResponse[]>{

    return this.http.get<CountryResponse[]>(this.BASE_URL).pipe(
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
