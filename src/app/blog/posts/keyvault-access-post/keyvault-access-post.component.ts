import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HighlightService } from '../../services/highlight.service';

@Component({
  selector: 'app-keyvault-access-post',
  templateUrl: './keyvault-access-post.component.html'
})
export class KeyvaultAccessPostComponent implements OnInit, AfterViewChecked {

  title: string;
  date: string;
  highlighted: boolean = false;

  constructor(private highlightService: HighlightService) { }

  ngOnInit() {
    this.title = "Conditional Access Policies via ARM Template for Azure Keyvault";
    this.date = "August 9, 2019";
  }
  
  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

}
