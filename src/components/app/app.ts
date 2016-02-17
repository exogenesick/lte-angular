import { Component, View } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { ROUTER_DIRECTIVES, Route, Router, RouteConfig, Location, RouterLink, RouterOutlet } from 'angular2/router';
import { HomeComponent } from '../home/home';
import { HeaderComponent } from '../header/header';
import { SidebarComponent } from '../sidebar/sidebar';
import { TablesComponent } from '../tables/tables';

@Component({
   selector: 'app',
   templateUrl: '/src/components/app/app.html',
   directives: [ROUTER_DIRECTIVES, HeaderComponent, SidebarComponent]
})
@RouteConfig([
    new Route({path: '/', component: HomeComponent, name: 'Home' }),
    new Route({path: '/tables', component: TablesComponent, name: 'Tables' })
])
export class AppComponent {
    title: string = 'Spider';
}
