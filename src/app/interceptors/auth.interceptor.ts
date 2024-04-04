import {HttpEvent, HttpHandlerFn, HttpRequest} from '@angular/common/http';
import {inject} from '@angular/core';
import {Router} from '@angular/router';
import {Observable, map, switchMap, throwError, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AuthService} from '../services/auth.service';

export function authInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    const authService = inject(AuthService);
    const router = inject(Router);

    return next(addToken(request, authService.token)).pipe(
        catchError((error) => {
            const refreshToken = authService.token;
            if (error.status === 401 && refreshToken) {
                /*
                But refresh endpoint is not working
                return authService.refreshSession().pipe(
                     map((res) => res.token),
                     switchMap((token) => next(addToken(request, token))),
                 );*/
                authService.logOut().then(() => router.navigate(['auth', 'login']))
            } else {
                authService.logOut().then(() => router.navigate(['auth', 'login']))
            }

            return throwError(error);
        }),
    );
}

function addToken(request: HttpRequest<unknown>, token: string | null) {
    if (!token) return request;
    return request.clone({
        headers: request.headers
            .set('Authorization', 'Bearer ' + token)
    });
}
