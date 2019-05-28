/* angular */
import { Component, OnInit } from '@angular/core';

/* services */
import { APIService } from './api.service';
import { TestApp_1Advert } from './gql/types';

/* config */
import { environment } from '../environments/environment';


@Component({
  selector: 'app-custom-page',
  templateUrl: './custom-page.component.html',
  styleUrls: ['./custom-page.component.scss']
})
export class CustomPageComponent implements OnInit {
  data: TestApp_1Advert[];
  images: string[];
  apiBase = environment.apiBase;

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.apiService.snippets().subscribe((data) => {
      this.data = data;
    });

    this.apiService.pageDetails('/test').subscribe((data) =>{
      this.images = data.custom.filter(x => x.__typename == 'Test_app_2CustomBlock2')[0].fieldImageList.map(x => x.urlLink);
    });
  }

}
