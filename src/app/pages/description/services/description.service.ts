import { Injectable } from '@angular/core';
import { filter, Observable} from 'rxjs';
import { CountryResponse } from '../../core/interfaces/contries.interface';
import { CountryService } from '../../core/services/country.service';

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {

  get country$(): Observable<CountryResponse | null>{
    return this.countryService.country$.pipe(
      filter(country => !!Boolean(country)),
    );
  }

  constructor(private countryService: CountryService) { }
}
