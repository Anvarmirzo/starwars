import {createReducer, on} from '@ngrx/store';
import {eStatus, IResponse} from '../../../../models';
import {peoplePageActions} from './people-page.actions';
import {IPeople} from '../../../../models/people';

export interface IPeoplePageReducer {
    pagination: Omit<IResponse<IPeople>, 'results'> | null
    list: IPeople[]
    status: eStatus;
}

export const initialState: IPeoplePageReducer = {
    pagination: null,
    list: [],
    status: eStatus.Pending,
};

export const peoplePageReducer = createReducer(
    initialState,
    on(
        peoplePageActions.loadList,
        (state): IPeoplePageReducer => ({
            ...state,
            status: eStatus.Loading
        }),
    ),
    on(
        peoplePageActions.loadListSuccess,
        (state, {data: {results, ...pagination}}): IPeoplePageReducer => ({
            ...state,
            status: eStatus.Success,
            list: [...state.list, ...results],
            pagination
        }),
    ),
    on(
        peoplePageActions.loadListFailure,
        (state): IPeoplePageReducer => ({
            ...state,
            status: eStatus.Error
        }),
    ),
    on(
        peoplePageActions.resetPage,
        (): IPeoplePageReducer => ({
            pagination: null,
            list: [],
            status: eStatus.Pending,
        }),
    ),
);
