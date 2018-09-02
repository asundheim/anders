import { Component, Input } from '@angular/core';
import { IModule } from '../../interfaces/IModule';

@Component({
  selector: 'app-anders-container',
  templateUrl: './anders-container.component.html',
  styleUrls: ['./anders-container.component.scss']
})


export class AndersContainerComponent {
  @Input() module: IModule;
}
