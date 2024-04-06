import {Component, inject, OnDestroy, OnInit} from '@angular/core'
import {listAnimation} from '../../../animations/list-animation'
import {Store} from '@ngrx/store';
import {speciesPageSelectors} from '../store/species-page/species-page.selectors';
import {speciesPageActions} from '../store/species-page/species-page.actions';


@Component({
    selector: 'app-species-page',
    templateUrl: './species-page.component.html',
    styleUrls: ['./species-page.component.scss'],
    animations: [listAnimation]
})
export class SpeciesPageComponent implements OnInit, OnDestroy {
    store = inject(Store)
    list = this.store.selectSignal(speciesPageSelectors.selectList)
    pagination = this.store.selectSignal(speciesPageSelectors.selectPagination)
    isLoading = this.store.selectSignal(speciesPageSelectors.selectIsListLoading)

    ngOnInit() {
        this.getSpecies()
    }

    ngOnDestroy() {
        this.store.dispatch(speciesPageActions.resetPage())
    }

    getSpecies() {
        this.store.dispatch(speciesPageActions.loadList())
    }

    protected readonly speciesPageSelectors = speciesPageSelectors;
}
