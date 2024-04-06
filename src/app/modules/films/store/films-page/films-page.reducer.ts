import {createReducer, on} from '@ngrx/store';
import {eStatus, IResponse} from '../../../../models';
import {IFilms} from '../../../../models/films';
import {filmsPageActions} from './films-page.actions';

export interface IFilmsPageReducer {
    pagination: Omit<IResponse<IFilms>, 'results'> | null
    list: IFilms[]
    status: eStatus;
}

export const initialState: IFilmsPageReducer = {
    pagination: null,
    list: [],
    status: eStatus.Pending,
};

export const filmsPageReducer = createReducer(
    initialState,
    on(
        filmsPageActions.loadList,
        (state): IFilmsPageReducer => ({
            ...state,
            status: eStatus.Loading
        }),
    ),
    on(
        filmsPageActions.loadListSuccess,
        (state, {data: {results, ...pagination}}): IFilmsPageReducer => ({
            ...state,
            status: eStatus.Success,
            list: [...state.list, ...results],
            pagination
        }),
    ),
    on(
        filmsPageActions.loadListFailure,
        (state): IFilmsPageReducer => ({
            ...state,
            status: eStatus.Error
        }),
    ),
    on(
        filmsPageActions.resetPage,
        (): IFilmsPageReducer => ({
            pagination: null,
            list: [],
            status: eStatus.Pending,
        }),
    ),
);
