import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'lib-email-newsletter',
    templateUrl: './email-newsletter.component.html',
    styleUrls: ['./email-newsletter.component.css']
})
export class EmailNewsletterComponent implements OnInit {
    email = 'test@test.com';
    constructor() { }

    ngOnInit(): void {
    }

    onSubmitForm(emailFrm: NgForm) {
        // console.log('Form submitted');
        console.log(emailFrm.controls['email'].errors);

        // emailFrm.controls['email'].setErrors([
        //     emailFrm.controls['email'].errors,
        //     {
        //         'email': true
        //     }
        // ]);
    }

}
