import { Component, Input } from '@angular/core';
import { ILabel } from '../../interfaces/ILabel';
import { LabelColor } from '../../enums/label-colors';
import { IModule } from '../../interfaces/IModule';

@Component({
  selector: 'app-anders-container',
  templateUrl: './anders-container.component.html',
  styleUrls: ['./anders-container.component.scss']
})


export class AndersContainerComponent {
  @Input() module: IModule;
}
