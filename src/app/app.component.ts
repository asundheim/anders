import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ConstellationsComponent } from './constellations/constellations.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// TODO
// clicking on pictures
export class AppComponent implements AfterViewInit {

  @ViewChild('constellations') constellationsRef: ConstellationsComponent;

  ngAfterViewInit() {
    this.constellationsRef.generatePoints();
  }
}
