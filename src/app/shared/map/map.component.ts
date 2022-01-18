import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnChanges, AfterViewInit {
  @Input() latlng!:number[];

  private map:any;

  constructor(){

  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.latlng){
      this.changeView(this.latlng[0],this.latlng[1])
    }
  }

  changeView(lat:any,lng:any) {
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

     L.circle([latitude, longitude], 30000).addTo(this.map)
 }

}
