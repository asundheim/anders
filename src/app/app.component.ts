import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ConstellationsComponent } from './constellations/constellations.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  @ViewChild('constellations') constellationsRef: ConstellationsComponent;

  ngOnInit() {
    this.constellationsRef.generatePoints();
  }
}
