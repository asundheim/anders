import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ConstellationsComponent } from './constellations/constellations.component';
import { globals } from 'src/environments/environment';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {

  //@ViewChild('constellations') constellationsRef: ConstellationsComponent;
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });
  }
  
  ngAfterViewInit() {
    //this.constellationsRef.generatePoints();
  }

  getHeader() {
    return globals.header;
  }

  navTo() {
    location.href = globals.up;
  }
}
