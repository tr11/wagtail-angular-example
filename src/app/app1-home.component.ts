/* angular */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/* types */
import { TestApp_1HomePage } from './gql/types';


@Component({
  selector: 'app-app1-home',
  templateUrl: './app1-home.component.html',
  styleUrls: ['./app1-home.component.scss']
})
export class App1HomeComponent implements OnInit {
  url: string;
  data: TestApp_1HomePage;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.url = this.route.snapshot.data.url;
    this.data = this.route.snapshot.data.api;
  }
}
