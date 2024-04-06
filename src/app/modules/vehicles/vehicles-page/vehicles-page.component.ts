import {Component, inject, OnDestroy, OnInit} from '@angular/core'
import {listAnimation} from '../../../animations/list-animation'
import {Store} from '@ngrx/store';
import {vehiclesPageSelectors} from '../store/vehicles-page/vehicles-page.selectors';
import {vehiclesPageActions} from '../store/vehicles-page/vehicles-page.actions';


@Component({
    selector: 'app-vehicles-page',
    templateUrl: './vehicles-page.component.html',
    styleUrls: ['./vehicles-page.component.scss'],
    animations: [listAnimation]
})
export class VehiclesPageComponent implements OnInit, OnDestroy {
    store = inject(Store)
    list = this.store.selectSignal(vehiclesPageSelectors.selectList)
    pagination = this.store.selectSignal(vehiclesPageSelectors.selectPagination)
    isLoading = this.store.selectSignal(vehiclesPageSelectors.selectIsListLoading)

    ngOnInit() {
        this.getVehicles()
    }

    ngOnDestroy() {
        this.store.dispatch(vehiclesPageActions.resetPage())
    }

    getVehicles() {
        this.store.dispatch(vehiclesPageActions.loadList())
    }

    protected readonly vehiclesPageSelectors = vehiclesPageSelectors;
}
