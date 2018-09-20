import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Delaunay from 'delaunay-fast';
@Component({
    selector: 'app-dungeon-boxes',
    templateUrl: './dungeon-boxes.component.html',
    styleUrls: ['./dungeon-boxes.component.scss']
})
export class DungeonBoxesComponent implements OnInit {
    @ViewChild('dungeonBoxCanvas') canvasRef: ElementRef;

    upperWindow = 50;
    lowerWindow = 10;
    color = 'rgba(245, 245, 245 , .2)';
    boxColor = 'rgb(0,0,0)';
    l = [];
    r = [];
    drawtree = false;
    drawd = false;
    start = false;
    points = [];
    edges = [];
    testEdges = [];
    testPts = [];
    t;
    tree;
    addTree;
    temp;
    time = 0;

    constructor() { }

    ngOnInit() {
        this.genNew(20, 10, 70, 10, 70);
    }

    same(x1, y1, x2, y2, edg) {
        for (let i = 1; i < edg.length; i++) {
            if ((x1 === edg[i][0] && y1 === edg[i][1] && x2 === edg[i][2] && y2 === edg[i][3]) ||
                (x2 === edg[i][0] && y2 === edg[i][1] && x1 === edg[i][2] && y1 === edg[i][3])) {
                return true;
            }
        }
        return false;
    }

    dist(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2));
    }

    createTree(pointss, edgess) {
        const verticess = [pointss[0]];
        const treee = [];
        while (verticess.length !== pointss.length) {
            let ln = 10000;
            let temp1 = null;
            let temp2 = null;
            for (let i = 0; i < verticess.length; i++) {
                for (let p = 0; p < pointss.length; p++) {
                    if (!this.doesExist(verticess, pointss[p])) {
                        if (this.dist(pointss[p][0], pointss[p][1], verticess[i][0], verticess[i][1]) < ln &&
                            this.same(pointss[p][0], pointss[p][1], verticess[i][0], verticess[i][1], edgess)) {
                            ln = this.dist(pointss[p][0], pointss[p][1], verticess[i][0], verticess[i][1]);
                            temp1 = pointss[p];
                            temp2 = verticess[i];
                        }
                    }
                }
            }
            verticess.push(temp1);
            treee.push([temp1[0], temp1[1], temp2[0], temp2[1]]);
        }
        return treee;
    }

    rando(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    gen(widthParam1, widthParam2, heightParam1, heightParam2) {
        const x1 = this.rando(0, 300 - 30);
        const y1 = this.rando(0, 200 - 30);
        const w1 = this.rando(widthParam1, 50);
        const h1 = this.rando(heightParam1, 50);
        let fail = false;
        for (let i = 0; i < this.r.length; i++) {
            if ((this.r[i][0] === null) ||
                (this.testIntersectx(x1, this.r[i][0], w1, this.r[i][2]) &&
                    this.testIntersecty(y1, this.r[i][1], h1, this.r[i][3]))) {
                fail = true;
            }
        }
        if (fail) {
            return null;
        }
        return [x1, y1, w1, h1];
    }

    testIntersectx(x1, x2, w1, w2) {
        if ((x1 >= x2 && x1 <= (x2 + w2)) || (x1 + w1 >= x2 && x1 + w1 <= (x2 + w2)) || (x1 <= x2 && x1 + w1 >= x2 + w2)) {
            return true;
        }
        return false;
    }

    testIntersecty(y1, y2, h1, h2) {
        if ((y1 >= y2 && y1 <= (y2 + h2)) || (y1 + h1 >= y2 && y1 + h1 <= (y2 + h2)) || (y1 <= y2 && y1 + h1 >= y2 + h2)) {
            return true;
        }
        return false;
    }

    doesExist(tab, val) {
        for (let i = 0; i < tab.length; i++) {
            if (val === tab[i]) {
                return true;
            }
        }
        return false;
    }

    genNew(bb, wp1, wp2, hp1, hp2) {
        this.l = [];
        this.r = [];
        this.drawtree = false;
        this.drawd = false;
        this.start = false;
        this.points = [];
        this.edges = [];
        this.testEdges = [];
        this.testPts = [];
        this.time = 0;
        let ctr = 0;
        while (ctr !== bb) {
            this.t = this.gen(wp1, wp2, hp1, hp2);
            if (this.t != null) {
                this.r.push([this.t[0], this.t[1], this.t[2], this.t[3]]);
                ctr++;
            }
        }

        for (let j = 0; j < this.r.length; j++) {
            this.points.push([this.r[j][0] + (this.r[j][2] / 2), this.r[j][1] + (this.r[j][3] / 2)]);
        }

        const triangles = Delaunay.triangulate(this.points);
        for (let i = 0; i < triangles.length; i += 3) {
            this.edges.push([
                this.points[triangles[i]][0],
                this.points[triangles[i]][1], this.points[triangles[i + 1]][0],
                this.points[triangles[i + 1]][1]
            ]);
            this.edges.push([
                this.points[triangles[i + 1]][0],
                this.points[triangles[i + 1]][1],
                this.points[triangles[i + 2]][0],
                this.points[triangles[i + 2]][1]
            ]);
            this.edges.push([
                this.points[triangles[i + 2]][0],
                this.points[triangles[i + 2]][1],
                this.points[triangles[i]][0],
                this.points[triangles[i]][1]
            ]);
        }
        this.tree = [];
        this.addTree = [];
        this.tree = this.createTree(this.points, this.edges);
        this.temp = this.r;
        this.draw();
    }

    clear() {
        const ctx: CanvasRenderingContext2D = this.canvasRef.nativeElement.getContext('2d');
        ctx.clearRect(0, 0, 300, 200);
    }

    redraw(numBoxes, wp1, wp2, hp1, hp2) {
        this.genNew(numBoxes, wp1, wp2, hp1, hp2);
    }

    draw() {
        this.time += .1;
        const ctx: CanvasRenderingContext2D = this.canvasRef.nativeElement.getContext('2d');
        ctx.canvas.width = 300;
        ctx.canvas.height = 200;
        ctx.fillStyle = this.color;
        ctx.fillRect(0, 0, 300, 200);
        ctx.fillStyle = this.boxColor;
        for (let i = 0; i < this.tree.length; i++) {
            if (this.time > 5 && this.time < 10) {
                ctx.beginPath();
                ctx.moveTo(this.tree[i][0], this.tree[i][1]);
                ctx.lineTo(this.tree[i][2], this.tree[i][3]);
                ctx.stroke();
            }
            if (this.time > 10) {
                ctx.beginPath();
                ctx.moveTo(this.tree[i][2], this.tree[i][1]);
                ctx.lineTo(this.tree[i][2], this.tree[i][3]);
                ctx.stroke();
                ctx.moveTo(this.tree[i][0], this.tree[i][1]);
                ctx.lineTo(this.tree[i][2], this.tree[i][1]);
                ctx.stroke();
            }
        }
        for (let j = 0; j < this.r.length; j++) {
            if (this.r[j][0] != null) {
                ctx.fillRect(this.r[j][0], this.r[j][1], this.r[j][2], this.r[j][3]);
            }
        }
        if (this.time < 11) {
            requestAnimationFrame(this.draw.bind(this));
        }
    }

    dungeon_boxes_refresh() {
        this.time = 0;
        this.clear();
        this.redraw(20, 10, 70, 10, 70);
    }
}
