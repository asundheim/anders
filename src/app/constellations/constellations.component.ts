import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-constellations',
  templateUrl: './constellations.component.html',
  styleUrls: ['./constellations.component.scss']
})
export class ConstellationsComponent implements OnInit {
  points = [];

  @ViewChild('connectyLines') canvasRef: ElementRef;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: any) {
    const ctx: CanvasRenderingContext2D = this.canvasRef.nativeElement.getContext('2d');
    ctx.strokeStyle = 'rgba(163, 163, 163, 0.3)';
    ctx.fillStyle = 'rgba(163, 163, 163, 0.3)';
    ctx.clearRect(0, 0, this.getWidth(), this.getHeight());
    const xIndex = Math.floor((e.clientX / this.getWidth()) * 15);
    const yIndex = Math.floor(e.clientY / (this.getHeight()) * 15);
    this.points[xIndex][yIndex]
    .forEach((p) => {
      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    });
    for (let i = (xIndex !== 0 ? -1 : 0); i <= (xIndex !== 15 ? 1 : 0); i++) {
      for (let j = (yIndex !== 0 ? -1 : 0); j <= (yIndex !== 15 ? 1 : 0); j++) {
        this.points[xIndex + i][yIndex + j].forEach((p) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2, 0, 2 * Math.PI);
          ctx.fill();
        });
      }
    }

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
