import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CountryService } from '../../core/services/country.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  BASE_URL = environment.currenciesConvertAPI_URL;

  get country$(){
    return this.countryService.country$.pipe(
      filter(country => !!Boolean(country)),
    );
  }

  constructor(private http: HttpClient, private countryService: CountryService) { }

  // getCurrencyValues(currency:string){
  //   return this.http.get(`https://freecurrencyapi.net/api/v2/latest?apikey=0656f810-7760-11ec-b0e8-2f45795fd168&base_currency=CLP`)
  // }

  getConvertedCurrencyValue(currency:string){

    return this.http.get(`${this.BASE_URL}/convert?q=${currency}_USD,USD_${currency}&compact=ultra&apiKey=5ead8ffabf4ef82ba5dd`)
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
