import {createFeatureSelector, createSelector} from '@ngrx/store'
import {IPlanetsPageReducer} from './planets-page.reducer'
import {eStatus} from '../../../../models'

const selectPlanetsPage = createFeatureSelector<IPlanetsPageReducer>('planetsPage')
const selectList = createSelector(selectPlanetsPage, (state) => state.list)
const selectPagination = createSelector(selectPlanetsPage, (state) => state.pagination)
const selectIsListLoading = createSelector(selectPlanetsPage, (state) => state.status === eStatus.Loading)
const selectIsListLoaded = createSelector(selectPlanetsPage, (state) => state.status === eStatus.Success)

export const planetsPageSelectors = {
    selectPlanetsPage,
    selectList,
    selectIsListLoading,
    selectPagination,
    selectIsListLoaded
}
