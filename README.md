# wagtail-angular-example

This project shows how to to build a simple [Angular](https://angular.io/) app using the [wagtail-graphql](https://github.com/tr11/wagtail-graphql) app. 

## Features
This repo shows how to:

* Request page information from wagtail-graphql as a route fallback
* Load regular Angular pages that rely on the GraphQL API to get data from Wagtail

The points above mean that Angular will try to match any route using the typical route matching, but instead of falling back to a static page, it dynamically creates the route match if the url exits in Wagtail.  

## Developing

The project relies on [Angular CLI](https://github.com/angular/angular-cli) -- all the typical instructions using the `ng` command still aplly.
