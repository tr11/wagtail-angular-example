/* angular */
import { Component, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, Router, RouterStateSnapshot } from '@angular/router';

/* rxjs */
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

/* services */
import { APIService } from './api.service';

/* components */
import { StandardComponent } from './standard.component';
import { App1HomeComponent } from './app1-home.component';


export const TYPES_MAP = {
  'Test_app_1HomePage': App1HomeComponent,
};


@Component({
  template: ``
}) export class NoMatchComponent { }


@Injectable({
  providedIn: 'root'
})
export class GraphQLResolver implements Resolve<any> {
  constructor(private apiService: APIService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.apiService.pageDetails(route.data.url);
  }
}


@Injectable()
export class LoadAPIGuard implements CanActivate  {
  constructor(private apiService: APIService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const url: string = state.url;
    this.apiService.route(url).pipe(
      map((x: {__typename: string, urlPath: string}) => {
        let componentType = TYPES_MAP[x.__typename];
        if (componentType === undefined) {
          console.warn(`Component Type ${x.__typename} doesn't exist`);
          componentType = StandardComponent;
        }
        const config = this.router.config;
        config.unshift({
          path: url.substr(1),
          component: componentType,
          resolve: {api: GraphQLResolver},
          data: { url: x.urlPath }
        });
        this.router.resetConfig(config);
      })
    ).subscribe( x => {
        this.router.navigateByUrl(url).then();
      },
      (err: any) => {
        if(url !== '' && url !== '/') {
          this.router.navigateByUrl('/').then();
        }
      }
    );
    return of(false);
  }
}
