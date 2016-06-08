import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { OverviewComponent } from './components/overview.component';
import { ImportComponent } from './components/login.component';
import { AboutComponent } from './components/about.component';

@Component({
    selector: 'cloud-app',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS
    ]
})

@RouteConfig([
    {
        path: '/',
        name: 'Overview',
        component: OverviewComponent
    },
    {
        path: '/import',
        name: 'Import',
        component: ImportComponent
    },
    {
        path: '/about',
        name: 'About',
        component: AboutComponent
    }

])

export class AppComponent { }