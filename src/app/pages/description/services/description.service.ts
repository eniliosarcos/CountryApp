import { Injectable } from '@angular/core';
import { filter} from 'rxjs';
import { CountryService } from '../../core/services/country.service';

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {

  get country$(){
    return this.countryService.country$.pipe(
      filter(country => !!Boolean(country)),
    );
  }

  constructor(private countryService: CountryService) { }
}
