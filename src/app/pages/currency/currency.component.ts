import { Component, OnInit } from '@angular/core';
import { combineLatest, concatMap, distinctUntilChanged, forkJoin, map, switchMap, tap } from 'rxjs';
import { CountryService } from '../core/services/country.service';
import { CurrencyService } from './services/currency.service';

interface currency{

}

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  currenciesName$ = this.countryService.country$.pipe(
    map(country =>  Object.values(country.currencies!).map(currency => currency.name)),
  )

  currencies$ = this.countryService.country$.pipe(
    map(country =>  Object.keys(country.currencies!)),
  )

  currenciesConverted$ = this.countryService.country$.pipe(
    map(country =>  Object.keys(country.currencies!)),
    concatMap(currencies => {
      const observables = currencies.map(currency => this.currencyService.getConvertedCurrencyValue(currency));
      return forkJoin([...observables]);
    }),
    map(resp => resp.map(a => Object.values(a))),
  )




  constructor(private currencyService: CurrencyService, private countryService: CountryService) { }

  ngOnInit(): void {
  }

}
