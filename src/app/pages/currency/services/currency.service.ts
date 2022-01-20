import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CountryResponse } from '../../core/interfaces/contries.interface';
import { CountryService } from '../../core/services/country.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  BASE_URL = environment.currenciesConvertAPI_URL;

  CURRENCY_API_KEY = environment.CURRENCY_API_KEY;

  get country$(): Observable<CountryResponse | null> {
    return this.countryService.country$.pipe(
      filter(country => !!Boolean(country)),
    );
  }
  constructor(private http: HttpClient, private countryService: CountryService) { }
  getConvertedCurrencyValue(currency:string):Observable<object>{

    return this.http.get(`${this.BASE_URL}/convert?q=${currency}_USD,USD_${currency}&compact=ultra&apiKey=${this.CURRENCY_API_KEY}`)
  }
  getCurrencyNames(currency: string){
    return this.countryService.country$.pipe(
      map(country => this.read_prop(country!.currencies!,currency))
    )
  }
  read_prop(obj:any, prop:any) {
    return Object.values(obj[prop]);
  }
}
