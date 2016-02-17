import { Component, AfterViewInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    selector: 'sidebar',
    templateUrl: '/src/components/sidebar/sidebar.html',
    directives: [ROUTER_DIRECTIVES]
})
export class SidebarComponent implements AfterViewInit {
    ngAfterViewInit() {
        System.import('src/js/app')
            .then(() => { console.log('Loaded crappy js file'); });
    }
}
