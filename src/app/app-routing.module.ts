import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { EmailNewsletterComponent } from './email-newsletter/email-newsletter.component';
import { EmailReactiveComponent } from './email-reactive/email-reactive.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'email',
        component: EmailNewsletterComponent
    },
    {
        path: 'email-reactive',
        component: EmailReactiveComponent
    },
    {
        path: 'books',
        component: BooksComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
