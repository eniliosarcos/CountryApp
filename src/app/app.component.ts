import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryResponse } from './pages/core/interfaces/contries.interface';
import { CountryService } from './pages/core/services/country.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  countrySelected!:CountryResponse;
  myForm: FormGroup = this.formBuilder.group({
    country: ['',Validators.required]
  })

  countries$ = this.countryServices.getCountries();

  constructor(private formBuilder:FormBuilder, private countryServices: CountryService){
  }

  selectOption(){
    this.countrySelected = this.myForm.get('country')?.value;
    this.countryServices.country = this.countrySelected;
    console.log(this.countryServices.country)
  }

  title = 'CountriesApp';
}
