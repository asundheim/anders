import { Component, Input, ViewChild } from '@angular/core';
import { IModule } from '../../interfaces/index';
import { TreeComponent, DungeonBoxesComponent } from './index';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { globals } from '../../environments/environment';
@Component({
  selector: 'app-anders-container',
  templateUrl: './anders-container.component.html',
  styleUrls: ['./anders-container.component.scss']
})

export class AndersContainerComponent {
  faInfoCircle = faInfoCircle;
  constellation = globals.constellationsEnabled;
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

  toggleConstellations() {
    this.constellation = !this.constellation;
    globals.constellationsEnabled = !globals.constellationsEnabled;
  }
}
