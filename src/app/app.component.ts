import { Component } from '@angular/core';
import { IModule } from '../interfaces/IModule';
import { IModuleRow } from '../interfaces/IModuleRow';
import { LabelColor } from '../enums/label-colors';
import { ILabel } from '../interfaces/ILabel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
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
        ]
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
        ]
      } as IModule
    },
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
        ] as ILabel[]
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
        ]
      } as IModule
    }
  ] as IModuleRow[];
}
