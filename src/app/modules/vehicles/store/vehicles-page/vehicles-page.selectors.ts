import {createFeatureSelector, createSelector} from '@ngrx/store'
import {IVehiclesPageReducer} from './vehicles-page.reducer'
import {eStatus} from '../../../../models'

const selectVehiclesPage = createFeatureSelector<IVehiclesPageReducer>('vehiclesPage')
const selectList = createSelector(selectVehiclesPage, (state) => state.list)
const selectPagination = createSelector(selectVehiclesPage, (state) => state.pagination)
const selectIsListLoading = createSelector(selectVehiclesPage, (state) => state.status === eStatus.Loading)
const selectIsListLoaded = createSelector(selectVehiclesPage, (state) => state.status === eStatus.Success)

export const vehiclesPageSelectors = {
    selectVehiclesPage,
    selectList,
    selectIsListLoading,
    selectPagination,
    selectIsListLoaded
}
