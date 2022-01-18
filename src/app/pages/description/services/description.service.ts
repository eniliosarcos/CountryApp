import { Injectable } from '@angular/core';
import { startWith, switchMap } from 'rxjs';
import { CountryService } from '../../core/services/country.service';

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {

  get descriptionCountry$(){
    return this.countryService.country$;
  }

  constructor(private countryService: CountryService) { }
}
