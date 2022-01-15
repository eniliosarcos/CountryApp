import { Component, OnInit } from '@angular/core';
import { tap, map } from 'rxjs';
import { CountryResponse } from '../core/interfaces/contries.interface';
import { CountryService } from '../core/services/country.service';



@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  // country!:CountryResponse;

  get country(){
    return this.countryService.country;
  }

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {

  }

}
