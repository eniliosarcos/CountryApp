import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CountryResponse } from './pages/core/interfaces/contries.interface';
import { CountryService } from './pages/core/services/country.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Countries-App';
  countrySelected!:CountryResponse;

  myForm: FormGroup = this.formBuilder.group({
    country: ['',Validators.required]
  })

  countries$:Observable<CountryResponse[]> = this.countryServices.getCountries();

  constructor(private formBuilder:FormBuilder, private countryServices: CountryService){
  }

  selectOption(){
    this.countrySelected = this.myForm.get('country')?.value;
    this.countryServices.country$.next(this.countrySelected);
  }

}
