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


@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private apollo: Apollo) {}

  route(url: string): Observable<any> {
    return this.apollo.query<PageTypeQuery.Query>({
      query: PageQuery.PageTypeQuery,
      variables: { url: url },
    }).pipe(
      map(result => result.data.page )
    );
  }

  pageDetails(url: string): Observable<any> {
    const variables = { url: url, id: 1 };
    return this.apollo.query<PageDetailsQuery.Query>({
      query: PageQuery.PageDetailsQuery,
      variables: { url: url },
    }).pipe(
      map((result: any) => result.data.page )
    );
  }
}

