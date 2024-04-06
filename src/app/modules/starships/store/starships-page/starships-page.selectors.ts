import {createFeatureSelector, createSelector} from '@ngrx/store'
import {IStarshipsPageReducer} from './starships-page.reducer'
import {eStatus} from '../../../../models'

const selectStarshipsPage = createFeatureSelector<IStarshipsPageReducer>('starshipsPage')
const selectList = createSelector(selectStarshipsPage, (state) => state.list)
const selectPagination = createSelector(selectStarshipsPage, (state) => state.pagination)
const selectIsListLoading = createSelector(selectStarshipsPage, (state) => state.status === eStatus.Loading)
const selectIsListLoaded = createSelector(selectStarshipsPage, (state) => state.status === eStatus.Success)

export const starshipsPageSelectors = {
    selectStarshipsPage,
    selectList,
    selectIsListLoading,
    selectPagination,
    selectIsListLoaded
}
