import { Component, Input } from '@angular/core';

@Component({
  selector: 'anders-container',
  templateUrl: './anders-container.component.html',
  styleUrls: ['./anders-container.component.scss']
})


export class AndersContainer {
    @Input() name: string;
}
