import {isDevMode, NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {provideState, provideStore} from '@ngrx/store'
import {filmsPageReducer} from '../films/store/films-page/films-page.reducer'
import {provideEffects} from '@ngrx/effects'
import {FilmsPageEffects} from '../films/store/films-page/films-page.effects'
import {provideStoreDevtools} from '@ngrx/store-devtools'
import {peoplePageReducer} from '../people/store/people-page/people-page.reducer'
import {PeoplePageEffects} from '../people/store/people-page/people-page.effects'
import {planetsPageReducer} from '../planets/store/planets-page/planets-page.reducer'
import {PlanetsPageEffects} from '../planets/store/planets-page/planets-page.effects'
import {SpeciesPageEffects} from '../species/store/species-page/species-page.effects'
import {speciesPageReducer} from '../species/store/species-page/species-page.reducer'
import {starshipsPageReducer} from '../starships/store/starships-page/starships-page.reducer';
import {StarshipsPageEffects} from '../starships/store/starships-page/starships-page.effects';


@NgModule({
    providers: [
        provideStore(),
        provideState({name: 'filmsPage', reducer: filmsPageReducer}),
        provideState({name: 'peoplePage', reducer: peoplePageReducer}),
        provideState({name: 'planetsPage', reducer: planetsPageReducer}),
        provideState({name: 'speciesPage', reducer: speciesPageReducer}),
        provideState({name: 'starshipsPage', reducer: starshipsPageReducer}),

        provideEffects(FilmsPageEffects),
        provideEffects(PeoplePageEffects),
        provideEffects(PlanetsPageEffects),
        provideEffects(SpeciesPageEffects),
        provideEffects(StarshipsPageEffects),

        provideStoreDevtools({
            maxAge: 25, // Retains last 25 states
            logOnly: !isDevMode(), // Restrict extension to log-only mode
            autoPause: true, // Pauses recording actions and state changes when the extension window is not open
            trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
            traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
            connectInZone: false, // If set to true, the connection is established within the Angular zone
        }),
    ],
    declarations: [],
    imports: [
        CommonModule
    ]
})
export class StoreModule {
}
