import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth/auth.service";

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

    form: FormGroup;
    loding: boolean = false;
    constructor(private authService:AuthService,private formBuilder: FormBuilder,private router: Router) {
        this.form = this.formBuilder.group({
            password: [null,[
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(64),
                Validators.pattern("((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$")
            ]],
            username: [null,[
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(20)
                //TODO write custom validator that make http request and check if username is unique
            ]]
        })
    }

    ngOnInit(): void {

    }

    onSubmit() {
        if (!this.form.invalid) {
            this.loding = true;
            this.authService.signup(this.form.value.username, this.form.value.password).subscribe(
                (value) => {
                    console.log("[sign-up.component.spec.ts] login success" + value);
                    this.loding = false;
                    this.router.navigate(['/signin'])
                }, (error) => {
                    this.form.reset({
                        password : this.form.value.password,//TODO this is not correct rewrite
                    })
                    this.loding = false;
                });
        }
    }
}
