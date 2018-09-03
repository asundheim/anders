(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class = \"about\">\n  <div class = \"about-text\">\n      Student at UW-Madison\n  </div>\n  <div class = \"about-text\">\n      Find me online!\n  </div>\n  <br>\n  <i class = \"fab fa-github fa-3x ico\" (click) = \"goTo('https://github.com/DarthEvandar')\"></i>\n  <i class = \"fab fa-linkedin fa-3x ico\" (click) = \"goTo('https://linkedin.com/in/anders-sundheim')\"></i>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ico {\n  margin-left: 1em;\n  margin-right: 1em;\n  cursor: pointer; }\n\n.about {\n  text-align: center;\n  position: relative; }\n\n.about-text {\n  margin: 1em;\n  color: dimgray; }\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.goTo = function (location) {
        window.open(location);
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/anders-container/anders-container.component.html":
/*!******************************************************************!*\
  !*** ./src/app/anders-container/anders-container.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-card [title]=\"module.name\" [style] = \"{width: '400px'}\">\r\n    <p-header class = \"card-header\">\r\n        <fa name=\"info-circle\" size=\"lg\" (click)=\"goToInfo(module.repoLink)\"></fa>\r\n    </p-header>\r\n    <div *ngIf = \"module.images && module.images.length > 1\">\r\n        <p-galleria [images] = \"module.images\"\r\n        [showCaption] = \"false\"\r\n        [autoPlay] = \"false\"\r\n        [showFilmstrip] = \"false\"\r\n        [panelWidth] = \"300\"\r\n        [panelHeight] = \"module.imageHeight\">\r\n        </p-galleria>\r\n    </div>\r\n    <div *ngIf = \"module.image\">\r\n        <img [src] = \"module.image\">\r\n    </div>\r\n    <div *ngIf = \"module.tree\">\r\n        <app-tree #tree (click)=\"newTree()\"></app-tree>\r\n    </div>\r\n    <div *ngIf = \"module.dungeonBoxes\">\r\n        <app-dungeon-boxes #dungeonBoxes (click)=\"newBoxes()\"></app-dungeon-boxes>\r\n    </div>\r\n    \r\n    <p-footer>\r\n        <app-label-container [labels] = \"module.labels\"></app-label-container>\r\n        <div *ngIf = \"module.interact\" class = \"interact\">\r\n            <fa name=\"desktop\" size = \"lg\" (click)=\"goToInfo(module.interact)\"></fa>\r\n        </div>\r\n    </p-footer>\r\n</p-card>"

/***/ }),

/***/ "./src/app/anders-container/anders-container.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/anders-container/anders-container.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-tree, app-dungeon-boxes, fa {\n  cursor: pointer; }\n\n.card-header {\n  float: right;\n  margin-top: 1em;\n  margin-right: 1em; }\n\n.interact {\n  display: inline-block;\n  margin: 1em; }\n"

/***/ }),

/***/ "./src/app/anders-container/anders-container.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/anders-container/anders-container.component.ts ***!
  \****************************************************************/
/*! exports provided: AndersContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AndersContainerComponent", function() { return AndersContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tree_tree_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree/tree.component */ "./src/app/anders-container/tree/tree.component.ts");
/* harmony import */ var _dungeon_boxes_dungeon_boxes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dungeon-boxes/dungeon-boxes.component */ "./src/app/anders-container/dungeon-boxes/dungeon-boxes.component.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AndersContainerComponent = /** @class */ (function () {
    function AndersContainerComponent() {
        this.faInfoCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faInfoCircle"];
    }
    AndersContainerComponent.prototype.newTree = function () {
        this.tree.treeGenerate();
        this.tree.treeDraw();
    };
    AndersContainerComponent.prototype.newBoxes = function () {
        this.dungeonBoxes.genNew(20, 10, 70, 10, 70);
    };
    AndersContainerComponent.prototype.goToInfo = function (repoLink) {
        window.open(repoLink);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tree'),
        __metadata("design:type", _tree_tree_component__WEBPACK_IMPORTED_MODULE_1__["TreeComponent"])
    ], AndersContainerComponent.prototype, "tree", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dungeonBoxes'),
        __metadata("design:type", _dungeon_boxes_dungeon_boxes_component__WEBPACK_IMPORTED_MODULE_2__["DungeonBoxesComponent"])
    ], AndersContainerComponent.prototype, "dungeonBoxes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AndersContainerComponent.prototype, "module", void 0);
    AndersContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-anders-container',
            template: __webpack_require__(/*! ./anders-container.component.html */ "./src/app/anders-container/anders-container.component.html"),
            styles: [__webpack_require__(/*! ./anders-container.component.scss */ "./src/app/anders-container/anders-container.component.scss")]
        })
    ], AndersContainerComponent);
    return AndersContainerComponent;
}());



