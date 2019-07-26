import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps-post',
  templateUrl: './maps-post.component.html',
  styleUrls: ['./maps-post.component.scss']
})
export class MapsPostComponent implements OnInit {

  title: string;
  date: string;

  constructor() { }

  ngOnInit() {
    this.title = "How Google Maps could solve traffic";
    this.date = "July 26, 2019"
  }
}
