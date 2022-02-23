import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, exhaustMap, Observable, take, throwError} from "rxjs";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class ApiTokenInterceptor implements HttpInterceptor {

    constructor(private authService:AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.authService.user$.pipe(
            take(1),
            exhaustMap( userToken => {
                if (!userToken) {
                    return next.handle(req);
                } else {
                    let httpRequest = req.clone({
                        setHeaders:{
                            Authorization: `Bearer ${userToken.accessToken}`
                        }
                    });
                    return next.handle(httpRequest).pipe(
                        catchError(this.handleError)//TODO fix this, not working now
                    );
                }
            })
        )
    }

    private handleError(errorResponse: HttpErrorResponse) {
        console.log(errorResponse);
        if (errorResponse.status == 401) {
            console.log("[ApiTokenInterceptor] Token not working")
            this.authService.signout();
        }
        return throwError(errorResponse);
    }
}
