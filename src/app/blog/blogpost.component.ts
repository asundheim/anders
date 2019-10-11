import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HighlightService } from './services/highlight.service';

@Component({
  selector: 'app-blogpost',
  template: ''
})
export class BlogPostComponent implements OnInit, AfterViewChecked {

  title: string;
  date: string;
  highlighted = false;

  constructor(public highlightService?: HighlightService) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    if (this.highlightService && !this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

}
