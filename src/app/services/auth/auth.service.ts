import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, Observable, tap, throwError} from "rxjs";
import {UserToken} from "./dto/UserToken";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private STORAGE_USER_KEY = "userToken";
    private _isAuthenticated = false;
    user$ = new BehaviorSubject<UserToken | null>(null);

    constructor(private httpClient: HttpClient, private router: Router) {
        this.changeOnUserPipe();
        this.autoLogin();
    }

    signup(username: string, password: string) {
        return this.httpClient.post("auth/signup",
            new AuthCredentialsDto(username, password)
        ).pipe();
    }

    signin(username: string, password: string) {
        return this.httpClient.post<UserToken>("auth/signin",
            new AuthCredentialsDto(username, password)
        ).pipe(
            tap((value) => {
                console.debug("[AuthService] success http request")
                this.handleAuthentication(value.accessToken);
            },(error) => {
                console.debug(`[AuthService] failed http request error: ${error}`)
            })
        );
    }


    public signout() {
        this.user$.next(null);
        //TODO handle this bug better
        setTimeout(() => {
            localStorage.removeItem(this.STORAGE_USER_KEY);
        }, 500);
        this.router.navigate(['/']);
    }

    get isAuthenticated(): boolean {
        return this._isAuthenticated;
    }

    private changeOnUserPipe() {
        this.user$.subscribe((value) => {
            if (value instanceof UserToken) {
                this._isAuthenticated = true;
            } else {
                this._isAuthenticated = false;
            }
        })
    }

    private autoLogin() {
        let rawToken = localStorage.getItem(this.STORAGE_USER_KEY);
        if (rawToken ) {
            let token = JSON.parse(rawToken);//to jest bez sensu...... ale innczej nie działą
            //TODO check for expiration
            this.handleAuthentication(token);
        }
    }

    private handleAuthentication(token: string) {
        const userToken: UserToken = new UserToken(token);
        this.user$.next(userToken);
        localStorage.setItem(this.STORAGE_USER_KEY, JSON.stringify(userToken.accessToken));
    }

    private handleError(errorResponse: HttpErrorResponse) {
        let errorMessage = "an unknown error has occurred";
        //TODO better error handling
        return throwError(errorMessage);
    }
}



class AuthCredentialsDto {
    constructor(private username:string,private password:string) {
    }
}
