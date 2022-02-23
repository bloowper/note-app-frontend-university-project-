import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

    form: FormGroup;
    loding: boolean = false;

    constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
        this.form = this.formBuilder.group({
            password: [null, [
                Validators.required,
            ]],
            username: [null, [
                Validators.required,
            ]]
        })
    }

    ngOnInit(): void {
    }

    onSubmit() {
        if (!this.form.invalid) {
            this.loding = true;
            this.authService.signin(this.form.value.username, this.form.value.password).subscribe(
                (value) => {
                    console.log("[sign-up.component.spec.ts] login success" + value);
                    this.loding = false;
                    this.router.navigate(['/'])
                }, (error) => {
                    this.form.reset()
                    this.loding = false;
                });
        }
    }
}
