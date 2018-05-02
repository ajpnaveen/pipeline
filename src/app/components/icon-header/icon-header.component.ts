import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-header',
  templateUrl: './icon-header.component.html',
  styleUrls: ['./icon-header.component.css']
})
export class IconHeaderComponent implements OnInit {

  bDisplayLayersPanel: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  layersFunc()
  {
    if(this.bDisplayLayersPanel == true)
        this.bDisplayLayersPanel = false;
    else
      this.bDisplayLayersPanel = true;
  }

  closeLayersPanel()
  {
    this.bDisplayLayersPanel = false;
  }

}
