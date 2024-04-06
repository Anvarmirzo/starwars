import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {listAnimation} from '../../../animations/list-animation';
import {Store} from '@ngrx/store';
import {filmsPageActions} from '../store/films-page/films-page.actions';
import {filmsPageSelectors} from '../store/films-page/films-page.selectors';


@Component({
    selector: 'app-films-page',
    templateUrl: './films-page.component.html',
    styleUrls: ['./films-page.component.scss'],
    animations: [listAnimation]
})
export class FilmsPageComponent implements OnInit, OnDestroy {
    store = inject(Store)
    list = this.store.selectSignal(filmsPageSelectors.selectList)
    pagination = this.store.selectSignal(filmsPageSelectors.selectPagination)
    isLoading =  this.store.selectSignal(filmsPageSelectors.selectIsListLoading)

    ngOnInit() {
        this.getFilms()
    }

    ngOnDestroy() {
        this.store.dispatch(filmsPageActions.resetPage())
    }

    getFilms() {
        this.store.dispatch(filmsPageActions.loadList())
    }

    protected readonly filmsPageSelectors = filmsPageSelectors;
}
