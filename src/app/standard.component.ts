/* angular */
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-standard-component',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.scss']
})
export class StandardComponent implements OnInit {
  url: string;
  data: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.url = this.route.snapshot.data.url;
    this.data = this.route.snapshot.data.api;
  }
}
