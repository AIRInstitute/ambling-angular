import { Component } from '@angular/core';
import { Map, geoJson, icon, marker, tileLayer } from 'leaflet';
import { mapRed } from '../../../assets/layersMap/red_antonio';

const geojsonFeature = {
  type: 'Feature' as const,
  properties: {
    name: 'Coors Field',
    amenity: 'Baseball Stadium',
    popupContent: 'This is where the Rockies play!'
  },
    geometry: {
    type: 'Point' as const,
    coordinates: [-104.99404, 39.75621]
  }
};

interface Marker {
  Lat: number;
  Lng: number;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  private map: any;
  public currentLat: number = 40.965045544659326;
  public currentLng: number = -5.664169260781617;
  public currentZoom: number = 15;
  public currentMaxZoom: number = 20;

  private mapL: any;
  public currentLatL: number = 39.236043934318538;
  public currentLngL: number = -6.288185696018949;
  private mapR: any;
  public currentLatR: number = 40.965045544659326;
  public currentLngR: number = -5.664169260781617;

  selectedCoverage: string = 'RSSI/SNR';
  listCoverageMap: String[] = ['RSSI/SNR'];

  listMarkers: Marker[] = [
    {
      Lat: 40.987272061, Lng: -5.664558670
    },
    {
      Lat: 40.969936222, Lng: -5.663674591
    },
    {
      Lat: 40.964983000, Lng: -5.662810000
    },
    {
      Lat: 40.943503000, Lng: -5.674343000
    },
    {
      Lat: 40.959671794, Lng: -5.665472646
    },
    {
      Lat: 40.968924629, Lng: -5.662822495
    },
    {
      Lat: 40.960813169, Lng: -5.661879879
    },
    {
      Lat: 40.968713581, Lng: -5.657529803
    },
    {
      Lat: 40.968566469, Lng: -5.657074202
    },
    {
      Lat: 40.961846921, Lng: -5.669559154
    },
    {
      Lat: 40.961925157, Lng: -5.669559154
    },
  ];

  initMap() {
    setTimeout(() => {
      this.map = new Map('map').setView(
        [this.currentLat, this.currentLng],
        this.currentZoom
      );
      tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: this.currentMaxZoom,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.map);

      for (const item of this.listMarkers) {
        marker([item.Lat, item.Lng]).addTo(this.map);
      }

    }, 100);
  }

  initMapLeft() {
    setTimeout(() => {
      this.mapL = new Map('mapLeft').setView(
        [this.currentLatL, this.currentLngL],
        this.currentZoom
      );
      tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          maxZoom: this.currentMaxZoom,
          attribution:'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        }
      ).addTo(this.mapL);

      geoJson(mapRed, {
        onEachFeature: function (feature, layer){
          layer.bindPopup('<b>This is a </b>' + feature.properties.name)
        },
        style: {
          fillColor: 'red',
          fillOpacity: 1,
          color: 'green'
        }
      }).addTo(this.mapL);

      //geoJson(mapRed).addTo(this.mapL);

    }, 100);
  }
  initMapRight() {
    setTimeout(() => {
      this.mapR = new Map('mapRight').setView(
        [this.currentLatR, this.currentLngR],
        this.currentZoom
      );
      tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
        {
          maxZoom: this.currentMaxZoom,
          attribution:'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012',
        }
      ).addTo(this.mapR);
    }, 100);
  }

  ngAfterViewInit() {
    this.initMap();

    this.initMapLeft();
    this.initMapRight();
  }
}
