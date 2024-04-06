import {Injectable} from '@angular/core'
import {Store} from '@ngrx/store'
import {map, of, switchMap, takeUntil} from 'rxjs'

import {catchError} from 'rxjs/operators'
import {Actions, concatLatestFrom, createEffect, ofType} from '@ngrx/effects'
import {ApiService} from '../../../../services/api.service'
import {starshipsPageActions} from './starships-page.actions'
import {starshipsPageSelectors} from './starships-page.selectors'

@Injectable()
export class StarshipsPageEffects {
    constructor(
        private actions$: Actions,
        private store: Store,
        private apiService: ApiService,
    ) {
    }

    loadList$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(starshipsPageActions.loadList),
            concatLatestFrom(() => this.store.select(starshipsPageSelectors.selectPagination)),
            switchMap(([,pagination]) =>
                this.apiService.getStarships(pagination?.next)
                    .pipe(
                        map(res => starshipsPageActions.loadListSuccess({data: res})),
                        catchError((err) => {
                            console.error(err)
                            return of(starshipsPageActions.loadListFailure())
                        }),
                        takeUntil(this.actions$.pipe(ofType(starshipsPageActions.resetPage))),
                    )
            ),
        )
    })
}
