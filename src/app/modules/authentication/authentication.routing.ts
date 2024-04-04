import {Routes} from '@angular/router';

import {AppSideLoginComponent} from './login/login.component';
import {NotUserGuard} from '../../guards/not-user.guard';

export const AuthenticationRoutes: Routes = [
    {
        path: '',
        children: [
            {path: '', redirectTo: 'login', pathMatch: 'full'},
            {
                path: 'login',
                component: AppSideLoginComponent,
                canActivate: [NotUserGuard]
            },
        ],
    },
];
