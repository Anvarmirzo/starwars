import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IFilmsPageReducer} from './films-page.reducer';
import {eStatus} from '../../../../models';

const selectFilmsPage = createFeatureSelector<IFilmsPageReducer>('filmsPage');
const selectList = createSelector(selectFilmsPage, (state) => state.list);
const selectPagination = createSelector(selectFilmsPage, (state) => state.pagination);
const selectIsListLoading = createSelector(selectFilmsPage, (state) => state.status === eStatus.Loading);
const selectIsListLoaded = createSelector(selectFilmsPage, (state) => state.status === eStatus.Success);

export const filmsPageSelectors = {
    selectFilmsPage,
    selectList,
    selectIsListLoading,
    selectPagination,
    selectIsListLoaded
};
