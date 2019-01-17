# wagtail-angular-example

This project shows how to to build a simple [Angular](https://angular.io/) app using the [wagtail-graphql](https://github.com/tr11/wagtail-graphql) app. 

## Features
This repo shows how to:

* Request page information from wagtail-graphql as a route fallback
* Load regular Angular pages that rely on the GraphQL API to get data from Wagtail

The points above mean that Angular will try to match any route using the typical route matching, but instead of falling back to a static page, it dynamically creates the route match if the url exits in Wagtail.  

## Configuration
This project relies on the test wagtail project that is part of the `wagtail-graphql` library. It can be found [here](https://github.com/tr11/wagtail-graphql/tree/master/tests/test_project).  To run the Wagtail server:
```shell
python manage.py runserver
```
While the Wagtail server is running, launch this app with
```shell
yarn start
```
or, `npm start` if you use npm.  The two commnads above servet the website at `http://localhost:4200/` and the GraphiQL in-browser IDE at `http://localhost:8000/graphiql` 

## Developing

The project relies on [Angular CLI](https://github.com/angular/angular-cli) -- all the typical instructions using the `ng` command still aplly.
