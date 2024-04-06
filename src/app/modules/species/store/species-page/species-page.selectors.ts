import {createFeatureSelector, createSelector} from '@ngrx/store'
import {ISpeciesPageReducer} from './species-page.reducer'
import {eStatus} from '../../../../models'

const selectSpeciesPage = createFeatureSelector<ISpeciesPageReducer>('speciesPage')
const selectList = createSelector(selectSpeciesPage, (state) => state.list)
const selectPagination = createSelector(selectSpeciesPage, (state) => state.pagination)
const selectIsListLoading = createSelector(selectSpeciesPage, (state) => state.status === eStatus.Loading)
const selectIsListLoaded = createSelector(selectSpeciesPage, (state) => state.status === eStatus.Success)

export const speciesPageSelectors = {
    selectSpeciesPage,
    selectList,
    selectIsListLoading,
    selectPagination,
    selectIsListLoaded
}
