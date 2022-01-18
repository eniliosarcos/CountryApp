import { Component, OnInit } from '@angular/core';
import { tap, map, startWith, switchMap } from 'rxjs';
import { CountryResponse } from '../core/interfaces/contries.interface';
import { CountryService } from '../core/services/country.service';
import { DescriptionService } from './services/description.service';



@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  descriptionCountry$ = this.descriptionService.descriptionCountry$;

  constructor(private descriptionService: DescriptionService) { }

  ngOnInit(): void {
  }

}
