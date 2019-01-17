/* angular */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* guards */
import { LoadAPIGuard, NoMatchComponent } from './app.routing.resolver';

/* components */
import { CustomPageComponent } from './custom-page.component';

/* routes */
const routes: Routes = [
  { path: 'custom', component: CustomPageComponent },
  { path: '**', component: NoMatchComponent, canActivate: [ LoadAPIGuard ] },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
