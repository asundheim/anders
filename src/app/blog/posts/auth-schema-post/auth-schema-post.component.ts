import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HighlightService } from '../../services/highlight.service';

@Component({
  selector: 'app-auth-schema-post',
  templateUrl: './auth-schema-post.component.html'
})
export class AuthSchemaPostComponent implements OnInit, AfterViewChecked {

  title: string;
  date: string;
  highlighted: boolean = false;

  constructor(private highlightService: HighlightService) { }

  ngOnInit() {
    this.title = "Creating an Authorization Schema that's *good enough*";
    this.date = "August 6, 2019";
  }

  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }
}
