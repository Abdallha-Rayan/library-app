import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BooksService } from '../shared/books.service';

@Component({
    selector: 'lib-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
    books: Book[] = [];

    constructor(private booksService: BooksService) { }

    ngOnInit(): void {
        this.booksService.getAll()
            .subscribe(data => {
                this.books = data;
                // console.log(data[0].publishDate);
            });
    }

    async addTestBook() {
        const newBook = await this.booksService.create({
            title: 'Test',
            author: 'Test',
            publishDate: new Date(),
            pages: 100,
            edition: 2
        } as Book);

        console.log(newBook);
    }

}
