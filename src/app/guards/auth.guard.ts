import {inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard {
    authService = inject(AuthService)
    router = inject(Router)

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.authService.isValidAuth()) {
            void this.router.navigateByUrl('/auth/login', {state: {next: state.url}});
            return false;
        }
        return true;
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.authService.isValidAuth()) {
            this.router.navigateByUrl('/auth/login');
            return false;
        }
        return true;
    }
}