/***/ }),

/***/ "./src/app/anders-container/dungeon-boxes/dungeon-boxes.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/anders-container/dungeon-boxes/dungeon-boxes.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas #dungeonBoxCanvas width=\"300\" height=\"200\"></canvas>"

/***/ }),

/***/ "./src/app/anders-container/dungeon-boxes/dungeon-boxes.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/anders-container/dungeon-boxes/dungeon-boxes.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/anders-container/dungeon-boxes/dungeon-boxes.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/anders-container/dungeon-boxes/dungeon-boxes.component.ts ***!
  \***************************************************************************/
/*! exports provided: DungeonBoxesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DungeonBoxesComponent", function() { return DungeonBoxesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var delaunay_fast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! delaunay-fast */ "./node_modules/delaunay-fast/delaunay.js");
/* harmony import */ var delaunay_fast__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(delaunay_fast__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DungeonBoxesComponent = /** @class */ (function () {
    function DungeonBoxesComponent() {
        this.upperWindow = 50;
        this.lowerWindow = 10;
        this.color = 'rgba(245, 245, 245 , .2)';
        this.boxColor = 'rgb(0,0,0)';
        this.l = [];
        this.r = [];
        this.drawtree = false;
        this.drawd = false;
        this.start = false;
        this.points = [];
        this.edges = [];
        this.testEdges = [];
        this.testPts = [];
    }
    DungeonBoxesComponent.prototype.ngOnInit = function () {
        this.genNew(20, 10, 70, 10, 70);
    };
    DungeonBoxesComponent.prototype.same = function (x1, y1, x2, y2, edg) {
        for (var i = 1; i < edg.length; i++) {
            if ((x1 === edg[i][0] && y1 === edg[i][1] && x2 === edg[i][2] && y2 === edg[i][3]) ||
                (x2 === edg[i][0] && y2 === edg[i][1] && x1 === edg[i][2] && y1 === edg[i][3])) {
                return true;
            }
        }
        return false;
    };
    DungeonBoxesComponent.prototype.dist = function (x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2));
    };
    DungeonBoxesComponent.prototype.createTree = function (pointss, edgess) {
        var verticess = [pointss[0]];
        var treee = [];
        while (verticess.length !== pointss.length) {
            var ln = 10000;
            var temp1 = null;
            var temp2 = null;
            for (var i = 0; i < verticess.length; i++) {
                for (var p = 0; p < pointss.length; p++) {
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
    };
    DungeonBoxesComponent.prototype.rando = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    DungeonBoxesComponent.prototype.gen = function (widthParam1, widthParam2, heightParam1, heightParam2) {
        var x1 = this.rando(0, 300 - 30);
        var y1 = this.rando(0, 200 - 30);
        var w1 = this.rando(widthParam1, 50);
        var h1 = this.rando(heightParam1, 50);
        var fail = false;
        for (var i = 0; i < this.r.length; i++) {
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
    };
    DungeonBoxesComponent.prototype.testIntersectx = function (x1, x2, w1, w2) {
        if ((x1 >= x2 && x1 <= (x2 + w2)) || (x1 + w1 >= x2 && x1 + w1 <= (x2 + w2)) || (x1 <= x2 && x1 + w1 >= x2 + w2)) {
            return true;
        }
        return false;
    };
    DungeonBoxesComponent.prototype.testIntersecty = function (y1, y2, h1, h2) {
        if ((y1 >= y2 && y1 <= (y2 + h2)) || (y1 + h1 >= y2 && y1 + h1 <= (y2 + h2)) || (y1 <= y2 && y1 + h1 >= y2 + h2)) {
            return true;
        }
        return false;
    };
    DungeonBoxesComponent.prototype.doesExist = function (tab, val) {
        for (var i = 0; i < tab.length; i++) {
            if (val === tab[i]) {
                return true;
            }
        }
        return false;
    };
    DungeonBoxesComponent.prototype.genNew = function (bb, wp1, wp2, hp1, hp2) {
        this.l = [];
        this.r = [];
        this.drawtree = false;
        this.drawd = false;
        this.start = false;
        this.points = [];
        this.edges = [];
        this.testEdges = [];
        this.testPts = [];
        var ctr = 0;
        while (ctr !== bb) {
            this.t = this.gen(wp1, wp2, hp1, hp2);
            if (this.t != null) {
                this.r.push([this.t[0], this.t[1], this.t[2], this.t[3]]);
                ctr++;
            }
        }
        for (var j = 0; j < this.r.length; j++) {
            this.points.push([this.r[j][0] + (this.r[j][2] / 2), this.r[j][1] + (this.r[j][3] / 2)]);
        }
        var triangles = delaunay_fast__WEBPACK_IMPORTED_MODULE_1__["triangulate"](this.points);
        for (var i = 0; i < triangles.length; i += 3) {
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
    };
    DungeonBoxesComponent.prototype.clear = function () {
        var ctx = this.canvasRef.nativeElement.getContext('2d');
        ctx.clearRect(0, 0, 300, 200);
    };
    DungeonBoxesComponent.prototype.redraw = function (numBoxes, wp1, wp2, hp1, hp2) {
        this.genNew(numBoxes, wp1, wp2, hp1, hp2);
    };
    DungeonBoxesComponent.prototype.draw = function () {
        var ctx = this.canvasRef.nativeElement.getContext('2d');
        ctx.canvas.width = 300;
        ctx.canvas.height = 200;
        ctx.fillStyle = this.color;
        ctx.fillRect(0, 0, 300, 200);
        ctx.fillStyle = this.boxColor;
        for (var i = 0; i < this.tree.length; i++) {
            ctx.beginPath();
            ctx.moveTo(this.tree[i][2], this.tree[i][1]);
            ctx.lineTo(this.tree[i][2], this.tree[i][3]);
            ctx.stroke();
            ctx.moveTo(this.tree[i][0], this.tree[i][1]);
            ctx.lineTo(this.tree[i][2], this.tree[i][1]);
            ctx.stroke();
        }
        for (var j = 0; j < this.r.length; j++) {
            if (this.r[j][0] != null) {
                ctx.fillRect(this.r[j][0], this.r[j][1], this.r[j][2], this.r[j][3]);
            }
        }
    };
    DungeonBoxesComponent.prototype.dungeon_boxes_refresh = function () {
        this.clear();
        this.redraw(20, 10, 70, 10, 70);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dungeonBoxCanvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DungeonBoxesComponent.prototype, "canvasRef", void 0);
    DungeonBoxesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dungeon-boxes',
            template: __webpack_require__(/*! ./dungeon-boxes.component.html */ "./src/app/anders-container/dungeon-boxes/dungeon-boxes.component.html"),
            styles: [__webpack_require__(/*! ./dungeon-boxes.component.scss */ "./src/app/anders-container/dungeon-boxes/dungeon-boxes.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DungeonBoxesComponent);
    return DungeonBoxesComponent;
}());



/***/ }),

/***/ "./src/app/anders-container/label-container/label-container.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/anders-container/label-container/label-container.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"label\" *ngFor = \"let label of labels\"  \r\n    [style.background-color] = \"label.color\"\r\n    [style.border-color] = \"label.color\">\r\n    {{ label.name }}\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/anders-container/label-container/label-container.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/anders-container/label-container/label-container.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label {\n  display: inline-block;\n  border-left: 6px solid black;\n  border-right: 6px solid black;\n  border-bottom: 1px solid black;\n  border-top: 1px solid black;\n  border-radius: 6px;\n  margin: 1em;\n  font-size: 12px;\n  color: #EEEEEE; }\n"

/***/ }),

/***/ "./src/app/anders-container/label-container/label-container.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/anders-container/label-container/label-container.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LabelContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelContainerComponent", function() { return LabelContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LabelContainerComponent = /** @class */ (function () {
    function LabelContainerComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], LabelContainerComponent.prototype, "labels", void 0);
    LabelContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-label-container',
            template: __webpack_require__(/*! ./label-container.component.html */ "./src/app/anders-container/label-container/label-container.component.html"),
            styles: [__webpack_require__(/*! ./label-container.component.scss */ "./src/app/anders-container/label-container/label-container.component.scss")]
        })
    ], LabelContainerComponent);
    return LabelContainerComponent;
}());



