import { Component, OnInit } from '@angular/core';
import { BlogPostComponent } from '../../blogpost.component';
import { HighlightService } from '../../services/highlight.service';

@Component({
  selector: 'app-url-shortener-post',
  templateUrl: './url-shortener-post.component.html'
})
export class UrlShortenerPostComponent extends BlogPostComponent implements OnInit {

  constructor(public highlightService: HighlightService) {
    super(highlightService);
  }

  ngOnInit() {
    this.title = 'How to Design a URL Shortener';
    this.date = 'August 13 2019';
  }

}
