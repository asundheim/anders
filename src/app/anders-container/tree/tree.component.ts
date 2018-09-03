import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})

export class TreeComponent implements OnInit {
  @ViewChild('treeCanvas') canvasRef: ElementRef;
  constructor() { }

  iters = 9;
  lines = [[150, 200, 120, 130]];
  nextLines = [[150, 200, 120, 130]];
  tempLines = [];
  l = 40;
  leafDepth = 2;
  treeColor = '#ffffff';
  leafColor = '#3c763d';
  branchColor = '#000000';

  ngOnInit() {
    this.treeGenerate();
    this.treeDraw();
  }

  treeDraw() {
    const ctx: CanvasRenderingContext2D = this.canvasRef.nativeElement.getContext('2d');
    ctx.fillStyle = this.treeColor;
    ctx.fillRect(0, 0, 300, 200);
    ctx.strokeStyle = this.branchColor;
    let t = 1;
    let width = 8;
    ctx.lineWidth = width;
    for (let i = 0; i < this.lines.length; i++) {
        if (i === t - 1) {
            t = t * 2;
            width = width - 1;
        }
        ctx.lineWidth = width;
        if (i > Math.pow(2, this.iters - this.leafDepth + 1) - 2) {
            ctx.strokeStyle = this.leafColor;
        }
        ctx.beginPath();
        ctx.moveTo(this.lines[i][0], this.lines[i][1]);
        ctx.lineTo(this.lines[i][2], this.lines[i][3]);
        ctx.stroke();

    }
  }
  getRandom(min, max): number {
    return Math.random() * (max - min) + min;
  }

  treeGenerate() {
    this.lines = [[150, 200, 150, 140]];
    this.nextLines = [[150, 200, 150, 140]];
    this.tempLines = [];
    this.l = 40;

    for (let i = 0; i < this.iters; i++) {
        for (let j = 0; j < this.nextLines.length; j++) {
            const randomAngle1 = this.getRandom(Math.PI / 6, Math.PI / 3);
            const randomAngle2 = this.getRandom(Math.PI / 6, Math.PI / 3);
            let angle1;
            let angle2;
            if (
                (this.nextLines[j][0] > this.nextLines[j][2] &&
                  this.nextLines[j][1] > this.nextLines[j][3]) ||
                  (
                    this.nextLines[j][0] > this.nextLines[j][2] &&
                    this.nextLines[j][1] < this.nextLines[j][3]
                  )
                ) {
                angle1 = ((Math.PI / 2) + ((Math.PI / 2) + Math.atan((this.nextLines[j][3] -
                  this.nextLines[j][1]) / (this.nextLines[j][2] -
                  this.nextLines[j][0])))) - randomAngle1;
                angle2 = ((Math.PI / 2) + ((Math.PI / 2) + Math.atan((this.nextLines[j][3] -
                  this.nextLines[j][1]) / (this.nextLines[j][2] -
                  this.nextLines[j][0])))) + randomAngle2;
            } else {
                angle1 = randomAngle1 + Math.atan((this.nextLines[j][3] - this.nextLines[j][1]) /
                  (this.nextLines[j][2] - this.nextLines[j][0]));
                angle2 = Math.atan((this.nextLines[j][3] - this.nextLines[j][1]) /
                  (this.nextLines[j][2] - this.nextLines[j][0])) - randomAngle2;
            }
            this.tempLines.push([this.nextLines[j][2],
              this.nextLines[j][3],
              this.nextLines[j][2] + (Math.cos(angle1) * this.l),
              this.nextLines[j][3] + (Math.sin(angle1) * this.l)]);
            this.lines.push([this.nextLines[j][2],
              this.nextLines[j][3],
              this.nextLines[j][2] + (Math.cos(angle1) * this.l),
              this.nextLines[j][3] + (Math.sin(angle1) * this.l)]);
            this.tempLines.push([this.nextLines[j][2],
              this.nextLines[j][3],
              this.nextLines[j][2] + (Math.cos(angle2) * this.l),
              this.nextLines[j][3] + (Math.sin(angle2) * this.l)]);
            this.lines.push([this.nextLines[j][2],
              this.nextLines[j][3],
              this.nextLines[j][2] + (Math.cos(angle2) * this.l),
              this.nextLines[j][3] + (Math.sin(angle2) * this.l)]);
        }
        this.l = this.l * .75;
        this.nextLines = this.tempLines;
        this.tempLines = [];
    }
  }

}
