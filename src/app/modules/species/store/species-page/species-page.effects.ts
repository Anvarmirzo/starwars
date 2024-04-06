import {Injectable} from '@angular/core'
import {Store} from '@ngrx/store'
import {map, of, switchMap, takeUntil} from 'rxjs'

import {catchError} from 'rxjs/operators'
import {Actions, concatLatestFrom, createEffect, ofType} from '@ngrx/effects'
import {ApiService} from '../../../../services/api.service'
import {speciesPageActions} from './species-page.actions'
import {speciesPageSelectors} from './species-page.selectors'

@Injectable()
export class SpeciesPageEffects {
    constructor(
        private actions$: Actions,
        private store: Store,
        private apiService: ApiService,
    ) {
    }

    loadList$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(speciesPageActions.loadList),
            concatLatestFrom(() => this.store.select(speciesPageSelectors.selectPagination)),
            switchMap(([,pagination]) =>
                this.apiService.getSpecies(pagination?.next)
                    .pipe(
                        map(res => speciesPageActions.loadListSuccess({data: res})),
                        catchError((err) => {
                            console.error(err)
                            return of(speciesPageActions.loadListFailure())
                        }),
                        takeUntil(this.actions$.pipe(ofType(speciesPageActions.resetPage))),
                    )
            ),
        )
    })
}
