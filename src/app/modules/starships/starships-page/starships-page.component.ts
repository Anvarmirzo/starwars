import {Component, inject, OnDestroy, OnInit} from '@angular/core'
import {listAnimation} from '../../../animations/list-animation'
import {Store} from '@ngrx/store';
import {starshipsPageSelectors} from '../store/starships-page/starships-page.selectors';
import {starshipsPageActions} from '../store/starships-page/starships-page.actions';


@Component({
    selector: 'app-starships-page',
    templateUrl: './starships-page.component.html',
    styleUrls: ['./starships-page.component.scss'],
    animations: [listAnimation]
})
export class StarshipsPageComponent implements OnInit, OnDestroy {
    store = inject(Store)
    list = this.store.selectSignal(starshipsPageSelectors.selectList)
    pagination = this.store.selectSignal(starshipsPageSelectors.selectPagination)
    isLoading = this.store.selectSignal(starshipsPageSelectors.selectIsListLoading)

    ngOnInit() {
        this.getStarships()
    }

    ngOnDestroy() {
        this.store.dispatch(starshipsPageActions.resetPage())
    }

    getStarships() {
        this.store.dispatch(starshipsPageActions.loadList())
    }

    protected readonly starshipsPageSelectors = starshipsPageSelectors;
}
