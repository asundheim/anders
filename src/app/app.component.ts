import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { IModule } from '../interfaces/IModule';
import { IModuleRow } from '../interfaces/IModuleRow';
import { LabelColor } from '../enums/label-colors';
import { ILabel } from '../interfaces/ILabel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
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
        dungeonBoxes: true
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
        tree: true
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
    } as IModuleRow,
    {
      module1: {
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
        image: 'assets/ingress_1.png'
      } as IModule,
      module2: {
        name: 'Hue Go Switch',
        image: 'assets/go_switch_1.png',
        labels: [
          {
            name: 'Node.JS',
            color: LabelColor.Red
          } as ILabel
        ]
      } as IModule
    } as IModuleRow,
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
        ] as ILabel[]
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
        ]
      } as IModule
    } as IModuleRow
  ] as IModuleRow[];
  points = [];
  @ViewChild('connectyLines') canvasRef: ElementRef;
  @ViewChild('tab') tableRef: ElementRef;
  @HostListener('document:mousemove', ['$event']);
  onMouseMove(e: any) {
    const ctx: CanvasRenderingContext2D = this.canvasRef.nativeElement.getContext('2d');
    ctx.strokeStyle = 'rgba(163, 163, 163, 0.3)';
    ctx.clearRect(0, 0, this.getWidth(), this.getHeight());
    this.points[Math.floor((e.clientX / this.getWidth()) * 15)][Math.floor(e.clientY / (this.getHeight()) * 15)]
    .forEach((p) => {
      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    });
  }

  ngOnInit() {
    this.generatePoints();
  }

  getWidth() {
    return window.innerWidth;
  }

  getHeight() {
    return window.innerHeight;
  }

  getRandom(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  generatePoints() {
    for (let i = 0; i < this.getWidth(); i += this.getWidth() / 15) {
      const tempCol = [];
      for (let j = 0; j < this.getHeight(); j += this.getHeight() / 15) {
        const tempRow = [];
        for (let k = 0; k < 3; k++) {
          for (let l = 0; l < 2; l++) {
            tempRow.push({
              x: this.getRandom(i, i + this.getWidth() / 15),
              y: this.getRandom(j, j + this.getHeight() / 15)
            });
          }
        }
        tempCol.push(tempRow);
      }
      this.points.push(tempCol);
    }
  }
}
