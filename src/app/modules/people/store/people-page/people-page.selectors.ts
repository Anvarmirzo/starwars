import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IPeoplePageReducer} from './people-page.reducer';
import {eStatus} from '../../../../models';

const selectPeoplePage = createFeatureSelector<IPeoplePageReducer>('peoplePage');
const selectList = createSelector(selectPeoplePage, (state) => state.list);
const selectPagination = createSelector(selectPeoplePage, (state) => state.pagination);
const selectIsListLoading = createSelector(selectPeoplePage, (state) => state.status === eStatus.Loading);
const selectIsListLoaded = createSelector(selectPeoplePage, (state) => state.status === eStatus.Success);

export const peoplePageSelectors = {
    selectPeoplePage,
    selectList,
    selectIsListLoading,
    selectPagination,
    selectIsListLoaded
};
