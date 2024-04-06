import {Component, inject, OnDestroy, OnInit} from '@angular/core'
import {listAnimation} from '../../../animations/list-animation'
import {planetsPageSelectors} from '../store/planets-page/planets-page.selectors'
import {Store} from '@ngrx/store'
import {planetsPageActions} from '../store/planets-page/planets-page.actions'


@Component({
    selector: 'app-planets-page',
    templateUrl: './planets-page.component.html',
    styleUrls: ['./planets-page.component.scss'],
    animations: [listAnimation]
})
export class PlanetsPageComponent implements OnInit, OnDestroy {
    store = inject(Store)
    list = this.store.selectSignal(planetsPageSelectors.selectList)
    pagination = this.store.selectSignal(planetsPageSelectors.selectPagination)
    isLoading = this.store.selectSignal(planetsPageSelectors.selectIsListLoading)

    ngOnInit() {
        this.getPlanets()
    }

    ngOnDestroy() {
        this.store.dispatch(planetsPageActions.resetPage())
    }

    getPlanets() {
        this.store.dispatch(planetsPageActions.loadList())
    }

    protected readonly planetsPageSelectors = planetsPageSelectors
}
