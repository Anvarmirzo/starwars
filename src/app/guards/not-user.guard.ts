import {inject, Injectable} from '@angular/core'
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from '@angular/router'
import {Observable} from 'rxjs'
import {AuthService} from '../services/auth.service'

@Injectable({
    providedIn: 'root',
})
export class NotUserGuard {
    authService = inject(AuthService)
    router = inject(Router)

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const isNotUser = !this.authService.isValidAuth()
        return isNotUser ? true : this.router.createUrlTree(['people'])
    }
}
