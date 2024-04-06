import {createReducer, on} from '@ngrx/store'
import {eStatus, IResponse} from '../../../../models'
import {starshipsPageActions} from './starships-page.actions'
import {IStarships} from '../../../../models/starships';

export interface IStarshipsPageReducer {
    pagination: Omit<IResponse<IStarships>, 'results'> | null
    list: IStarships[]
    status: eStatus
}

export const initialState: IStarshipsPageReducer = {
    pagination: null,
    list: [],
    status: eStatus.Pending,
}

export const starshipsPageReducer = createReducer(
    initialState,
    on(
        starshipsPageActions.loadList,
        (state): IStarshipsPageReducer => ({
            ...state,
            status: eStatus.Loading
        }),
    ),
    on(
        starshipsPageActions.loadListSuccess,
        (state, {data: {results, ...pagination}}): IStarshipsPageReducer => ({
            ...state,
            status: eStatus.Success,
            list: [...state.list, ...results],
            pagination
        }),
    ),
    on(
        starshipsPageActions.loadListFailure,
        (state): IStarshipsPageReducer => ({
            ...state,
            status: eStatus.Error
        }),
    ),
    on(
        starshipsPageActions.resetPage,
        (): IStarshipsPageReducer => ({
            pagination: null,
            list: [],
            status: eStatus.Pending,
        }),
    ),
)
