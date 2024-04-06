import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {map, of, switchMap, takeUntil} from 'rxjs';

import {catchError} from 'rxjs/operators';
import {Actions, concatLatestFrom, createEffect, ofType} from '@ngrx/effects';
import {ApiService} from '../../../../services/api.service';
import {planetsPageActions} from './planets-page.actions';
import {planetsPageSelectors} from './planets-page.selectors';

@Injectable()
export class PlanetsPageEffects {
    constructor(
        private actions$: Actions,
        private store: Store,
        private apiService: ApiService,
    ) {
    }

    loadList$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(planetsPageActions.loadList),
            concatLatestFrom(() => this.store.select(planetsPageSelectors.selectPagination)),
            switchMap(([,pagination]) =>
                this.apiService.getPlanets(pagination?.next)
                    .pipe(
                        map(res => planetsPageActions.loadListSuccess({data: res})),
                        catchError((err) => {
                            console.error(err);
                            return of(planetsPageActions.loadListFailure());
                        }),
                        takeUntil(this.actions$.pipe(ofType(planetsPageActions.resetPage))),
                    )
            ),
        );
    });
}
