import { Component, OnInit } from '@angular/core';
import { latLng, marker, Marker, icon, tileLayer } from 'leaflet';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private markers: Marker[];
  constructor(private propertyService: PropertyService) {
    this.markers = []
    propertyService.data$.subscribe(
      data => {
        console.log("change registered in map component");
        this.markers = [];
        for (var property in data) {
          var coords = data[property].coords;
          this.markers.push(marker([coords.latitude,coords.longitude], {
            icon: icon({
              iconSize: [ 25, 41 ],
              iconAnchor: [ 13, 41 ],
              iconUrl: 'assets/marker-icon.png',
              shadowUrl: 'assets/marker-shadow.png'
            })
          }));
        }
      }
    );
   }

  ngOnInit() {
    //nothing
  }
  options = {
    layers: [
      tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
      })
    ],
  zoom: 11,
  center: latLng(39.973687, -75.158510)
};

}
