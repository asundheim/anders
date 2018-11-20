import { Component, OnInit } from '@angular/core';
import { LabelColor } from '../../enums/label-colors';
import { ILabel } from '../../interfaces/ILabel';
import { IModule } from '../../interfaces/IModule';
import { IModuleRow } from '../../interfaces/IModuleRow';
import { globals } from 'src/environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  modules = [
    {
      module1: {
        name: 'Dungeon Boxes',
        labels: [
          {
            name: 'JS',
            color: LabelColor.Orange
          } as ILabel,
          {
            name: 'HTML',
            color: LabelColor.Blue
          },
          {
            name: 'CSS',
            color: LabelColor.LightBlue
          } as ILabel
        ],
        dungeonBoxes: true,
        repoLink: 'https://github.com/AndersSundheim/DungeonBoxes',
        interact: 'https://darthevandar.github.io/DungeonBoxes/'
      } as IModule,
      module2: {
        name: 'Spotify Randomizer',
        image: 'assets/spotify.png',
        labels: [
          {
            name: 'TS',
            color: LabelColor.Green
          } as ILabel,
          {
            name: 'HTML',
            color: LabelColor.Blue
          },
          {
            name: 'SASS',
            color: LabelColor.LightBlue
          } as ILabel
        ],
        repoLink: 'https://github.com/DarthEvandar/anders/tree/master/src/app/spotify',
        interact: 'https://darthevandar.github.io/anders/spotify',
        imageLink: 'https://darthevandar.github.io/anders/spotify'
      } as IModule,
    } as IModuleRow,
    {
      module1: {
        name: 'Lounge for CS:GO',
        image: 'assets/lounge_1.png',
        labels: [
          {
            name: 'Java',
            color: LabelColor.Orange
          } as ILabel,
          {
            name: 'JS',
            color: LabelColor.Orange
          } as ILabel,
          {
            name: 'Android',
            color: LabelColor.Green
          } as ILabel
        ],
        repoLink: 'https://github.com/DarthEvandar/LoungeforCSGO'
      } as IModule,
      module2: {
        name: 'Binary Trees',
        labels: [
          {
            name: 'JS',
            color: LabelColor.Orange
          } as ILabel,
          {
            name: 'HTML',
            color: LabelColor.Blue
          },
          {
            name: 'CSS',
            color: LabelColor.LightBlue
          } as ILabel
        ] as ILabel[],
        tree: true,
        repoLink: 'https://github.com/DarthEvandar/2dtree',
        interact: 'http://darthevandar.github.io/2dtree'
      } as IModule
    } as IModuleRow,
    {
      module1: {
        name: 'Place 3D',
        images: [
          {source: 'assets/place_1.png'},
          {source: 'assets/place_2.png'},
          {source: 'assets/place_3.png'}
        ],
        imageHeight: 180,
        labels: [
          {
            name: 'JS',
            color: LabelColor.Orange
          } as ILabel,
          {
            name: 'OpenGL',
            color: LabelColor.Blue
          },
          {
            name: 'Python',
            color: LabelColor.Green
          },
          {
            name: 'Three.JS',
            color: LabelColor.Red
          }
        ],
        repoLink: 'https://github.com/Darthevandar/place3D',
        interact: 'https://darthevandar.github.io/Place3D/'
      } as IModule,
      module2: {
        name: 'Perlin Circles',
        labels: [
          {
            name: 'Javascript',
            color: LabelColor.Orange
          }
        ],
        repoLink: 'https://github.com/DarthEvandar/PerlinCircles',
        interact: 'https://darthevandar.github.io/PerlinCircles/',
        perlin: true
      } as IModule
    },
    {
      module1: {
        name: 'Vector Terrain',
        images: [
          {source: 'assets/vector_1.png'},
          {source: 'assets/vector_2.png'},
          {source: 'assets/vector_3.png'}
        ],
        imageHeight: 270,
        labels: [
          {
            name: 'Java',
            color: LabelColor.Orange
          } as ILabel,
          {
            name: 'OpenGL',
            color: LabelColor.Blue
          }
        ] as ILabel[],
        repoLink: 'https://github.com/DarthEvandar/VectorTerrain'
      } as IModule,
      module2: {
        name: 'Constellations',
        labels: [
          {
            name: 'Typescript',
            color: LabelColor.Green
          }
        ],
        toggle: true,
        image: 'assets/constellations_1.png',
        repoLink: 'https://github.com/DarthEvandar/Darthevandar.github.io/tree/master/src/app/constellations'
      }
    } as IModuleRow,
    {
      module1: {
        name: 'Hue Go Switch',
        image: 'assets/go_switch_1.png',
        labels: [
          {
            name: 'Node.JS',
            color: LabelColor.Red
          } as ILabel
        ],
        repoLink: 'https://github.com/DarthEvandar/go-switch'
      } as IModule,
      module2: {
        name: 'Lua MST',
        images: [
          {source: 'assets/mst_1.png'},
          {source: 'assets/mst_2.png'}
        ],
        imageHeight: 265,
        labels: [
          {
            name: 'Lua',
            color: LabelColor.Blue
          } as ILabel
        ],
        repoLink: 'https://github.com/DarthEvandar/lua_minimum_spanning_tree'
      } as IModule
    } as IModuleRow
  ] as IModuleRow[];
  constructor() { }

  ngOnInit() {
    globals.header = 'Anders Sundheim';
  }

}
