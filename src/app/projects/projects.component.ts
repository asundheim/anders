import { Component, OnInit } from '@angular/core';
import { LabelColor } from '../../enums/label-colors';
import { ILabel } from '../../interfaces/ILabel';
import { IModule } from '../../interfaces/IModule';
import { IModuleRow } from '../../interfaces/IModuleRow';
import { globals } from 'src/environments/environment';
import { DeviceDetectorService } from 'ngx-device-detector';

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
        interact: 'https://darthevandar.github.io/DungeonBoxes/',
        description: 'Webapp displaying randomized dungeon layouts with customizable parameters. \nUses Delaunay Triangulation and minimum spanning trees to create the layouts. \nClick on the image to try it!'
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
        interact: 'https://anderssundheim.me/anders/spotify',
        imageLink: 'https://anderssundheim.me/anders/spotify',
        description: 'Randomizes your spotify playlists using the Spotify Web API'
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
        repoLink: 'https://github.com/DarthEvandar/LoungeforCSGO',
        description: 'Android wrapper app for CSGOLounge with a custom UI and expanded features. \nDownloaded 20,000 times before it was deprecated.'
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
        interact: 'http://darthevandar.github.io/2dtree',
        description: '2d Binary Tree webapp with custom parameters.  \nClick on the image to try it!'
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
        interact: 'https://darthevandar.github.io/Place3D/',
        description: 'reddit.com/r/place in 3D using ThreeJS'
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
        description: 'Perlin noise visualized through circles.  \nMouse over to see it work!',
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
        repoLink: 'https://github.com/DarthEvandar/VectorTerrain',
        description: 'Terrain generation using the diamond-square algorithm visualized in OpenGL and Java.'
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
        repoLink: 'https://github.com/DarthEvandar/Darthevandar.github.io/tree/master/src/app/constellations',
        description: 'Click the toggle button and move your mouse around to see this work!'
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
        repoLink: 'https://github.com/DarthEvandar/go-switch',
        description: 'Uses the Philips Hue Go lamp and Node.JS to use the physical button on the Hue Go as a light switch.'
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
        repoLink: 'https://github.com/DarthEvandar/lua_minimum_spanning_tree',
        description: 'Minimum Spanning Tree implementation in Lua.'
      } as IModule
    } as IModuleRow
  ] as IModuleRow[];

  mobile: boolean;
  constructor(private deviceService: DeviceDetectorService) { }

  ngOnInit() {
    globals.header = 'Anders Sundheim';
    this.mobile = this.deviceService.isMobile();
  }

}
