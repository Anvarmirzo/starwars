import {ApplicationConfig, importProvidersFrom, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {authInterceptor} from './interceptors/auth.interceptor';
import {provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {StoreModule} from './modules/store/store.module';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
    providers: [
    provideRouter(routes),
    importProvidersFrom(StoreModule),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideStore(),
    provideEffects(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
