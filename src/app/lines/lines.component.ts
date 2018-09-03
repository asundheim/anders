import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.scss']
})
export class LinesComponent implements OnInit {
  points = [];

  @ViewChild('connectyLines') canvasRef: ElementRef;
  @HostListener('document:mousemove', ['$event'])
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
        for (let k = 0; k < 6; k++) {
          tempRow.push({
            x: this.getRandom(i, i + this.getWidth() / 15),
            y: this.getRandom(j, j + this.getHeight() / 15)
          });
        }
        tempCol.push(tempRow);
      }
      this.points.push(tempCol);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
