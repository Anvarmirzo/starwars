import {Injectable} from '@angular/core'
import {Store} from '@ngrx/store'
import {map, of, switchMap, takeUntil} from 'rxjs'

import {catchError} from 'rxjs/operators'
import {Actions, concatLatestFrom, createEffect, ofType} from '@ngrx/effects'
import {ApiService} from '../../../../services/api.service'
import {peoplePageActions} from './people-page.actions'
import {peoplePageSelectors} from './people-page.selectors'

@Injectable()
export class PeoplePageEffects {
    constructor(
        private actions$: Actions,
        private store: Store,
        private apiService: ApiService,
    ) {
    }

    loadList$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(peoplePageActions.loadList),
            concatLatestFrom(() => this.store.select(peoplePageSelectors.selectPagination)),
            switchMap(([,pagination]) =>
                this.apiService.getPeople(pagination?.next)
                    .pipe(
                        map(res => peoplePageActions.loadListSuccess({data: res})),
                        catchError((err) => {
                            console.error(err)
                            return of(peoplePageActions.loadListFailure())
                        }),
                        takeUntil(this.actions$.pipe(ofType(peoplePageActions.resetPage))),
                    )
            ),
        )
    })
}
