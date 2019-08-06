import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flutter-1',
  templateUrl: './flutter-1.component.html',
  styleUrls: ['./flutter-1.component.scss']
})
export class Flutter1Component implements OnInit {
  title: string;
  date: string;

  constructor() { }

  ngOnInit() {
    this.title = "Building a QR entry-ticket system using Flutter: Part 1";
    this.date = "August 1, 2019";
  }

}
