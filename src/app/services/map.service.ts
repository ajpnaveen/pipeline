import {
  Injectable
} from '@angular/core';
import {
  loadModules
} from 'esri-loader';

@Injectable()
export class MapService {
  esriMap: any;
  esriMapView: any;
  searchWidget: any;
  basemapToggleWidget: any;
  zoomWidget: any;

  private _maps: any = {
      map1: {
          mapName: 'map1',
          map: {},
          mapView: {},
          layers: {
              pipeLineLayer: {}
          }
      }
  };

  constructor() {}

  loadEsri(): Promise < any > {
      // only load the ArcGIS API for JavaScript when this component is loaded
      const options = {
          url: 'https://js.arcgis.com/4.7/'
      };

      return loadModules([
              'esri/Map',
              'esri/views/MapView',
              'esri/widgets/Search',
              "esri/widgets/BasemapToggle",
              "esri/widgets/Zoom"
          ], options)
          .then(([EsriMap, EsriMapView, Search, BasemapToggle, Zoom]) => {
              this.esriMap = EsriMap;
              this.esriMapView = EsriMapView;
              this.searchWidget= Search;
              this.basemapToggleWidget = BasemapToggle;
              this.zoomWidget = Zoom;
              this._maps.map1.map = this.esriMap({
                  basemap: 'streets'
              });
              return Promise.resolve();
          })
          .catch(err => {
              console.error(err);
          });
  }

  get map1() {
      return this._maps.map1.map;
  }
}