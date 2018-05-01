import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MapService} from './services/map.service';
import {loadModules} from 'esri-loader';


import { AppComponent } from './app.component';
import { MapViewComponent } from './components/map/map-view.component';
import { IconHeaderComponent } from './components/icon-header/icon-header.component';


@NgModule({
  declarations: [
    AppComponent,
    MapViewComponent,
    IconHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }