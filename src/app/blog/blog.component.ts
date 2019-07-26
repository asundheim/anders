import { Component, OnInit } from '@angular/core';
import { IBlogPost } from 'src/interfaces/IBlogPost';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts = [
    {
      title: "How Google Maps could solve traffic",
      link: "maps"
    }
  ] as IBlogPost[]
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }
}
