/* angular */
import { Component, OnInit } from '@angular/core';

/* services */
import { APIService } from './api.service';
import { TestApp_2Advert } from './gql/types';


@Component({
  selector: 'app-custom-page',
  templateUrl: './custom-page.component.html',
  styleUrls: ['./custom-page.component.scss']
})
export class CustomPageComponent implements OnInit {
  data: TestApp_2Advert[];

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.apiService.snippets().subscribe((data) => {
      this.data = data;
    });
  }

}
