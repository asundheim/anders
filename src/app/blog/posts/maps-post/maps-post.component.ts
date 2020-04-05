import { Component, OnInit } from '@angular/core';
import { BlogPostComponent } from '../../blogpost.component';
import { HighlightService } from '../../services/highlight.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-maps-post',
  templateUrl: './maps-post.component.html'
})
export class MapsPostComponent extends BlogPostComponent implements OnInit {

  constructor(public titleService: Title) { super(titleService); }

  ngOnInit() {
    this.title = 'How Google Maps could solve traffic';
    this.date = 'July 26, 2019';
  }
}
