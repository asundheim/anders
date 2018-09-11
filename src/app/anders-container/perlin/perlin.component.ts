import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import OpenSimplexNoise from 'open-simplex-noise';

@Component({
  selector: 'app-perlin',
  templateUrl: './perlin.component.html',
  styleUrls: ['./perlin.component.scss']
})
export class PerlinComponent implements OnInit {
  active = false;
  openSimplex = new OpenSimplexNoise(Date.now());
  t = 0;
  @ViewChild('perlinCanvas') canvasRef: ElementRef;
  @HostListener('mouseenter')
  onMouseEnter() {
    this.active = true;
    this.drawCircles();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.active = false;
  }

  drawCircles() {
    this.t += .01;
    const ctx: CanvasRenderingContext2D = this.canvasRef.nativeElement.getContext('2d');
    ctx.lineWidth = 4;
    ctx.clearRect(0, 0, 300, 200);
    for (let i = 10; i < 290; i += 20) {
      for (let j = 10; j < 190; j += 20 ) {
        ctx.beginPath();
        const value = Math.abs(this.openSimplex.noise3D(i / 100, j / 100, this.t));
        ctx.arc(i, j, Math.abs(value) * 10, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
    if (this.active) {
      requestAnimationFrame(this.drawCircles.bind(this));
    }
  }
  newSeed() {
    this.openSimplex = new OpenSimplexNoise(Date.now());
  }
  constructor() { }

  ngOnInit() {
  }

}
