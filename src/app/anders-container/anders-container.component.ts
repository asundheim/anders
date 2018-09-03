import { Component, Input, ViewChild } from '@angular/core';
import { IModule } from '../../interfaces/IModule';
import { TreeComponent } from './tree/tree.component';

@Component({
  selector: 'app-anders-container',
  templateUrl: './anders-container.component.html',
  styleUrls: ['./anders-container.component.scss']
})



export class AndersContainerComponent {
  @ViewChild('tree') tree: TreeComponent;
  @Input() module: IModule;

  newTree() {
    this.tree.treeGenerate();
    this.tree.treeDraw();
  }
}
