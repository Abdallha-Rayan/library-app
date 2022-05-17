import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'lib-email-reactive',
    templateUrl: './email-reactive.component.html',
    styleUrls: ['./email-reactive.component.css']
})
export class EmailReactiveComponent implements OnInit {

    emailFrm: FormGroup;

    constructor(fb: FormBuilder) {
        // this.emailFrm = fb.group({
        //     email: ['', [
        //         Validators.required,
        //         Validators.email
        //     ]]
        // });
        this.emailFrm = new FormGroup({
            email: new FormControl('', [
                Validators.required,
                Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\.[a-z]{2,3}')
                // Validators.email
            ]),
            fullName: new FormControl('', [
                Validators.required,
                Validators.minLength(5)
            ])
        });
    }

    get fullName() {
        return this.emailFrm.get('fullName');
    }
    get email() {
        return this.emailFrm.get('email');
    }

    ngOnInit(): void {
    }

    onFormSubmit() {
        // this.email?.setValue('test@test.com');
        console.log(this.emailFrm.controls['fullName'].errors);

        // console.log(this.emailFrm.get('email')?.value);

    }

}
