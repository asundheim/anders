import { Component, OnInit } from '@angular/core';
import { globals } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    globals.header = 'About';
  }

  goTo(location: string) {
    window.open(location);
  }
}
