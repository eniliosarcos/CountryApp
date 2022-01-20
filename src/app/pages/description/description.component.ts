import { Component, OnInit } from '@angular/core';
import { tap, BehaviorSubject, delay } from 'rxjs';
import { DescriptionService } from './services/description.service';



@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  boxtextInfo:string = "Actualmente en el mapa estas viendo tu ubicación. Selecciona un país para cargar la descripción."

  loading$ = new BehaviorSubject<boolean>(false);

  descriptionCountry$ = this.descriptionService.country$.pipe(
    tap(() => this.loading$.next(true)),
    delay(1000),
    tap(() => this.loading$.next(false)),
  );

  constructor(private descriptionService: DescriptionService) { }

  ngOnInit(): void {
  }

}
