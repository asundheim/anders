import { Component, Input } from '@angular/core';

@Component({
  selector: 'label-container',
  templateUrl: './label-container.component.html',
  styleUrls: ['./label-container.component.scss']
})


export class LabelContainer {
    @Input() name: string;
}
