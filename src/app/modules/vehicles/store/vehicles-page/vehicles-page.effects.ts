import {Injectable} from '@angular/core'
import {Store} from '@ngrx/store'
import {map, of, switchMap, takeUntil} from 'rxjs'

import {catchError} from 'rxjs/operators'
import {Actions, concatLatestFrom, createEffect, ofType} from '@ngrx/effects'
import {ApiService} from '../../../../services/api.service'
import {vehiclesPageActions} from './vehicles-page.actions'
import {vehiclesPageSelectors} from './vehicles-page.selectors'

@Injectable()
export class VehiclesPageEffects {
    constructor(
        private actions$: Actions,
        private store: Store,
        private apiService: ApiService,
    ) {
    }

    loadList$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(vehiclesPageActions.loadList),
            concatLatestFrom(() => this.store.select(vehiclesPageSelectors.selectPagination)),
            switchMap(([,pagination]) =>
                this.apiService.getVehicles(pagination?.next)
                    .pipe(
                        map(res => vehiclesPageActions.loadListSuccess({data: res})),
                        catchError((err) => {
                            console.error(err)
                            return of(vehiclesPageActions.loadListFailure())
                        }),
                        takeUntil(this.actions$.pipe(ofType(vehiclesPageActions.resetPage))),
                    )
            ),
        )
    })
}
