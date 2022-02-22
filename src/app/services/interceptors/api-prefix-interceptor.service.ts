import {Inject, Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class ApiPrefixInterceptorService implements HttpInterceptor {

    constructor(@Inject("API_URL") private baseUrl:string) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let apiReq = req.clone({url: `${this.baseUrl}/${req.url}`});
        return next.handle(apiReq);
    }

}
