import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: 'app-sink',
    templateUrl: './sink.component.html',
    styleUrls: ['./sink.component.scss']
})
export class SinkComponent implements OnInit {

    constructor(private authService: AuthService) {

    }

    ngOnInit(): void {
    }

    register() {
        this.authService.signup("Tomasz123123123", "ToMaSz123123!").subscribe(value => {
        }, (error: HttpErrorResponse) => {
            console.log(error.error);
        });
    }
}
