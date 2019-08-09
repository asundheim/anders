import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyvault-access-post',
  templateUrl: './keyvault-access-post.component.html'
})
export class KeyvaultAccessPostComponent implements OnInit {

  title: string;
  date: string;

  constructor() { }

  ngOnInit() {
    this.title = "Conditional Access Policies via ARM Template for Azure Keyvault";
    this.date = "August 9, 2019";
  }

}
