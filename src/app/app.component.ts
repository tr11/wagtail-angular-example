/* angular */
import { Component } from '@angular/core';

/* apollo */
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { Apollo } from 'apollo-angular';

/* config */
import {environment} from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wagtail-angular-example';

  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    const fragmentMatcher = new IntrospectionFragmentMatcher({
      introspectionQueryResultData: {
        __schema: {
          types: []
        }
      }
    });

    apollo.create({
      link: httpLink.create({ uri: environment.api }),
      cache: new InMemoryCache({ fragmentMatcher }),
    });
  }

}
