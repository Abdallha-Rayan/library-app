import { Component, OnInit } from '@angular/core';
import { Book } from './shared/book';
import { BooksService } from './shared/books.service';

@Component({
    selector: 'lib-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Library App';


    constructor() { }

    ngOnInit(): void {

    }
}
