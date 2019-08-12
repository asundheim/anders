import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HighlightService } from '../../services/highlight.service';
import { BlogPostComponent } from '../../blogpost.component';

@Component({
  selector: 'app-keyvault-access-post',
  templateUrl: './keyvault-access-post.component.html'
})
export class KeyvaultAccessPostComponent extends BlogPostComponent implements OnInit {

  constructor(public highlightService: HighlightService) {
    super(highlightService);
  }

  ngOnInit() {
    this.title = "Conditional Access Policies via ARM Template for Azure Keyvault";
    this.date = "August 9, 2019";
  }
}
