import { Component, OnInit } from '@angular/core';
import { LabelColor } from '../../enums/label-colors';
import { ILabel } from '../../interfaces/ILabel';
import { IModule } from '../../interfaces/IModule';
import { IModuleRow } from '../../interfaces/IModuleRow';

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
      } as IModule
    } as IModuleRow,
    {
      module1: {
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
      } as IModule,
      module2: {
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
      } as IModule
    } as IModuleRow,
    {
      module1: {
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
      },
      module2: {
        name: 'Perlin Circles',
        labels: [
          {
            name: 'Javascript',
            color: LabelColor.Orange
          }
        ],
        image: 'assets/perlin_1.png',
        repoLink: 'https://github.com/DarthEvandar/PerlinCircles',
        interact: 'https://darthevandar.github.io/PerlinCircles/'
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
        name: 'Ingress_Java',
        labels: [
          {
            name: 'Java',
            color: LabelColor.Orange
          } as ILabel,
          {
            name: 'Swing',
            color: LabelColor.Orange
          }
        ] as ILabel[],
        image: 'assets/ingress_1.png',
        repoLink: 'https://github.com/DarthEvandar/Ingress_Dev'
      } as IModule
    } as IModuleRow
  ] as IModuleRow[];
  constructor() { }

  ngOnInit() {
  }

}
