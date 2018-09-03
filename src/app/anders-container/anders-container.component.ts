import { Component, Input, ViewChild } from '@angular/core';
import { IModule } from '../../interfaces/IModule';
import { TreeComponent } from './tree/tree.component';
import { DungeonBoxesComponent } from './dungeon-boxes/dungeon-boxes.component';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-anders-container',
  templateUrl: './anders-container.component.html',
  styleUrls: ['./anders-container.component.scss']
})

export class AndersContainerComponent {
  faInfoCircle = faInfoCircle;
  @ViewChild('tree') tree: TreeComponent;
  @ViewChild('dungeonBoxes') dungeonBoxes: DungeonBoxesComponent;
  @Input() module: IModule;

  newTree() {
    this.tree.treeGenerate();
    this.tree.treeDraw();
  }

  newBoxes() {
    this.dungeonBoxes.genNew(20, 10, 70, 10, 70);
  }

  goToInfo(repoLink: string) {
    window.open(repoLink);
  }
}
