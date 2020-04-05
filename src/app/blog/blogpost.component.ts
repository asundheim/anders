import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HighlightService } from './services/highlight.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blogpost',
  template: ''
})
export class BlogPostComponent implements OnInit, AfterViewChecked {

  title: string;
  date: string;
  highlighted = false;

  constructor(
    public titleService: Title,
    public highlightService?: HighlightService
  ) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.titleService.setTitle(this.title);
    if (this.highlightService && !this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

}
