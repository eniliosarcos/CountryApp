import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import * as L from 'leaflet';
import { CountryResponse } from 'src/app/pages/core/interfaces/contries.interface';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnChanges, AfterViewInit {
  @Input() country!:CountryResponse;

  private map:any;

  constructor(){

  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.country){
      this.changeView(this.country.latlng[0],this.country.latlng[1])
    }
  }

  changeView(lat:any,lng:any) {
    // this.map.panTo(new L.LatLng(lat, lng));
    this.map.flyTo(new L.LatLng(lat, lng),this.map.getZoom(),{
      "animate":true,
      "pan":{
        "duration":1
      }
    })
}

  ngAfterViewInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setGeoLocation.bind(this));
   }
  }

  setGeoLocation(position: { coords: { latitude: any; longitude: any } }) {
    const {
       coords: { latitude, longitude },
    } = position;

    this.map = L.map('map').setView([latitude, longitude], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>contributors'
     } ).addTo(this.map);
 }

}
