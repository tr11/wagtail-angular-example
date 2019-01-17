/* angular */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

/* routing */
import { AppRoutingModule } from './app.routing.module';
import { LoadAPIGuard, NoMatchComponent } from './app.routing.resolver';

/* graphql */
import {HttpLinkModule} from 'apollo-angular-link-http';
import {ApolloModule} from 'apollo-angular';

/* services */
import { APIService } from './api.service';

/* components */
import { AppComponent } from './app.component';
import { StandardComponent } from './standard.component';
import { App1HomeComponent } from './app1-home.component';
import { CustomPageComponent } from './custom-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NoMatchComponent,
    StandardComponent,
    App1HomeComponent,
    CustomPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /* API */
    HttpClientModule,
    HttpLinkModule,
    ApolloModule,
  ],
  providers: [
    LoadAPIGuard,
    APIService
  ],
  entryComponents: [
    StandardComponent,
    App1HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
