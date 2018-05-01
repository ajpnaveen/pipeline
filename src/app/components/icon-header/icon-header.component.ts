import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-header',
  templateUrl: './icon-header.component.html',
  styleUrls: ['./icon-header.component.css']
})
export class IconHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  layersFunc()
  {
    alert('I am here');
  }

}
