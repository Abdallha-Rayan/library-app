import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment as env } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { EmailNewsletterComponent } from './email-newsletter/email-newsletter.component';
import { BooksComponent } from './books/books.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailReactiveComponent } from './email-reactive/email-reactive.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        EmailNewsletterComponent,
        BooksComponent,
        EmailReactiveComponent
    ],
    imports: [
        // Firebase config
        provideFirebaseApp(() => initializeApp(env.firebase)),

        // Firestore config
        provideFirestore(() => getFirestore()),

        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
