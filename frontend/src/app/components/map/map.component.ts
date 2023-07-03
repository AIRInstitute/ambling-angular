import { Component } from '@angular/core';
import { Map, geoJson, polygon, tileLayer } from 'leaflet'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  private map: any;
  public currentLat: number = 40.965045544659326;
  public currentLng: number = -5.664169260781617;
  public currentZoom: number = 15;
  public currentMaxZoom: number = 20;

  private mapL: any;
  public currentLatL: number = 40.965045544659326;
  public currentLngL: number = -5.664169260781617;
  private mapR: any;
  public currentLatR: number = 40.965045544659326;
  public currentLngR: number = -5.664169260781617;

  selectedCoverage: string = "RSSI/SNR";
  listCoverageMap: String[] = [
    'RSSI/SNR',
  ];

  initMap() {
    setTimeout(() => {
      this.map = new Map('map').setView([this.currentLat, this.currentLng], this.currentZoom);
      tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: this.currentMaxZoom,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);     
      
      geoJson(polygonJson, {
        onEachFeature: function (feature, layer){
          layer.bindPopup('<b>This is a </b>' + feature.properties.name)
        },
        style: {
          fillColor: 'red',
          fillOpacity: 1,
          color: 'green'
        }
      }).addTo(this.map);

    }, 100);
  }

  initMapLeft() {
    setTimeout(() => {
      this.mapL = new Map('mapLeft').setView([this.currentLatL, this.currentLngL], this.currentZoom);
      tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: this.currentMaxZoom,
	      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
      }).addTo(this.mapL);      
    }, 100);
  }
  initMapRight() {
    setTimeout(() => {
      this.mapR = new Map('mapRight').setView([this.currentLatR, this.currentLngR], this.currentZoom);
      tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: this.currentMaxZoom,
	      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
      }).addTo(this.mapR);      
    }, 100);
  }

  ngAfterViewInit() {
    this.initMap();

    this.initMapLeft();
    this.initMapRight();
  }

}


