import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, concatMap, delay, filter, forkJoin, map, tap } from 'rxjs';
import { CountryService } from '../core/services/country.service';
import { CurrencyService } from './services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  loading$ = new BehaviorSubject<boolean>(false);

  currenciesName$ = this.currencyService.country$.pipe(
    tap(() => this.loading$.next(true)),
    delay(1000),
    map(country =>  Object.values(country!.currencies!).map(currency => currency.name)),
    tap(() => this.loading$.next(false)),
  )

  currencies$ = this.currencyService.country$.pipe(
    map(country =>  Object.keys(country!.currencies!)),
  )

  currenciesConverted$ = this.currencyService.country$.pipe(
    map(country =>  Object.keys(country!.currencies!)),
    concatMap(currencies => {
      const observables = currencies.map(currency => this.currencyService.getConvertedCurrencyValue(currency));
      return forkJoin([...observables]);
    }),
    map(resp => resp.map(a => Object.values(a))),
  )

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
  }

}
