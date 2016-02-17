import { Component } from 'angular2/core';
import { NgFor } from 'angular2/common';

@Component({
    selector: 'simple-table',
    templateUrl: '/src/components/table/simple.html',
    inputs: ['title', 'items'],
    directives: [NgFor]
})
export class SimpleTableComponent {
    title: string = 'Simple table';
    description: string = 'Example'
}