/***/ }),

/***/ "./src/app/anders-container/tree/tree.component.html":
/*!***********************************************************!*\
  !*** ./src/app/anders-container/tree/tree.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas #treeCanvas width=\"300\" height=\"200\"></canvas>\n"

/***/ }),

/***/ "./src/app/anders-container/tree/tree.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/anders-container/tree/tree.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/anders-container/tree/tree.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/anders-container/tree/tree.component.ts ***!
  \*********************************************************/
/*! exports provided: TreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeComponent", function() { return TreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TreeComponent = /** @class */ (function () {
    function TreeComponent() {
        this.iters = 9;
        this.lines = [[150, 200, 120, 130]];
        this.nextLines = [[150, 200, 120, 130]];
        this.tempLines = [];
        this.l = 40;
        this.leafDepth = 2;
        this.treeColor = '#ffffff';
        this.leafColor = '#3c763d';
        this.branchColor = '#000000';
    }
    TreeComponent.prototype.ngOnInit = function () {
        this.treeGenerate();
        this.treeDraw();
    };
    TreeComponent.prototype.treeDraw = function () {
        var ctx = this.canvasRef.nativeElement.getContext('2d');
        ctx.fillStyle = this.treeColor;
        ctx.fillRect(0, 0, 300, 200);
        ctx.strokeStyle = this.branchColor;
        var t = 1;
        var width = 8;
        ctx.lineWidth = width;
        for (var i = 0; i < this.lines.length; i++) {
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
    };
    TreeComponent.prototype.getRandom = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    TreeComponent.prototype.treeGenerate = function () {
        this.lines = [[150, 200, 150, 140]];
        this.nextLines = [[150, 200, 150, 140]];
        this.tempLines = [];
        this.l = 40;
        for (var i = 0; i < this.iters; i++) {
            for (var j = 0; j < this.nextLines.length; j++) {
                var randomAngle1 = this.getRandom(Math.PI / 6, Math.PI / 3);
                var randomAngle2 = this.getRandom(Math.PI / 6, Math.PI / 3);
                var angle1 = void 0;
                var angle2 = void 0;
                if ((this.nextLines[j][0] > this.nextLines[j][2] &&
                    this.nextLines[j][1] > this.nextLines[j][3]) ||
                    (this.nextLines[j][0] > this.nextLines[j][2] &&
                        this.nextLines[j][1] < this.nextLines[j][3])) {
                    angle1 = ((Math.PI / 2) + ((Math.PI / 2) + Math.atan((this.nextLines[j][3] -
                        this.nextLines[j][1]) / (this.nextLines[j][2] -
                        this.nextLines[j][0])))) - randomAngle1;
                    angle2 = ((Math.PI / 2) + ((Math.PI / 2) + Math.atan((this.nextLines[j][3] -
                        this.nextLines[j][1]) / (this.nextLines[j][2] -
                        this.nextLines[j][0])))) + randomAngle2;
                }
                else {
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
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('treeCanvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TreeComponent.prototype, "canvasRef", void 0);
    TreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tree',
            template: __webpack_require__(/*! ./tree.component.html */ "./src/app/anders-container/tree/tree.component.html"),
            styles: [__webpack_require__(/*! ./tree.component.scss */ "./src/app/anders-container/tree/tree.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TreeComponent);
    return TreeComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-constellations #constellations></app-constellations>\r\n<div class = \"header\">\r\n    <div class = \"header-name\">\r\n        <div class = \"header-text\"routerLink = \"/anders\">\r\n            Anders Sundheim\r\n        </div>\r\n    </div>\r\n    <app-seperator></app-seperator>\r\n    <div class=\"header-sub\">\r\n        <a routerLink=\"/about\" routerLinkActive=\"active\" style=\"padding-right:1%\">\r\n            About\r\n        </a>\r\n    </div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n<footer class = \"foot\">\r\n    <div class = \"foot-content\">\r\n        Made by Anders Sundheim using \r\n        <i class=\"fas fa-coffee\"></i>\r\n         and \r\n        <i class=\"fab fa-angular\"></i>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-anders-container {\n  text-align: center; }\n\n.header {\n  position: relative; }\n\n.header-name, .header-sub {\n  text-align: center;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: 500; }\n\n.header-name {\n  font-size: 72px; }\n\n.header-name .header-text {\n    display: inline-block;\n    cursor: pointer; }\n\n.header-sub {\n  font-size: 24px; }\n\n.foot {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100px;\n  background-color: #cccccc;\n  bottom: 0;\n  position: absolute;\n  width: 100%;\n  bottom: 0; }\n\n.foot-content {\n  align-self: flex-end;\n  margin-bottom: .5em;\n  color: dimgray; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constellations_constellations_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constellations/constellations.component */ "./src/app/constellations/constellations.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.constellationsRef.generatePoints();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('constellations'),
        __metadata("design:type", _constellations_constellations_component__WEBPACK_IMPORTED_MODULE_1__["ConstellationsComponent"])
    ], AppComponent.prototype, "constellationsRef", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/galleria */ "./node_modules/primeng/galleria.js");
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_galleria__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _anders_container_anders_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./anders-container/anders-container.component */ "./src/app/anders-container/anders-container.component.ts");
/* harmony import */ var _anders_container_label_container_label_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./anders-container/label-container/label-container.component */ "./src/app/anders-container/label-container/label-container.component.ts");
/* harmony import */ var _anders_container_tree_tree_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./anders-container/tree/tree.component */ "./src/app/anders-container/tree/tree.component.ts");
/* harmony import */ var _anders_container_dungeon_boxes_dungeon_boxes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./anders-container/dungeon-boxes/dungeon-boxes.component */ "./src/app/anders-container/dungeon-boxes/dungeon-boxes.component.ts");
/* harmony import */ var _seperator_seperator_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./seperator/seperator.component */ "./src/app/seperator/seperator.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _constellations_constellations_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./constellations/constellations.component */ "./src/app/constellations/constellations.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"]
    },
    {
        path: '',
        redirectTo: '/anders',
        pathMatch: 'full'
    },
    {
        path: 'anders',
        component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_14__["ProjectsComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _anders_container_anders_container_component__WEBPACK_IMPORTED_MODULE_6__["AndersContainerComponent"],
                _anders_container_label_container_label_container_component__WEBPACK_IMPORTED_MODULE_7__["LabelContainerComponent"],
                _anders_container_tree_tree_component__WEBPACK_IMPORTED_MODULE_8__["TreeComponent"],
                _anders_container_dungeon_boxes_dungeon_boxes_component__WEBPACK_IMPORTED_MODULE_9__["DungeonBoxesComponent"],
                _seperator_seperator_component__WEBPACK_IMPORTED_MODULE_10__["SeperatorComponent"],
                _constellations_constellations_component__WEBPACK_IMPORTED_MODULE_15__["ConstellationsComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_14__["ProjectsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_2__["TableModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["CardModule"],
                primeng_galleria__WEBPACK_IMPORTED_MODULE_4__["GalleriaModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_11__["AngularFontAwesomeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/constellations/constellations.component.html":
/*!**************************************************************!*\
  !*** ./src/app/constellations/constellations.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas [width]=\"getWidth()\"\n        [height] = \"getHeight()\"\n        #connectyLines\n        class = \"background-canvas\">\n</canvas>\n"

/***/ }),

/***/ "./src/app/constellations/constellations.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/constellations/constellations.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background-canvas {\n  position: fixed; }\n"

/***/ }),

/***/ "./src/app/constellations/constellations.component.ts":
/*!************************************************************!*\
  !*** ./src/app/constellations/constellations.component.ts ***!
  \************************************************************/
/*! exports provided: ConstellationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstellationsComponent", function() { return ConstellationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConstellationsComponent = /** @class */ (function () {
    function ConstellationsComponent() {
        this.points = [];
    }
    ConstellationsComponent.prototype.onMouseMove = function (e) {
        var ctx = this.canvasRef.nativeElement.getContext('2d');
        ctx.strokeStyle = 'rgba(163, 163, 163, 0.3)';
        ctx.fillStyle = 'rgba(163, 163, 163, 0.3)';
        ctx.clearRect(0, 0, this.getWidth(), this.getHeight());
        var xIndex = Math.floor((e.clientX / this.getWidth()) * 15);
        var yIndex = Math.floor(e.clientY / (this.getHeight()) * 15);
        this.points[xIndex][yIndex]
            .forEach(function (p) {
            ctx.beginPath();
            ctx.moveTo(e.clientX, e.clientY);
            ctx.lineTo(p.x, p.y);
            ctx.stroke();
        });
        for (var i = (xIndex !== 0 ? -1 : 0); i <= (xIndex !== 15 ? 1 : 0); i++) {
            for (var j = (yIndex !== 0 ? -1 : 0); j <= (yIndex !== 15 ? 1 : 0); j++) {
                this.points[xIndex + i][yIndex + j].forEach(function (p) {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, 2, 0, 2 * Math.PI);
                    ctx.fill();
                });
            }
        }
    };
    ConstellationsComponent.prototype.getWidth = function () {
        return window.innerWidth;
    };
    ConstellationsComponent.prototype.getHeight = function () {
        return window.innerHeight;
    };
    ConstellationsComponent.prototype.getRandom = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    ConstellationsComponent.prototype.generatePoints = function () {
        for (var i = 0; i < this.getWidth(); i += this.getWidth() / 15) {
            var tempCol = [];
            for (var j = 0; j < this.getHeight(); j += this.getHeight() / 15) {
                var tempRow = [];
                for (var k = 0; k < 6; k++) {
                    tempRow.push({
                        x: this.getRandom(i, i + this.getWidth() / 15),
                        y: this.getRandom(j, j + this.getHeight() / 15)
                    });
                }
                tempCol.push(tempRow);
            }
            this.points.push(tempCol);
        }
    };
    ConstellationsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('connectyLines'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ConstellationsComponent.prototype, "canvasRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:mousemove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ConstellationsComponent.prototype, "onMouseMove", null);
    ConstellationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-constellations',
            template: __webpack_require__(/*! ./constellations.component.html */ "./src/app/constellations/constellations.component.html"),
            styles: [__webpack_require__(/*! ./constellations.component.scss */ "./src/app/constellations/constellations.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConstellationsComponent);
    return ConstellationsComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style = \"height: 100%; padding-bottom: 100px;\">\n    <p-table [value] = \"modules\" #tab>\n        <ng-template pTemplate = \"body\" let-modules>\n            <tr>\n                <td>\n                    <app-anders-container [module] = \"modules.module1\">\n    \n                    </app-anders-container>\n                </td>\n                <td>\n                    <app-anders-container [module] = \"modules.module2\">\n    \n                    </app-anders-container>\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n"

/***/ }),

/***/ "./src/app/projects/projects.component.scss":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enums_label_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/label-colors */ "./src/enums/label-colors.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
        this.modules = [
            {
                module1: {
                    name: 'Dungeon Boxes',
                    labels: [
                        {
                            name: 'JS',
                            color: _enums_label_colors__WEBPACK_IMPORTED_MODULE_1__["LabelColor"].Orange
                        },
                        {
                            name: 'HTML',
                            color: _enums_label_colors__WEBPACK_IMPORTED_MODULE_1__["LabelColor"].Blue
                        },
                        {
                            name: 'CSS',
                            color: _enums_label_colors__WEBPACK_IMPORTED_MODULE_1__["LabelColor"].LightBlue
                        }
                    ],
                    dungeonBoxes: true,
                    repoLink: 'https://github.com/AndersSundheim/DungeonBoxes',
                    interact: 'https://darthevandar.github.io/DungeonBoxes/'
                },
                module2: {
                    name: 'Lounge for CS:GO',
                    image: 'assets/lounge_1.png',
                    labels: [
                        {
                            name: 'Java',
                            color: _enums_label_colors__WEBPACK_IMPORTED_MODULE_1__["LabelColor"].Orange
                        },
                        {
                            name: 'JS',
                            color: _enums_label_colors__WEBPACK_IMPORTED_MODULE_1__["LabelColor"].Orange
                        },
                        {
                            name: 'Android',
                            color: _enums_label_colors__WEBPACK_IMPORTED_MODULE_1__["LabelColor"].Green
                        }
                    ],
                    repoLink: 'https://github.com/DarthEvandar/LoungeforCSGO'
                }
            },
            {
                module1: {
                    name: 'Binary Trees',
                    labels: [
                        {
                            name: 'JS',
                            color: _enums_label_colors__WEBPACK_IMPORTED_MODULE_1__["LabelColor"].Orange
                        },
                        {
                            name: 'HTML',
                            color: _enums_label_colors__WEBPACK_IMPORTED_MODULE_1__["LabelColor"].Blue
                        },
                        {
                            name: 'CSS',
                            color: _enums_label_colors__WEBPACK_IMPORTED_MODULE_1__["LabelColor"].LightBlue
                        }
                    ],
                    tree: true,
                    repoLink: 'https://github.com/DarthEvandar/2dtree',
                    interact: 'http://darthevandar.github.io/2dtree'
                },
                module2: {
                    name: 'Place 3D',
                    images: [
                        { source: 'assets/place_1.png' },
                        { source: 'assets/place_2.png' },
                        { source: 'assets/place_3.png' }
                    ],
                    imageHeight: 180,
                    labels: [
                        {
                            name: 'JS',
                            color: _enums_label_colors__WEBPACK_IMPORTED_MODULE_1__["LabelColor"].Orange
                        },
                        {
                            name: 'OpenGL',
                            color: _enums_label_colors__WEBPACK_IMPORTED_MODULE_1__["LabelColor"].Blue
                        },
                        {
                            name: 'Python',
                            color: _enums_label_colors__WEBPACK_IMPORTED_MODULE_1__["LabelColor"].Green
                        },
                        {
                            name: 'Three.JS',
                            color: _enums_label_colors__WEBPACK_IMPORTED_MODULE_1__["LabelColor"].Red
                        }
                    ],
                    repoLink: 'https://github.com/Darthevandar/place3D',
                    interact: 'https://darthevandar.github.io/Place3D/'
                }
            },
            {
                module1: {
                    name: 'Constellations',
                    labels: [
                        {
                            name: 'Typescript',
                            color: _enums_label_colors__WEBPACK_IMPORTED_MODULE_1__["LabelColor"].Green
                        }
                    ],
                    image: 'assets/constellations_1.png',
                    repoLink: 'https://github.com/DarthEvandar/Darthevandar.github.io/tree/master/src/app/constellations'
                },
                module2: {
                    name: 'Perlin Circles',
                    labels: [
                        {
                            name: 'Javascript',
                            color: _enums_label_colors__WEBPACK_IMPORTED_MODULE_1__["LabelColor"].Orange
                        }
                    ],
                    image: 'assets/perlin_1.png',
                    repoLink: 'https://github.com/DarthEvandar/PerlinCircles',
                    interact: 'https://darthevandar.github.io/PerlinCircles/'
                }
            },
            {
                module1: {
                    name: 'Vector Terrain',
                    images: [
                        { source: 'assets/vector_1.png' },
                        { source: 'assets/vector_2.png' },
                        { source: 'assets/vector_3.png' }
                    ],
                    imageHeight: 270,
                    labels: [
                        {
                            name: 'Java',
                            color: _enums_label_colors__WEBPACK_IMPORTED_MODULE_1__["LabelColor"].Orange
                        },
                        {
                            name: 'OpenGL',
                            color: _enums_label_colors__WEBPACK_IMPORTED_MODULE_1__["LabelColor"].Blue
                        }
                    ],
                    repoLink: 'https://github.com/DarthEvandar/VectorTerrain'
                },
                module2: {
                    name: 'Lua MST',
                    images: [
                        { source: 'assets/mst_1.png' },
                        { source: 'assets/mst_2.png' }
                    ],
                    imageHeight: 265,
                    labels: [
                        {
                            name: 'Lua',
                            color: _enums_label_colors__WEBPACK_IMPORTED_MODULE_1__["LabelColor"].Blue
                        }
                    ],
                    repoLink: 'https://github.com/DarthEvandar/lua_minimum_spanning_tree'
                }
            },
            {
                module1: {
                    name: 'Hue Go Switch',
                    image: 'assets/go_switch_1.png',
                    labels: [
                        {
                            name: 'Node.JS',
                            color: _enums_label_colors__WEBPACK_IMPORTED_MODULE_1__["LabelColor"].Red
                        }
                    ],
                    repoLink: 'https://github.com/DarthEvandar/go-switch'
                },
                module2: {
                    name: 'Ingress_Java',
                    labels: [
                        {
                            name: 'Java',
                            color: _enums_label_colors__WEBPACK_IMPORTED_MODULE_1__["LabelColor"].Orange
                        },
                        {
                            name: 'Swing',
                            color: _enums_label_colors__WEBPACK_IMPORTED_MODULE_1__["LabelColor"].Orange
                        }
                    ],
                    image: 'assets/ingress_1.png',
                    repoLink: 'https://github.com/DarthEvandar/Ingress_Dev'
                }
            }
        ];
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/projects/projects.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/seperator/seperator.component.html":
/*!****************************************************!*\
  !*** ./src/app/seperator/seperator.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg width=\"100%\" height=\"50px\" viewBox=\"0 0 200 10\">\n  <line x1=\"0\" y1=\"5\" x2=\"200\" y2=\"5\" style=\"stroke: rgb(155, 144, 144);stroke-width:2;\"></line>\n  <polygon points=\"68,5 71,8 74,5 71, 2\" style = \"stroke:rgb(155,144,144);stroke-width:2\"></polygon>\n  <polygon points=\"126,5 129,8 132,5 129, 2\" style = \"stroke:rgb(155,144,144);stroke-width:2\"></polygon>\n</svg>"

/***/ }),

/***/ "./src/app/seperator/seperator.component.scss":
/*!****************************************************!*\
  !*** ./src/app/seperator/seperator.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/seperator/seperator.component.ts":
/*!**************************************************!*\
  !*** ./src/app/seperator/seperator.component.ts ***!
  \**************************************************/
/*! exports provided: SeperatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeperatorComponent", function() { return SeperatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SeperatorComponent = /** @class */ (function () {
    function SeperatorComponent() {
    }
    SeperatorComponent.prototype.ngOnInit = function () {
    };
    SeperatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-seperator',
            template: __webpack_require__(/*! ./seperator.component.html */ "./src/app/seperator/seperator.component.html"),
            styles: [__webpack_require__(/*! ./seperator.component.scss */ "./src/app/seperator/seperator.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SeperatorComponent);
    return SeperatorComponent;
}());



/***/ }),

/***/ "./src/enums/label-colors.ts":
/*!***********************************!*\
  !*** ./src/enums/label-colors.ts ***!
  \***********************************/
/*! exports provided: LabelColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelColor", function() { return LabelColor; });
var LabelColor;
(function (LabelColor) {
    LabelColor["Orange"] = "#f0ad4e";
    LabelColor["Blue"] = "#337ab7";
    LabelColor["Red"] = "#d9534f";
    LabelColor["Green"] = "#5cb85c";
    LabelColor["LightBlue"] = "#5bc0de";
})(LabelColor || (LabelColor = {}));


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Anders\Documents\GitHub\Darthevandar.github.io\anders\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map