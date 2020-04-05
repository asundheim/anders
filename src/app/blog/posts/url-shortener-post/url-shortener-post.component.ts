import { Component, OnInit } from '@angular/core';
import { BlogPostComponent } from '../../blogpost.component';
import { HighlightService } from '../../services/highlight.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-url-shortener-post',
  templateUrl: './url-shortener-post.component.html'
})
export class UrlShortenerPostComponent extends BlogPostComponent implements OnInit {

  constructor(public titleService: Title, public highlightService: HighlightService) {
    super(titleService, highlightService);
  }

  ngOnInit() {
    this.title = 'How to Design a URL Shortener';
    this.date = 'August 13 2019';
  }

}
