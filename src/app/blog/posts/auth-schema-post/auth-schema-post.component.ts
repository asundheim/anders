import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-schema-post',
  templateUrl: './auth-schema-post.component.html'
})
export class AuthSchemaPostComponent implements OnInit {

  title: string;
  date: string;

  constructor() { }

  ngOnInit() {
    this.title = "Creating an Authorization Schema that's *good enough*";
    this.date = "August 6, 2019";
  }

}
