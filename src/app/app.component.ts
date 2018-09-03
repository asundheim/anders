import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { IModule } from '../interfaces/IModule';
import { IModuleRow } from '../interfaces/IModuleRow';
import { LabelColor } from '../enums/label-colors';
import { ILabel } from '../interfaces/ILabel';
import { LinesComponent } from './lines/lines.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  @ViewChild('lines') linesRef: LinesComponent;

  ngOnInit() {
    this.linesRef.generatePoints();
  }
}
