import {
  Component,
  OnInit
} from '@angular/core';
import {
  cribs
} from '../../data/cribs'
import {
  MapService
} from '../../services/map.service'

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {
  private mapView: any = {
      esriMapView1: {}
  };

  cribs: Array < any > = cribs;
  constructor(private mapService: MapService) {}

  ngOnInit() {
      this.mapService.loadEsri().then(() => {
          this.initMap();
      }, (err) => {
          console.log('Wrong loading maps: ' + err);
      });

  }

  initMap() {
      this.mapView.esriMapView1 = new this.mapService.esriMapView({
          container: "viewDiv",
          map: this.mapService.map1,
          zoom: 10,
          center: [-95.642241, 29.614217]
      });


      var searchWidget = new this.mapService.searchWidget({
        view: this.mapView.esriMapView1
      });
      
      // Adds the search widget below other elements in
      // the top left corner of the view
      this.mapView.esriMapView1.ui.add(searchWidget, {
        position: "bottom-right",
        index: 2
      });
  }
}