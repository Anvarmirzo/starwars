import {Component, inject, OnDestroy, OnInit} from '@angular/core'
import {listAnimation} from '../../../animations/list-animation'
import {Store} from '@ngrx/store'
import {peoplePageSelectors} from '../store/people-page/people-page.selectors'
import {peoplePageActions} from '../store/people-page/people-page.actions'


@Component({
    selector: 'app-people-page',
    templateUrl: './people-page.component.html',
    styleUrls: ['./people-page.component.scss'],
    animations: [listAnimation]
})
export class PeoplePageComponent implements OnInit, OnDestroy {
    store = inject(Store)
    list = this.store.selectSignal(peoplePageSelectors.selectList)
    pagination = this.store.selectSignal(peoplePageSelectors.selectPagination)
    isLoading = this.store.selectSignal(peoplePageSelectors.selectIsListLoading)

    ngOnInit() {
        this.getPeople()
    }

    ngOnDestroy() {
        this.store.dispatch(peoplePageActions.resetPage())
    }

    getPeople() {
        this.store.dispatch(peoplePageActions.loadList())
    }

    protected readonly peoplePageSelectors = peoplePageSelectors
}
