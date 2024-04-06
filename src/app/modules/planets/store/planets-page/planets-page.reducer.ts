import {createReducer, on} from '@ngrx/store'
import {eStatus, IResponse} from '../../../../models'
import {planetsPageActions} from './planets-page.actions'
import {IPlanets} from '../../../../models/planets'

export interface IPlanetsPageReducer {
    pagination: Omit<IResponse<IPlanets>, 'results'> | null
    list: IPlanets[]
    status: eStatus
}

export const initialState: IPlanetsPageReducer = {
    pagination: null,
    list: [],
    status: eStatus.Pending,
}

export const planetsPageReducer = createReducer(
    initialState,
    on(
        planetsPageActions.loadList,
        (state): IPlanetsPageReducer => ({
            ...state,
            status: eStatus.Loading
        }),
    ),
    on(
        planetsPageActions.loadListSuccess,
        (state, {data: {results, ...pagination}}): IPlanetsPageReducer => ({
            ...state,
            status: eStatus.Success,
            list: [...state.list, ...results],
            pagination
        }),
    ),
    on(
        planetsPageActions.loadListFailure,
        (state): IPlanetsPageReducer => ({
            ...state,
            status: eStatus.Error
        }),
    ),
    on(
        planetsPageActions.resetPage,
        (): IPlanetsPageReducer => ({
            pagination: null,
            list: [],
            status: eStatus.Pending,
        }),
    ),
)
