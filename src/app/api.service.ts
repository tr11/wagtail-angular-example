/* angular */
import { Injectable } from '@angular/core';

/* rxjs */
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/* graphql */
import {Apollo} from 'apollo-angular';

/* queries */
const PageQuery = require('graphql-tag/loader!./gql/pages.graphql');
import { PageTypeQuery, PageDetailsQuery } from './gql/types';

const SnippetsQuery = require('graphql-tag/loader!./gql/snippets.graphql');
import { TestApp_2Advert } from './gql/types';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private apollo: Apollo) {}

  /* page related queries */
  route(url: string): Observable<any> {
    return this.apollo.query<PageTypeQuery.Query>({
      query: PageQuery.PageTypeQuery,
      variables: { url: url },
    }).pipe(
      map(result => result.data.page )
    );
  }

  pageDetails(url: string): Observable<any> {
    const variables = { url: url };
    return this.apollo.query<PageDetailsQuery.Query>({
      query: PageQuery.PageDetailsQuery,
      variables: variables,
    }).pipe(
      map((result: any) => result.data.page )
    );
  }

  /* other queries */
  snippets(): Observable<any> {
    return this.apollo.query<TestApp_2Advert[]>({
      query: SnippetsQuery.AdvertsQuery,
    }).pipe(
      map((result: any) => result.data.snippets )
    );

  }
}

