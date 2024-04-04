import {Routes} from '@angular/router';
import {FullComponent} from './layouts/full/full.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>
            import('./modules/home/home.module').then((m) => m.HomeModule),
    },
    {
        path: '',
        component: FullComponent,
        children: [
            {
                path: 'people',
                loadChildren: () =>
                    import('./modules/people/people.module').then((m) => m.PeopleModule),
            },
            {
                path: 'planets',
                loadChildren: () =>
                    import('./modules/planets/planets.module').then((m) => m.PlanetsModule),
            },
            {
                path: 'species',
                loadChildren: () =>
                    import('./modules/species/species.module').then((m) => m.SpeciesModule),
            },
            {
                path: 'starships',
                loadChildren: () =>
                    import('./modules/starships/starships.module').then((m) => m.StarshipsModule),
            },
            {
                path: 'films',
                loadChildren: () =>
                    import('./modules/films/films.module').then((m) => m.FilmsModule),
            },
            {
                path: 'vehicles',
                loadChildren: () =>
                    import('./modules/vehicles/vehicles.module').then((m) => m.VehiclesModule),
            },
        ],
    },];
