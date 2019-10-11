import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HighlightService } from '../../services/highlight.service';
import { BlogPostComponent } from '../../blogpost.component';

@Component({
  selector: 'app-auth-schema-post',
  templateUrl: './auth-schema-post.component.html'
})
export class AuthSchemaPostComponent extends BlogPostComponent implements OnInit {

  constructor(public highlightService: HighlightService) {
    super(highlightService);
  }

  ngOnInit() {
    this.title = 'Creating an Authorization Schema that\'s *good enough*';
    this.date = 'August 6, 2019';
  }
}
