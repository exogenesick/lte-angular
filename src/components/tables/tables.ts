import { Component } from 'angular2/core';
import { SimpleTableComponent } from '../table/simple';

@Component({
    templateUrl: '/src/components/tables/tables.html',
    directives: [SimpleTableComponent]
})
export class TablesComponent {
    title: string = 'Tables';
    description: string = 'Tables'
}
