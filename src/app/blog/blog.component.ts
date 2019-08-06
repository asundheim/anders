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
    },
    {
      title: 'Building a QR entry-ticket system using Flutter: Part 1',
      link: 'flutterapp1'
    },
    {
      title: 'Creating an authorization schema that\'s *good enough*',
      link: 'authschema'
    }
  ] as IBlogPost[];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() { }
}
