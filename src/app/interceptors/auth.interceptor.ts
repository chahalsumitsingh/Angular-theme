import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { LocalStorageService } from '../shared/services/local-storage-service';
import { Router } from '@angular/router';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private AUTH_HEADER = 'Authorization';

    constructor(private localStorageService: LocalStorageService, private router: Router) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = this.addAuthenticationToken(request);

        return next.handle(request).pipe(
            catchError((err: HttpErrorResponse) => {
                return this.catchErrorResponse(err);
             })
        );
    }
    addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {
        return request.clone({
            headers: request.headers.set(this.AUTH_HEADER, 'Bearer' + this.localStorageService.getItem('authorization'))
          });
    }

    catchErrorResponse(error: HttpErrorResponse): Observable<any> {
        if (error && error.status === 401) {
            this.localStorageService.clearItem('authorization');
            this.router.navigate(['login']);
            return throwError(error);
        } else {
            return throwError(error);
        }
    }

}