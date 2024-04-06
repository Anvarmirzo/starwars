import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {map, of, switchMap, takeUntil} from 'rxjs';

import {catchError} from 'rxjs/operators';
import {Actions, concatLatestFrom, createEffect, ofType} from '@ngrx/effects';
import {ApiService} from '../../../../services/api.service';
import {filmsPageActions} from './films-page.actions';
import {filmsPageSelectors} from './films-page.selectors';

@Injectable()
export class FilmsPageEffects {
    constructor(
        private actions$: Actions,
        private store: Store,
        private apiService: ApiService,
    ) {
    }

    loadList$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(filmsPageActions.loadList),
            concatLatestFrom(() => this.store.select(filmsPageSelectors.selectPagination)),
            switchMap(([,pagination]) =>
                this.apiService.getFilms(pagination?.next)
                    .pipe(
                        map(res => filmsPageActions.loadListSuccess({data: res})),
                        catchError((err) => {
                            console.error(err);
                            return of(filmsPageActions.loadListFailure());
                        }),
                        takeUntil(this.actions$.pipe(ofType(filmsPageActions.resetPage))),
                    )
            ),
        );
    });
}
