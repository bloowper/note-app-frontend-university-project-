import {Inject, Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest} from "@angular/common/http";
import {exhaustMap, Observable, take} from "rxjs";
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
                    return next.handle(httpRequest);
                }
            })
        )
    }

}
